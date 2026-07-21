let PlayerHP = 100;
let PlayerNRG = 200;
let MonstersBeaten =0;
let currentMonster =null;
let MagicRec = 0;
let MaceRec = 0;
let RapierRec = 0;
let SwordRec = 0;
const monsters = [
  { name: "Enchanted Armour", img: "Images/Enchanted-Armour.png", defeatedImg: "Images/Enchanted-Armour - Defeated.png", hp: 30, dmg: 10 },
  { name: "Ghost", img: "Images/Ghost.png", defeatedImg: "Images/Ghost - Defeated.png", hp: 30, dmg: 8 },
  { name: "Pumpkin Head", img: "Images/Pumpkin-Head.png", defeatedImg: "Images/Pumpkin-Head - Defeated.png", hp: 30, dmg: 12 },
  { name: "Vampire", img: "Images/Vampire.png", defeatedImg: "Images/Vampire - Defeated.png", hp: 30, dmg: 15 }
];

addEventListener("load", function(){RandomizeMonsters()})
function RandomizeMonsters(){
    monsters.sort(()=> Math.random()-.5)
    currentMonster = monsters[0];
    DisplayMonster(currentMonster);
    DisplayMonsterOrder(monsters);
  }

function DisplayMonster(monster) {
  document.querySelector("#Monster-Info h1").textContent = monster.name;
  document.querySelector("#Monster-Info h3").textContent = `HP: ${monster.hp}  DMG: ${monster.dmg}`;
  document.getElementById("Current-Monster").src = monster.img;
}
function DisplayMonsterOrder(monster){
  document.getElementById("first-Monster").src = monster[0].img;
  document.getElementById("second-Monster").src = monster[1].img;
  document.getElementById("third-Monster").src = monster[2].img;
  document.getElementById("fourth-Monster").src = monster[3].img;
}

document.getElementById("Magic-Button").addEventListener("click", function(){ Attack(25,"Magic-Ball",25)});
document.getElementById("Mace-Button").addEventListener("click", function(){ Attack(15,"Mace",15)});
document.getElementById("Rapier-Button").addEventListener("click", function(){ Attack(5,"Rapier",5)});
document.getElementById("Sword-Button").addEventListener("click", function(){ Attack(10,"Sword",10)});
document.getElementById("Help-Button").addEventListener("click", function(){Help(PlayerNRG)});

function Help(energy){
  if (energy === 0 ){ 
    alert("No NRG Left. :(")
  }while (energy >= 25){
    MagicRec++;
    energy -= 25;
  }while (energy >= 15){
    MaceRec++;
    energy -= 15;
  }while (energy >= 10){
    SwordRec++;
    energy -= 10;
  }while (energy >= 5){
    RapierRec++;
    energy -= 5;
  }
  
    alert("Use magic "+MagicRec+" times, Mace "+MaceRec+" times, Sword "+SwordRec+" times, and Rapier "+ RapierRec+" times for the best NRG usage." )
  }
function Attack(cost, name, dmg) {
  //NRG reduction after using an attack
  const nrgCost = cost;
  if (PlayerNRG >= nrgCost) {
    PlayerNRG -= nrgCost; 
    const ball = document.getElementById(name);
    ball.style.opacity = '1';
    ball.classList.remove("animate");
    void ball.offsetWidth; 
    ball.classList.add("animate");
  } else {
    alert("Not Enough NRG!");
    return;
  }
  document.getElementById("Player-NRG").textContent = PlayerNRG;
  //Monster health calculation after defeating monster
  currentMonster.hp -= dmg;
  if (currentMonster.hp <= 0) {
    MonstersBeaten++;
    alert(`You defeated the ${currentMonster.name}!`);
    if (MonstersBeaten === 4){
      alert("All Monsters Defeated! You Win with "+PlayerNRG+"NRG left!")
    }
    //Placing "Defeated" text on monsters after defeating them
    if (MonstersBeaten === 1){
      document.getElementById("first-Monster").src = currentMonster.defeatedImg;
    }else if (MonstersBeaten === 2){
      document.getElementById("second-Monster").src = currentMonster.defeatedImg;
    }else if (MonstersBeaten === 3){
      document.getElementById("third-Monster").src = currentMonster.defeatedImg;
    }else if (MonstersBeaten === 4){
      document.getElementById("fourth-Monster").src = currentMonster.defeatedImg;
    }
    //Putting the next monster in line in the monster slot
    currentMonster = monsters[MonstersBeaten]
    document.querySelector("#Monster-Info h1").textContent = currentMonster.name;
    document.querySelector("#Monster-Info h3").textContent = `HP: ${currentMonster.hp}  DMG: ${currentMonster.dmg}`;
    document.getElementById("Current-Monster").src = currentMonster.img;
  } else {
    document.querySelector("#Monster-Info h3").textContent = `HP: ${currentMonster.hp}  DMG: ${currentMonster.dmg}`;

  }
  }