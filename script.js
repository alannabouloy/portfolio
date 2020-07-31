//TODO: Create a program that takes in a character name from user and then generates:
//1. Character Race
//2. Class
//3. Background
//and then prints out that information along with Character Name.
//Functions that I will  need:
// 1. takes in input from user
//2.Generates Race from selection of choices: Human, High-Elf, Wood-Elf, Drow, Half-Orc, Half-Elf, Dwarf, Dragonborn, Tiefling, or Gnome
//3. Generates Class from selection of choices: Barbarian, Fighter, Monk, Cleric, Paladin, Warlock, Sorceror, Wizard, Rogue, Ranger, Druid, or Bard. 
//4. Generates background from selection of choices: Acolyte, Criminal/Spy, Folk Hero, Noble, Sage, Soldier
//5. Returns a string that includes: Character Name, Race, Class, and Background.

//Encoders
let dndRaces = {
  "1": "Human",
  "2": "Elf",
  "3": "Half-Orc",
  "4": "Half-Elf",
  "5": "Dwarf", 
  "6": "Dragonborn",
  "7": "Tiefling",
  "8": "Gnome"
};

let dndElves = {
  "1": "High-Elf",
  "2": "Wood-Elf",
  "3": "Drow"
};

let dndClasses = {
  "1": "Barabarian",
  "2": "Fighter",
  "3": "Monk",
  "4": "Cleric",
  "5": "Paladin", 
  "6": "Warlock",
  "7": "Sorceror",
  "8": "Wizard",
  "9": "Rogue",
  "10": "Ranger",
  "11": "Druid",
  "12": "Bard"
};

let dndBackgrounds = {
  "1": "Acolyte",
  "2": "Criminal/Spy",
  "3": "Folk Hero",
  "4": "Noble",
  "5": "Sage",
  "6": "Soldier"
};
//Functions

//Generate Race
function generateRace(){
  //randomly generate number between 1 and 8
  let num = Math.floor(Math.random() * 6) + 1;
  //each number corresponds to different Race
  let race = dndRaces[num.toString()];
  //if elf or half-elf call on generateElf()
  let subRace = "";
  if (race === "Elf" || race === "Half-Elf"){
    subRace = generateElf();
    race = race + ": " + subRace;
  }
  //return race
  return race;
}
//Generate Elf
function generateElf(){
  //randomly generate number between 1 and 3
  let num = Math.floor(Math.random() * 3) + 1;
  //each number corresponds to different elf
  let elf = dndElves[num.toString()];
  //return elf
  return elf;
}
//Generate Class

function generateClass(){
//randomly generate number between 1 and 12
let num = Math.floor(Math.random() * 12) + 1;
//each number corresponds to different Class
let charClass = dndClasses[num.toString()];
//return class
return charClass;
}
//Generate Background
function generateBackground(){
  //randomly generate number between 1 and 6
  let num = Math.floor(Math.random() * 6) + 1;
  //each number corresponds to differen Background
  let background = dndBackgrounds[num.toString()];
  //return background
  return background;
}
//Generate Character
function generateCharacter(name){
//create variables for characterRace, characterClass, and characterBackground.
let characterRace = generateRace();
let characterClass = generateClass();
let characterBackground = generateBackground();
//call generateRace(), generateClass(), and generateBackground()
let characterInfo = "Here's your new character! <br> Name: " + name +"<br> Race: " + characterRace + "<br> Class: " + characterClass + "<br> Background: " + characterBackground + "<br> Happy Adventuring!";
//return string that gives name, race, class, and background. 
return characterInfo;
} 

//alter HTML

function printCharacter(event){

  event.preventDefault();
  //create var name and set to value from form
  let name = document.getElementById("character").value;

  //access the hidden <p></p>
  let newElement = document.getElementById("new-character");
 //replace with character info
  newElement.innerHTML = generateCharacter(name);

  //reset form
  document.getElementById("dnd-generator-form").reset();



}

let dndForm = document.getElementById("dnd-generator-form");

dndForm.addEventListener("submit", printCharacter);
