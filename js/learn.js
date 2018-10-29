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
var friendEUR = 100;
var friendRON = 0;
// operatori * / + -

myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR * 0.99;
console.info("eu am " + friendRON + " RON");

function extractFromATM(ammount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este:" + ammount);
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  console.info("comision aplicat: " + comision);
  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1000);
extractFromATM(100);
