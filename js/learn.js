console.info(1);

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

var ATMFunds = 50000;
var funds = 5000;

function getExtractFee(ammount) {
  var comision = ammount * 0.01;
  if (comision < 2.5) {
    console.warn("comision minim aplicat");
    comision = 2.5;
  }
  return comision;
}

// TODO implement
function checkExtractPermissions() {
  return true;
}

function extractFromATM(amount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este:" + amount);
  var comision = getExtractFee(amount);

  var totalExtract = amount + comision;

  if (totalExtract > funds) {
    console.error("insufficient funds");
    return;
  }
  if (ATMFunds < totalExtract) {
    console.error("ATM insufficient funds");
    return;
  }

  funds = funds - totalExtract;
  // ATMFunds = ATMFunds - ammount;
  ATMFunds -= amount;
  console.info("comision aplicat: " + comision);
  console.info("sold curent: " + funds);
  console.info("==== ==== ==== ==== ====");
}

extractFromATM(1005); //nu e multiplu de 10
extractFromATM(100000); //solduri insuficiente
extractFromATM(3000);
extractFromATM(3000);
extractFromATM(100);
extractFromATM(0);
