'use strict'

angular.module 'cocApp'
.controller 'MainCtrl', ($scope, $modal, $log, util, lodash, userFactory, $routeParams, $http, moment) ->
  # $scope.awesomeThings = []

  # $http.get('/api/things').success (awesomeThings) ->
  #   $scope.awesomeThings = awesomeThings


  # $scope.addThing = ->
  #   return if $scope.newThing is ''
  #   $http.post '/api/things',
  #     name: $scope.newThing

  #   $scope.newThing = ''

  # $scope.deleteThing = (thing) ->
  #   $http.delete '/api/things/' + thing._id
        user = userFactory.get()

        $scope.timeStr = util.timeStr
        $scope.costStr = util.costStr
        $scope.costFormat = util.costFormat
        $scope.builder = user.builder
        $scope.hall = user.hall
        $scope.upgradeList = user.upgrade
        $scope.activeTab = $routeParams.category
        $scope.set = {}
        $scope.set.hideDone = user.set.hideDone
        $scope.set.hideDoneResearch = user.set.hideDoneResearch
        $scope.limitTo = user.limitTo
        $scope.items = ['1','2','3']
        $scope.sliders = {}
        $scope.testOptions = {
            min: 0
            max: 1230
            value: 500
            step: 2
            }

        category = if ($scope.activeTab == undefined) then 'all' else $scope.activeTab
        #console.log(category)
        nextUpgrade = (current, maxLevel, timeArray, costArray) ->
            return {} if (current >= maxLevel)
            data = []
            for i in [current..maxLevel-1]
                data.push([i+1, costArray[i], timeArray[i]])
            return {
                type: util.costType(data[0][1])
                popover: util.costStr(data[0][1]) + ' / ' + util.timeStr(data[0][2])
                data: data
            }
        update = () ->
            $scope.list = list =  []
            $scope.detail = detail = {}
            $scope.requiredCost = [0,0,0]
            $scope.doneCost = [0,0,0]
            $scope.requiredTime = 0
            $scope.doneTime = 0
            # $scope.activeTab = undefined
            for item in lodash.sortBy(util.building_list(category))
                name = util.cannonicalName(item)
                availableNum = buildingData['number available'][name][user.hall-1]
                continue if (availableNum == 0 )

                maxLevel = util.max_level(user.hall, buildingData[name]['required town hall'])
                detail[name] = []
                uc = buildingData[name]['upgrade cost']
                ut = buildingData[name]['upgrade time']
                for i in [0..availableNum-1]
                    user[name] ?= []
                    currentLevel = user[name][i] ? 0
                    continue if ($scope.set.hideDone && currentLevel >= maxLevel)
                    find = lodash.findIndex(user.upgrade, {
                        name: name,
                        index: i
                    })
                    # console.log(find)
                    level = currentLevel
                    level++ if find >= 0
                    detail[name].push(
                        idx: i
                        level: currentLevel
                        nextUpgrade: nextUpgrade(level, maxLevel, ut, uc)
                        upgradeIdx: find
                    )
                continue if detail[name].length == 0

                list.push(
                    title: item
                    name: name
                    available: availableNum
                    maxLevel: maxLevel
                )
            $scope.summary = util.totalCostTime(category, user)
            $scope.researchSummary = util.totalResearchCostTime(user)
            # console.log($scope.researchSummary)
            $scope.wallSummary = util.totalWallCost(user)
            # console.log($scope.activeTab)

        update()

        $scope.changeLevel = (name, index, inc, maxLevel) ->
            currentLevel = oldLevel = $scope.detail[name][index].level
            currentLevel += inc
            currentLevel = 0 if currentLevel < 0
            currentLevel = maxLevel if currentLevel > maxLevel
            # maxLevel = util.max_level(user.hall, buildingData[name]['required town hall'])
            uc = buildingData[name]['upgrade cost']
            ut = buildingData[name]['upgrade time']
            $scope.detail[name][index] =
                idx: $scope.detail[name][index].idx
                level: currentLevel
                nextUpgrade: nextUpgrade(currentLevel, maxLevel, ut, uc)
            if oldLevel != currentLevel
                user[name][$scope.detail[name][index].idx] = currentLevel
                $scope.summary = util.totalCostTime(category, user)
                userFactory.set(user)

        $scope.timeWithBuilder = (time, builder, maxTime) ->
            # console.log($scope.longRequiredTime, $scope.requiredTime)
            # time = lodash.max([$scope.requiredTime/$scope.builder, $scope.longRequiredTime])
            max = lodash.max([time/builder, maxTime])
            return util.timeStr(max)

        $scope.setHall = (hall) ->
            $scope.hall = user.hall = hall
            userFactory.set(user)
            update()

        $scope.setBuilder = (builder) ->
            $scope.builder = user.builder = builder
            userFactory.set(user)

        $scope.settingChanged = () ->
            console.log($scope.set.hideDone, $scope.set.hideDoneResearch)
            user.set.hideDone = $scope.set.hideDone
            user.set.hideDoneResearch = $scope.set.hideDoneResearch
            userFactory.set(user)

        $scope.upgradePre = (name, title, index) ->
            modalInstance = $modal.open
                templateUrl: 'myModalContent.html'
                controller: 'ModalInstanceCtrl',
                size: 'sm'
                resolve:
                    items: () ->
                        return $scope.items

        $scope.upgrade = (name, title, index) ->
            idx = $scope.detail[name][index].idx
            level = user[name][idx] ? 0
            user.upgrade ?= []

            find = lodash.findIndex(user.upgrade, {
                name: name,
                index: idx
            })
            ut = buildingData[name]['upgrade time']
            due = new moment()
            due = due.add(ut[level], 'minutes')
            # console.log(ut[level], due, user.upgrade, user.upgrade.length)
            if (find < 0)
                upgradeNum = lodash.filter user.upgrade, (u) ->
                    return u.index >= 0
                return if (user.builder <= upgradeNum.length)

                $scope.detail[name][index].upgradeIdx = user.upgrade.length
                user.upgrade.push(
                    name: name
                    title: title
                    index: idx
                    level: level+1
                    time: ut[level]
                    due: due
                )
            else
                $scope.detail[name][index].upgradeIdx = find
                user.upgrade[find] = {
                    name: name
                    title: title
                    index: idx
                    level: level+1
                    time: ut[level]
                    due: due
                }
            maxLevel = util.max_level(user.hall, buildingData[name]['required town hall'])
            uc = buildingData[name]['upgrade cost']
            $scope.detail[name][index].nextUpgrade = nextUpgrade(level+1, maxLevel, ut, uc)
            $scope.summary = util.totalCostTime(category, user)
            # user.upgrade = []
            userFactory.set(user)

            # console.log(find, name, index, idx, level, util.timeStr(ut[level]) )
            # console.log(user.upgrade)
            #
        $scope.cancelUpgrade = (name, index) ->
           lodash.remove(user.upgrade, {
                   name: name,
                   index: index
           })
           $scope.summary = util.totalCostTime(category, user)
           $scope.researchSummary = util.totalResearchCostTime(user)
           userFactory.set(user)

angular.module('cocApp')
    .controller 'ModalInstanceCtrl', ($scope, $modalInstance, items) ->
        $scope.items = items
        $scope.selected =
            item: $scope.items[0]

        $scope.ok = ()->
            $modalInstance.close($scope.selected.item)
        $scope.cancel = ()->
            $modalInstance.dismiss('cancel')
