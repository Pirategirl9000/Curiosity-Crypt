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
    if (player.hp <= 0) {
        gameOver();
    }

    if (enemy.hp <= 0) {
        player.gold += enemy.gold;
        player.xp += enemy.xp;

    }

}

function gameOver() {
    
}

class Player {
    constructor() {
        this.maxHP = 10;
        this.xpReq = 5;
        this.xp = 0;
        this.HP = 10;
        this.attack = 3;
        this.gold = 0;
        this.lvl = 0;
    }

    rollAttack() {
        let roll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        if (roll >= 15) {return this.attack * 2;} //critical hit 
        else if (roll > 5) {return this.attack;} //basic hit
        else {return 0;} //miss
    }

    levelUp() {
        alert("LEVEL UP!");
        //Uses formula y=5 * 2^x
        this.maxHP *= 1.5
        if (this.lvl % 5 == 0) {this.attack *= 2;} //every five levels attack dmg is doubled
        this.HP = this.maxHP;
        this.lvl++;

        this.xp -= this.xpReq;
        this.xpReq = Math.floor(5 * Math.pow(2, this.lvl))
    }
} const player = new Player();

class Basic_Goblin {
    constructor() {
        this.maxHP = 5;
        this.hp = 5;
        this.attack = 1;
        this.gold = 1;
        this.xp = 5;
        this.image = "Basic_Goblin.png";
    }
    
    rollAttack() {
        let roll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        if (roll >= 15) {return this.attack * 2;} //critical hit 
        else if (roll > 5) {return this.attack;} //basic hit
        else {return 0;} //miss
    }
}

class Beserk_Goblin {
    constructor() {
        this.maxHP = 25;
        this.hp = 25;
        this.attack = 5;
        this.gold = 20;
        this.xp = 100;
        this.image = "Beserk_Goblin.png";
    }

    rollAttack() {
        let roll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        if (roll >= 15) {return this.attack * 2;} //critical hit 
        else if (roll > 5) {return this.attack;} //basic hit
        else {return 0;} //miss
    }
}

class Mage_Goblin {
    constructor() {
        this.maxHP = 10;
        this.hp = 10;
        this.attack = 4;
        this.gold = 5;
        this.xp = 25;
        this.image = "Mage_Goblin.png";
    }
    rollAttack() {
        let roll = Math.floor(Math.random() * (20 - 1 + 1) + 1);
        if (roll >= 15) {return this.attack * 2;} //critical hit 
        else if (roll > 5) {return this.attack;} //basic hit
        else {return 0;} //miss
    }
}

class Kluthulu {
    constructor() {
        this.maxHP = 1000;
        this.hp = 1000;
        this.attack = 50;
        this.gold = 10000;
        this.xp = 10000;
        this.image = "Kluthulu.png";
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

//return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
