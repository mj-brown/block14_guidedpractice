//Array containing instruments: flute, clarinet, saxophone, trumpet, and trombone.
const myInstruments = ["flute", "clarinet", "saxophone", "trumpet", "trombone"];

//Add tuba and bassoon to the array.
myInstruments.push("tuba");
myInstruments.push("bassoon");
myInstruments.splice(2,1);
myInstruments.unshift("saxophone");

console.log(myInstruments);

//write a function to call the first instrument in the array.
function getFirstInstruments (myInstruments) {
    return myInstruments[0];
}

let firstInstrument = getFirstInstruments();

console.log(firstInstrument);