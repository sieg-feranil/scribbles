// Ex 1
// creare la funzione diffArray che prende in ingresso due array.
// Gli array dovranno contenere da 3 a 8 numeri.
// All'interno della funzione trovare il numero più grande del primo array e il numero più piccolo del secondo array.
// La funzione restituisce la differenza tra il primo numero e il secondo. 
// Stampare il risultato in output.
function countNum(string) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (!isNaN(string[i])) {
            count++
        }
    }
    return count
}


function diffArray(array1, array2) {
    let max = array1[0]
    let min = array2[0]
    let a =countNum(array1)
    if ((countNum(array1) >= 3 && countNum(array1) <= 8) && countNum(array2) >= 3 && countNum(array2) <= 8) {
        for (let i = 1; i < array1.length; i++) {
            if (max <= array1[i]) {
                max = array1[i]
            }
        }
        for (let i = 1; i < array2.length; i++) {
            if (min >= array2[i]) {
                min = array2[i]
            }
        }
    }
    else console.log('not enough numbers');

    return max - min
}
let a = [1, 2, 3,6,7,'asjdlksjaldjlasd','asdsad','asdsad', 4, 10]
let b = [1, 2, 3]
console.log(diffArray(a, b));

// ---------------------------------------------------------------
// Ex 2
// creare la funzione countVowels che prende in ingresso una stringa, e restituisce una mappa che avrà per chiavi tutte le vocali alfabetiche e per rispettivi valori il numero di occorrenze di ogni vocale nella stringa
// es 'ciao a tutti'   produce  { a => 2, e => 0, i => 2, o => 1, u => 1 }

function counter(string, vowel) {
    let count = 0
    for (let i = 0; i < string.length; i++) {
        if (string[i] == vowel) {
            count++
        }

    }
    return count
}
function countVowels(string) {
    let vowelsMap = new Map()
    vowelsMap.set('a', counter(string, 'a'))
    vowelsMap.set('e', counter(string, 'e'))
    vowelsMap.set('i', counter(string, 'i'))
    vowelsMap.set('o', counter(string, 'o'))
    vowelsMap.set('u', counter(string, 'u'))
    return vowelsMap
}
console.log(countVowels('ooosssaaaooo'));
// ---------------------------------------------------------------
// Ex 3
// creare la funzione invertCase che prende in ingresso una stringa.
// Se la stringa è in lower case, restituisce la stringa in upper case.
// Se la stringa è in uppe rcase restituisce la stringa in lower case.
// Assumere che sia in una forma o l'altra.
function invertCase(string) {
    let a = ''
    if (string == string.toLowerCase()) {
        a = string.toUpperCase()
    }
    else if (string == string.toUpperCase()) {
        a = string.toLowerCase()
    }
    return a
}
console.log(invertCase('XC'));

// ---------------------------------------------------------------
// Ex 4
// creare una mappa che rappresenta 5 stili CSS a piacere e stamparla in output.
// Creare la funzione showCSS che prende in ingresso la precedente mappa e stampa tutti i suoi elementi.
let asdf = new Map([
    ["color", 'white'],
    ["display", 'flex'],
    ["height", '100px'],
    ["width", 'auto'],
    ["padding", '50px']
])
function showCSS(map) {
    map.forEach(function (v, k) {
        console.log(k + ': ' + v);
    })
}
showCSS(asdf)
// ---------------------------------------------------------------
// Ex 5
// creare una funzione cmpArr che prende in ingresso 2 array e restituisce:
// 1 se il primo ha dimensioni maggiori del secondo
// -1 se il secondo ha dimensioni maggiori del primo
// 0 se hanno dimensioni uguali
// Testare in output il comportamento di tutte e 3 le casistiche.

function cmpArr(array1, array2) {
    if (array1.length > array2.length) {
        return 1
    }
    else if (array1.length == array2.length) {
        return 0
    }
    else if (array1.length < array2.length) {
        return -1
    }
}
console.log(cmpArr([0], [0]));
// ---------------------------------------------------------------