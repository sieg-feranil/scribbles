
let a = 'ciao'
let b = 'caao'
let max
if (a.length > b.length) {
    max = a;
}
else if (a.length == b.length) {
    max = a + ' ' + b
}
else {
    max = b;
}
if (a.length == b.length) {
    console.log('le due stringhe hanno lunghezza uguale e sono: ' + max);
}
else {

    console.log('la stringa più lunga è:' + max);
}

if (a != b) {
    console.log('sono diversi');
}
else {
    console.log('sono uguali');
}
let f = 'mela'
console.log(f.charAt(3) + '-' + f.charAt(2) + '-' + f.charAt(1) + '-' + f.charAt(0));
console.log(f.length);



// for (let i = f.length; i >= 0; i--) {
//     console.log(f.charAt(i));

// }
p = ''
if (p == 0) {
    console.log('ma cosa');
}
// entra a prescindere con un valore qualsiasi tranne i falsey value e nella condizione riassegna il valore della variabile
// falsey 0 false null undefinde ''
a = 10
if (a = 10) {
    console.log('ciao');
}
// meh 
