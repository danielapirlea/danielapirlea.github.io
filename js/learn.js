console.info(0);

var nume = "Pirlea";
var prenume = "Daniela";
var owner = "Daniela's";
var msg1 = 'Ai zis "Dana"?';
var msg2 = 'Nu, am zis "Daniela"';
var template = "text cu ghilimele duble sau simple '";
var age = "20";

console.debug("auzi...? dar cum te cheama? -" + prenume);
sayWelcome();

var skills = ["html", "css", "js"];

prenume = "Dana";

console.info("toate variabilele au fost initializate");
console.log(nume);
console.debug("cum te cheama? -" + prenume);
sayWelcome();

function sayWelcome() {
  console.info("Salut " + prenume + ", bine ai venit la noi");
}

// schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 10;
var friendRON = 0;

// operatori * / + -

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR;
console.info("eu am " + friendRON + " RON");
