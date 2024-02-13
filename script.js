// alert("press 'f' to toggle fullscreen");
let fsc = false;
let enemy = new Basic_Goblin();
update();

function spawnEnemy() {
    let possibilites = getPossibleEnemies();
    let r = Math.floor(Math.random() * ((possibilites.length - 1) - 1));
    enemy = possibilites[r];
}

function getPossibleEnemies() {
    let arr;

    if (player.lvl > 0 && player.lvl < 5) {
        arr.push(new Basic_Goblin());
    }

    return arr;
}

function update() {


}

class Player {
    constructor() {
        this.maxHP = 10;
        this.HP = 10;
        this.attack = 3;
        this.gold = 0;
        this.lvl = 1;
    }

} const player = new Player();

class Basic_Goblin {
    constructor() {
        this.maxHP = 5;
        this.hp = 5;
        this.attack = 1;
        this.gold = 1;
        this.xp = 5;
        this.image = "Curiosity_Crypt_Basic_Goblin.png";
    }
    
    rollAttack() {
        let roll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        if (roll >= 15) {return this.attack * 2;} //critical hit 
        else if (roll > 5) {return this.attack;} //basic hit
        else {return 0;} //miss
    }
}

//Fullscreen Handler
document.addEventListener("keypress", (e) => {
    if (e.key == 'f' && !fsc) {
        document.querySelector("body").requestFullscreen();
        fsc = true;
    } else {
        document.exitFullscreen();
        fsc = false;
    }
});
