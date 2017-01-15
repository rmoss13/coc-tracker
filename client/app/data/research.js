{   rD=[];
    rD['list']=[];
    rD['list'].push('Barbarian');
    rD['barbarian']=[];
    rD['barbarian']['type']="Ground";
    rD['barbarian']['preferred target']="None";
    rD['barbarian']['multiplier']=1;
    rD['barbarian']['ground attack']=true;
    rD['barbarian']['air attack']=false;
    rD['barbarian']['splash radius']=-1;
    rD['barbarian']['housing space']=1;
    rD['barbarian']['training time']=20;
    rD['barbarian']['movement speed']=16;
    rD['barbarian']['attack speed']=1.0;
    rD['barbarian']['barracks type']="Normal";
    rD['barbarian']['barracks level']=1;
    rD['barbarian']['trainable']=true;
    rD['barbarian']['range']=0.4;

    rD['barbarian']['death range']=-1;
    rD['barbarian']['dps']=[8,11,14,18,23,26,30];
    rD['barbarian']['hitpoints']=[45,54,65,78,95,110,125];
    rD['barbarian']['training cost']=[25,40,60,80,100,150,200];
    rD['barbarian']['laboratory level']=[1,1,3,5,6,7,8];
    rD['barbarian']['research time']=[0,6,24,72,120,240,336];
    rD['barbarian']['research cost']=[0,50000,150000,500000,1500000,4500000,6000000];

    rD['list'].push('Archer');
    rD['archer']=[];
    rD['archer']['type']="Ground";
    rD['archer']['preferred target']="None";
    rD['archer']['multiplier']=1;
    rD['archer']['ground attack']=true;
    rD['archer']['air attack']=true;
    rD['archer']['splash radius']=-1;
    rD['archer']['housing space']=1;
    rD['archer']['training time']=25;
    rD['archer']['movement speed']=24;
    rD['archer']['attack speed']=1.0;
    rD['archer']['barracks type']="Normal";
    rD['archer']['barracks level']=2;
    rD['archer']['trainable']=true;
    rD['archer']['range']=3.5;
    rD['archer']['death range']=-1;
    rD['archer']['dps']=[7,9,12,16,20,22,25];
    rD['archer']['hitpoints']=[20,23,28,33,40,44,48];
    rD['archer']['training cost']=[50,80,120,160,200,300,400];
    rD['archer']['laboratory level']=[1,1,3,5,6,7,8];
    rD['archer']['research time']=[0,12,48,72,120,240,336];
    rD['archer']['research cost']=[0,50000,250000,750000,2250000,6000000,7500000];

    rD['list'].push('Goblin');
    rD['goblin']=[];
    rD['goblin']['type']="Ground";
    rD['goblin']['preferred target']= "Resources";
    rD['goblin']['multiplier']=2;
    rD['goblin']['ground attack']=true;
    rD['goblin']['air attack']=false;
    rD['goblin']['splash radius']=-1;
    rD['goblin']['housing space']=1;
    rD['goblin']['training time']=30;
    rD['goblin']['movement speed']=32;
    rD['goblin']['attack speed']=1.0;
    rD['goblin']['barracks type']="Normal";
    rD['goblin']['barracks level']=4;
    rD['goblin']['trainable']=true;
    rD['goblin']['range']=0.4;
    rD['goblin']['death range']=-1;
    rD['goblin']['dps']=[11,14,19,24,32,42,52];
    rD['goblin']['hitpoints']=[25,30,36,43,52,68,74];
    rD['goblin']['training cost']=[25,40,60,80,100,150,200];
    rD['goblin']['laboratory level']=[1,1,3,5,6,7,8];
    rD['goblin']['research time']=[0,12,48,72,120,192,240];
    rD['goblin']['research cost']=[0,50000,250000,750000,2250000,4500000,6750000];

    rD['list'].push('Giant');
    rD['giant']=[];
    rD['giant']['type']="Ground";
    rD['giant']['preferred target']="Defenses";
    rD['giant']['multiplier']=1;
    rD['giant']['ground attack']=true;
    rD['giant']['air attack']=false;
    rD['giant']['splash radius']=-1;
    rD['giant']['housing space']=5;
    rD['giant']['training time']=120;
    rD['giant']['movement speed']=12;
    rD['giant']['attack speed']=2.0;
    rD['giant']['barracks type']="Normal";
    rD['giant']['barracks level']=3;
    rD['giant']['trainable']=true;
    rD['giant']['range']=1;
    rD['giant']['death range']=-1;
    rD['giant']['dps']=[11,14,19,24,31,43,50,57];
    rD['giant']['hitpoints']=[300,360,430,520,670,940,1100,1260];
    rD['giant']['training cost']=[250,750,1250,1750,2250,3000,3500,4000];
    rD['giant']['laboratory level']=[2,2,4,5,6,7,8,9];
    rD['giant']['research time']=[0,24,48,72,120,240,24*12,24*14];
    rD['giant']['research cost']=[0,100000,250000,750000,2250000,5000000,6000000,9500000];

    rD['list'].push('Wall Breaker');
    rD['wallbreaker']=[];
    rD['wallbreaker']['type']="Ground";
    rD['wallbreaker']['preferred target']="Walls";
    rD['wallbreaker']['multiplier']=40;
    rD['wallbreaker']['ground attack']=true;
    rD['wallbreaker']['air attack']=false;
    rD['wallbreaker']['splash radius']=2;
    rD['wallbreaker']['housing space']=2;
    rD['wallbreaker']['training time']=120;
    rD['wallbreaker']['movement speed']=24;
    rD['wallbreaker']['attack speed']=1.0;
    rD['wallbreaker']['barracks type']="Normal";
    rD['wallbreaker']['barracks level']=5;
    rD['wallbreaker']['trainable']=true;
    rD['wallbreaker']['range']=1;
    rD['wallbreaker']['death range']=-1;
    rD['wallbreaker']['dps']=[12,16,24,32,46,60];
    rD['wallbreaker']['hitpoints']=[20,24,29,35,42,54];
    rD['wallbreaker']['training cost']=[1000,1500,2000,2500,3000,3500];
    rD['wallbreaker']['laboratory level']=[2,2,4,5,6,8];
    rD['wallbreaker']['research time']=[0,24,48,72,120,240];
    rD['wallbreaker']['research cost']=[0,100000,250000,750000,2250000,6750000];

    rD['list'].push('Balloon');
    rD['balloon']=[];
    rD['balloon']['type']="Air";
    rD['balloon']['preferred target']="Defenses";
    rD['balloon']['multiplier']=1;
    rD['balloon']['ground attack']=true;
    rD['balloon']['air attack']=false;
    rD['balloon']['splash radius']=1.2;
    rD['balloon']['housing space']=5;
    rD['balloon']['training time']=480;
    rD['balloon']['movement speed']=10;
    rD['balloon']['attack speed']=4.0;
    rD['balloon']['barracks type']="Normal";
    rD['balloon']['barracks level']=6;
    rD['balloon']['trainable']=true;
    rD['balloon']['range']=0.5;
    rD['balloon']['death range']=1.2;
    rD['balloon']['dps']=[25,32,48,72,108,162,198];
    rD['balloon']['death damage']=[25,32,48,72,108,162,198];
    rD['balloon']['hitpoints']=[150,180,216,280,390,545,690];
    rD['balloon']['training cost']=[2000,2500,3000,3500,4000,4500,5000];
    rD['balloon']['laboratory level']=[2,2,4,5,6,7,9];
    rD['balloon']['research time']=[0,24,48,72,120,240,24*14];
    rD['balloon']['research cost']=[0,150000,450000,1350000,2500000,6000000,9500000];

    rD['list'].push('Wizard');
    rD['wizard']=[];
    rD['wizard']['type']="Ground";
    rD['wizard']['preferred target']="None";
    rD['wizard']['multiplier']=1;
    rD['wizard']['ground attack']=true;
    rD['wizard']['air attack']=true;
    rD['wizard']['splash radius']=0.3;
    rD['wizard']['housing space']=4;
    rD['wizard']['training time']=480;
    rD['wizard']['movement speed']=16;
    rD['wizard']['attack speed']=1.5;
    rD['wizard']['barracks type']="Normal";
    rD['wizard']['barracks level']=7;
    rD['wizard']['trainable']=true;
    rD['wizard']['range']=3;
    rD['wizard']['death range']=-1;
    rD['wizard']['dps']=[50,70,90,125,170,185,200];
    rD['wizard']['hitpoints']=[75,105,135,187.5,255,277.5,300];
    rD['wizard']['training cost']=[1500,2000,2500,3000,3500,4000,4500];
    rD['wizard']['laboratory level']=[3,3,4,5,6,7,8];
    rD['wizard']['research time']=[0,24*1,24*2,24*3,24*5,24*10,24*14];
    rD['wizard']['research cost']=[0,150000,450000,1350000,2500000,5000000,8500000];

    rD['list'].push('Healer');
    rD['healer']=[];
    rD['healer']['type']="Air";
    rD['healer']['preferred target']="None";
    rD['healer']['multiplier']=1;
    rD['healer']['ground attack']=false;
    rD['healer']['air attack']=false;
    rD['healer']['ground heal']=true;
    rD['healer']['air heal']=false;
    rD['healer']['splash radius']=2;
    rD['healer']['housing space']=14;
    rD['healer']['training time']=900;
    rD['healer']['movement speed']=16;
    rD['healer']['attack speed']=0.7;
    rD['healer']['barracks type']="Normal";
    rD['healer']['barracks level']=8;
    rD['healer']['trainable']=true;
    rD['healer']['range']=5;
    rD['healer']['death range']=-1;
    rD['healer']['hps']=[35,42,55,71];
    rD['healer']['hitpoints']=[500,600,840,1176];
    rD['healer']['training cost']=[5000,6000,8000,10000];
    rD['healer']['laboratory level']=[4,5,6,7];
    rD['healer']['research time']=[0,72,120,168];
    rD['healer']['research cost']=[0,750000,1500000,3000000];

    rD['list'].push('Dragon');
    rD['dragon']=[];
    rD['dragon']['type']="Air";
    rD['dragon']['preferred target']="None";
    rD['dragon']['multiplier']=1;
    rD['dragon']['ground attack']=true;
    rD['dragon']['air attack']=true;
    rD['dragon']['splash radius']=0.3;
    rD['dragon']['housing space']=20;
    rD['dragon']['training time']=1800;
    rD['dragon']['movement speed']=16;
    rD['dragon']['attack speed']=1.5;
    rD['dragon']['barracks type']="Normal";
    rD['dragon']['barracks level']=9;
    rD['dragon']['trainable']=true;
    rD['dragon']['range']=3;
    rD['dragon']['death range']=-1;
    rD['dragon']['dps']=[140,160,180,200,220,240];
    rD['dragon']['hitpoints']=[1900,2100,2300,2500,2700,2900];
    rD['dragon']['training cost']=[25000,29000,33000,37000,42000,46000];
    rD['dragon']['laboratory level']=[5,5,6,7,8,9];
    rD['dragon']['research time']=[0,24*7,24*9,24*10,24*12,24*14];
    rD['dragon']['research cost']=[0,2000000,3000000,5000000,7000000,9000000];

    rD['list'].push('P.E.K.K.A');
    rD['pekka']=[];
    rD['pekka']['type']="Ground";
    rD['pekka']['preferred target']="None";
    rD['pekka']['multiplier']=1;
    rD['pekka']['ground attack']=true;
    rD['pekka']['air attack']=false;
    rD['pekka']['splash radius']=-1;
    rD['pekka']['housing space']=25;
    rD['pekka']['training time']=2700;
    rD['pekka']['movement speed']=16;
    rD['pekka']['attack speed']=2.5;
    rD['pekka']['barracks type']="Normal";
    rD['pekka']['barracks level']=10;
    rD['pekka']['trainable']=true;
    rD['pekka']['range']=0.8;
    rD['pekka']['death range']=-1;
    rD['pekka']['dps']=[240,270,300,340,380];
    rD['pekka']['hitpoints']=[2800,3100,3500,4000,4500];
    rD['pekka']['training cost']=[28000,32000,36000,40000,45000];
    rD['pekka']['laboratory level']=[6,6,6,8,8];
    rD['pekka']['research time']=[0,24*10,24*12,24*14,24*14];
    rD['pekka']['research cost']=[0,3000000,6000000,7000000,8000000];

    rD['list'].push('Minion');
    rD['minion']=[];
    rD['minion']['type']="Air";
    rD['minion']['preferred target']="None";
    rD['minion']['multiplier']=1;
    rD['minion']['ground attack']=true;
    rD['minion']['air attack']=true;
    rD['minion']['splash radius']=-1;
    rD['minion']['housing space']=2;
    rD['minion']['training time']=45;
    rD['minion']['movement speed']=32;
    rD['minion']['attack speed']=1.0;
    rD['minion']['barracks type']="Dark";
    rD['minion']['barracks level']=1;
    rD['minion']['trainable']=true;
    rD['minion']['range']=2.75;
    rD['minion']['death range']=-1;
    rD['minion']['dps']=[35,38,42,46,50,54,57];
    rD['minion']['hitpoints']=[55,60,66,72,78,84,90];
    rD['minion']['training cost']=[6,7,8,9,10,11,12];
    rD['minion']['laboratory level']=[5,5,6,6,7,8,9];
    rD['minion']['research time']=[0,120,144,168,240,288,336];
    rD['minion']['research cost']=[0,10000,20000,30000,40000,100000,140000];

    rD['list'].push('Hog Rider');
    rD['hogrider']=[];
    rD['hogrider']['type']="Ground";
    rD['hogrider']['preferred target']="Defenses";
    rD['hogrider']['multiplier']=1;
    rD['hogrider']['ground attack']=true;
    rD['hogrider']['air attack']=false;
    rD['hogrider']['splash radius']=-1;
    rD['hogrider']['housing space']=5;
    rD['hogrider']['training time']=120;
    rD['hogrider']['movement speed']=24;
    rD['hogrider']['attack speed']=1.0;
    rD['hogrider']['barracks type']="Dark";
    rD['hogrider']['barracks level']=2;
    rD['hogrider']['trainable']=true;
    rD['hogrider']['range']=0.6;
    rD['hogrider']['death range']=-1;
    rD['hogrider']['dps']=[60,70,80,92,105,118,135];
    rD['hogrider']['hitpoints']=[270,312,360,415,475,535,600];
    rD['hogrider']['training cost']=[40,45,52,58,65,90,115];
    rD['hogrider']['laboratory level']=[5,5,6,6,7,8,9];
    rD['hogrider']['research time']=[0,24*5,24*6,24*8,24*10,24*12,24*14];
    rD['hogrider']['research cost']=[0,20000,30000,40000,50000,100000,150000];

    rD['list'].push('Valkyrie');
    rD['valkyrie']=[];
    rD['valkyrie']['type']="Ground";
    rD['valkyrie']['preferred target']="None";
    rD['valkyrie']['multiplier']=1;
    rD['valkyrie']['ground attack']=true;
    rD['valkyrie']['air attack']=false;
    rD['valkyrie']['splash radius']=1;
    rD['valkyrie']['housing space']=8;
    rD['valkyrie']['training time']=480;
    rD['valkyrie']['movement speed']=24;
    rD['valkyrie']['attack speed']=1.8;
    rD['valkyrie']['barracks type']="Dark";
    rD['valkyrie']['barracks level']=3;
    rD['valkyrie']['trainable']=true;
    rD['valkyrie']['range']=0.5;
    rD['valkyrie']['death range']=-1;
    rD['valkyrie']['dps']=[94,106,119,133,148];
    rD['valkyrie']['hitpoints']=[750,825,910,1000,1100];
    rD['valkyrie']['training cost']=[70,100,130,160,190];
    rD['valkyrie']['laboratory level']=[6,6,7,7,8];
    rD['valkyrie']['research time']=[0,192,240,288,336];
    rD['valkyrie']['research cost']=[0,50000,60000,70000,110000];

    rD['list'].push('Golem');
    rD['golem']=[];
    rD['golem']['type']="Ground";
    rD['golem']['preferred target']="Defenses";
    rD['golem']['multiplier']=1;
    rD['golem']['ground attack']=true;
    rD['golem']['air attack']=false;
    rD['golem']['splash radius']=-1;
    rD['golem']['housing space']=30;
    rD['golem']['training time']=2700;
    rD['golem']['movement speed']=12;
    rD['golem']['attack speed']=2.4;
    rD['golem']['barracks type']="Dark";
    rD['golem']['barracks level']=4;
    rD['golem']['trainable']=true;
    rD['golem']['range']=1;
    rD['golem']['death range']=1.2;
    rD['golem']['dps']=[38,42,46,50,54,58];
    rD['golem']['death damage']=[350,400,450,500,550,600];
    rD['golem']['hitpoints']=[4500,5000,5500,6000,6300,6500];
    rD['golem']['training cost']=[450,525,600,675,750,825];
    rD['golem']['laboratory level']=[6,6,7,7,8,9];
    rD['golem']['research time']=[0,24*6,24*8,24*10,24*12,24*14];
    rD['golem']['research cost']=[0,60000,70000,80000,90000,200000];

    rD['list'].push('Witch');
    rD['witch']=[];
    rD['witch']['type']="Ground";
    rD['witch']['preferred target']="None";
    rD['witch']['multiplier']=1;
    rD['witch']['ground attack']=true;
    rD['witch']['air attack']=true;
    rD['witch']['splash radius']=0.3;
    rD['witch']['housing space']=12;
    rD['witch']['training time']=1200;
    rD['witch']['movement speed']=12;
    rD['witch']['attack speed']=0.7;
    rD['witch']['barracks type']="Dark";
    rD['witch']['barracks level']=5;
    rD['witch']['trainable']=true;
    rD['witch']['range']=4;
    rD['witch']['death range']=-1;
    rD['witch']['dps']=[50,60,70];
    rD['witch']['hitpoints']=[270,300,330];
    rD['witch']['training cost']=[250,350,450];
    rD['witch']['laboratory level']=[7,7,9];
    rD['witch']['research time']=[0,24*10,24*14];
    rD['witch']['research cost']=[0,75000,160000];

    rD['list'].push('Lava Hound');
    rD['lavahound']=[];
    rD['lavahound']['type']="Air";
    rD['lavahound']['preferred target']="Air Defense";
    rD['lavahound']['multiplier']=1;
    rD['lavahound']['ground attack']=true;
    rD['lavahound']['air attack']=true;
    rD['lavahound']['splash radius']=-1;
    rD['lavahound']['housing space']=30;
    rD['lavahound']['training time']=2700;
    rD['lavahound']['movement speed']=20;
    rD['lavahound']['attack speed']=2;
    rD['lavahound']['barracks type']="Dark";
    rD['lavahound']['barracks level']=6;
    rD['lavahound']['trainable']=true;
    rD['lavahound']['range']=1;
    rD['lavahound']['death range']=1.2;
    rD['lavahound']['dps']=[10,12,14,16];
    rD['lavahound']['death damage']=[100,150,200,250];
    rD['lavahound']['hitpoints']=[5700,6200,6700,7200];
    rD['lavahound']['training cost']=[390,450,510,570];
    rD['lavahound']['laboratory level']=[7,7,8,9];
    rD['lavahound']['research time']=[0,24*10,24*12,24*14];
    rD['lavahound']['research cost']=[0,60000,70000,150000];


    rD['list'].push('Bowler');
    rD['bowler']=[];
    rD['bowler']['type']="Ground";
    rD['bowler']['preferred target']="Defenses";
    rD['bowler']['multiplier']=1;
    rD['bowler']['ground attack']=true;
    rD['bowler']['air attack']=false;
    rD['bowler']['splash radius']=-1;
    rD['bowler']['housing space']=8;
    rD['bowler']['training time']=480;
    rD['bowler']['movement speed']=14;
    rD['bowler']['attack speed']=1.5;
    rD['bowler']['barracks type']="Dark";
    rD['bowler']['barracks level']=2;
    rD['bowler']['trainable']=true;
    rD['bowler']['range']=0.6;
    rD['bowler']['death range']=-1;
    rD['bowler']['dps']=[65,75,85];
    rD['bowler']['hitpoints']=[320,350,380];
    rD['bowler']['training cost']=[130,150,170];
    rD['bowler']['laboratory level']=[8,8,9];
    rD['bowler']['research time']=[0,240,336];
    rD['bowler']['research cost']=[0,120000,200000];


    rD['list'].push('Miner');
    rD['miner']=[];
    rD['miner']['type']="Ground";
    rD['miner']['preferred target']="Defenses";
    rD['miner']['multiplier']=1;
    rD['miner']['ground attack']=true;
    rD['miner']['air attack']=false;
    rD['miner']['splash radius']=-1;
    rD['miner']['housing space']=10;
    rD['miner']['training time']=240;
    rD['miner']['movement speed']=16;
    rD['miner']['attack speed']=1;
    rD['miner']['barracks type']="Normal";
    rD['miner']['barracks level']=2;
    rD['miner']['trainable']=true;
    rD['miner']['range']=3;
    rD['miner']['death range']=-1;
    rD['miner']['dps']=[80,88,96,104];
    rD['miner']['hitpoints']=[500,550,600,650];
    rD['miner']['training cost']=[4200,4800,5400,6000];
    rD['miner']['laboratory level']=[8,8,9,9];
    rD['miner']['research time']=[0,24*10,24*12,24*14];
    rD['miner']['research cost']=[0,7500000,8500000,9500000];

    rD['list'].push('Baby Dragon');
    rD['babydragon']=[];
    rD['babydragon']['type']="Air";
    rD['babydragon']['preferred target']="Defenses";
    rD['babydragon']['multiplier']=1;
    rD['babydragon']['ground attack']=true;
    rD['babydragon']['air attack']=true;
    rD['babydragon']['splash radius']=0.3;
    rD['babydragon']['housing space']=10;
    rD['babydragon']['training time']=240;
    rD['babydragon']['movement speed']=16;
    rD['babydragon']['attack speed']=1;
    rD['babydragon']['barracks type']="Normal";
    rD['babydragon']['barracks level']=2;
    rD['babydragon']['trainable']=true;
    rD['babydragon']['range']=3;
    rD['babydragon']['death range']=-1;
    rD['babydragon']['dps']=[75,85,95,105,115];
    rD['babydragon']['hitpoints']=[1200,1300,1400,1500,1600];
    rD['babydragon']['training cost']=[15000,16000,17000,18000,19000];
    rD['babydragon']['laboratory level']=[7,7,8,8,9];
    rD['babydragon']['research time']=[0,24*8,24*10,24*12,24*14];
    rD['babydragon']['research cost']=[0,5000000,6000000,7000000,8000000];

    var i=0;
    rD['list'].push('Lightning');
    rD['lightning']=[];
    rD['lightning']['available']=true;
    rD['lightning']['creation time']=30;
    rD['lightning']['spell factory']=1;
    rD['lightning']['research cost']=[0,200000,500000,1000000,2000000,6000000,8000000];
    rD['lightning']['research time']=[0,24,48,72,96,240,336];
    rD['lightning']['laboratory level']=[1,1,2,3,6,7,8];

    rD['list'].push('Healing');
    rD['healing']=[];
    rD['healing']['available']=true;
    rD['healing']['creation time']=30;
    rD['healing']['spell factory']=2;
    rD['healing']['research cost']=[0,300000,600000,1200000,2400000,4800000];
    rD['healing']['research time']=[0,24,48,72,120,168];
    rD['healing']['laboratory level']=[4,4,4,5,6,7];

    rD['list'].push('Rage');
    rD['rage']=[];
    rD['rage']['available']=true;
    rD['rage']['creation time']=45;
    rD['rage']['spell factory']=3;
    rD['rage']['research cost']=[0,450000,900000,1800000,3000000];
    rD['rage']['research time']=[0,48,72,120,168];
    rD['rage']['laboratory level']=[5,5,5,5,5];

    rD['list'].push('Jump');
    rD['jump']=[];
    rD['jump']['available']=true;
    rD['jump']['creation time']=45;
    rD['jump']['spell factory']=4;
    rD['jump']['research cost']=[0,3000000,6000000];
    rD['jump']['research time']=[0,120,168];
    rD['jump']['laboratory level']=[7,7,8];

    rD['list'].push('Freeze');
    rD['freeze']=[];
    rD['freeze']['available']=true;
    rD['freeze']['creation time']=45;
    rD['freeze']['spell factory']=5;
    rD['freeze']['research cost']=[0,4000000,5000000,6500000,8000000];
    rD['freeze']['research time']=[0,120,168,240,336];
    rD['freeze']['laboratory level']=[8,8,8,8,8];

    rD['list'].push('Clone');
    rD['clone']=[];
    rD['clone']['available']=true;
    rD['clone']['creation time']=45;
    rD['clone']['spell factory']=5;
    rD['clone']['research cost']=[0,5000000,7000000,9000000];
    rD['clone']['research time']=[0,24*8,24*10,24*14];
    rD['clone']['laboratory level']=[8,8,9,9];

    rD['list'].push('Poison');
    rD['poison']=[];
    rD['poison']['available']=true;
    rD['poison']['creation time']=15;
    rD['poison']['research cost']=[0,25000,50000,75000,150000];
    rD['poison']['research time']=[0,24*4,24*6,24*10,24*12];
    rD['poison']['laboratory level']=[6,6,7,8,9];
    rD['poison']['barracks type']='Dark';

    rD['list'].push('Earthquake');
    rD['earthquake']=[];
    rD['earthquake']['available']=true;
    rD['earthquake']['creation time']=15;
    rD['earthquake']['research cost']=[0,30000,60000,90000];
    rD['earthquake']['research time']=[0,24*6,24*8,24*12];
    rD['earthquake']['laboratory level']=[6,6,7,8];
    rD['earthquake']['barracks type']='Dark';

    rD['list'].push('Haste');
    rD['haste']=[];
    rD['haste']['available']=true;
    rD['haste']['creation time']=15;
    rD['haste']['research cost']=[0,40000,80000,100000];
    rD['haste']['research time']=[0,24*8,24*10,24*14];
    rD['haste']['laboratory level']=[7,7,8,8];
    rD['haste']['barracks type']='Dark';

    rD['list'].push('Skeleton');
    rD['skeleton']=[];
    rD['skeleton']['available']=true;
    rD['skeleton']['creation time']=15;
    rD['skeleton']['research cost']=[0,50000,75000,100000];
    rD['skeleton']['research time']=[0,24*8,24*10,24*12];
    rD['skeleton']['laboratory level']=[7,8,8,9];
    rD['skeleton']['barracks type']='Dark';
}
