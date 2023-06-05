// Ex 1
// creare una funzione compareMap che accetta in ingresso due mappe.
// La funzione restituisce true SE le due mappe sono mappe, SE hanno lo stesso numero di elementi e per le stesse chiavi, gli stessi valori. 
// Testare il funzionamento di compareMap passando due mappe diverse nella prima chiamata, e due mappe uguali nella seconda chiamata


function compareMap(map1, map2) {

    if (map1 instanceof Map && map2 instanceof Map) console.log('sono mappe');
    if (map1.size == map2.size) console.log('same size');
    let text1 = "";
    map1.forEach(function (value, key) {
        text1 += key + value
    })
    let text2 = "";
    map2.forEach(function (nvalue, key) {
        text2 += key + value
    })
    if (text1 == text2) {
        console.log('sono uguali');
    }
    else console.log('sono diversi');

}
let m1 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
])
let m2 = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
])
console.log(compareMap(m1, m2));




function compareMap(map1, map2) {
    let test = 'ok'

    if (map1 instanceof Map && map2 instanceof Map) {
        if (mapl.size == map2.size) { //console.log(map1.forEach(compareKeyValue));

            function compareKeyValue(v, k) {

                if (!mapz.has(k)) {
                    test = 'nokey'
                    return
                }
                else if (map2.has(k) && map2.get(k) != v) {
                    test = 'noval'

                    return
                }

            } map1.forEach(compareKeyValue)


            if (test = 'ok') { return true }
            else if (test = 'nokey') { return 'le mappe non hanno le stesse chiavi' }
            else if (test == 'noval') { return 'le mappe non hanno gli stessi valori per le stesse chiavi' }

        } else {

            return 'le mappe non hanno lo stesso numero di elementi';

        }else{
            return 'i dati non sono entrambi mappe';
        }
    }
}
// -----------------------------------------------------------
// Ex 2
// creare una funzione compareSet che accetta in ingresso due set.
// La funzione restituisce true SE i due set sono set, SE hanno lo stesso numero di elementi e  gli stessi valori.
// Testare il funzionamento di compareSet passando due set diversi nella prima chiamata, e due set uguali nella seconda chiamata

function compareSet(set1, set2) {
    if (set1 instanceof Set && set2 instanceof Set) console.log('sono set');
    if (set1.size == set2.size) console.log('same size');
    let text1 = "";
    set1.forEach(function (value) {
        text1 += value;
    })
    let text2 = "";
    set2.forEach(function (value) {
        text2 += value;
    })
    if (text1 == text2) {
        console.log('sono uguali');
    }
    else console.log('sono diversi');
}

let s1 = new Set(["a", "b", "c"]);
let s2 = new Set(["a", "b"]);
console.log(compareSet(s1, s2));
// -----------------------------------------------------------
// Ex 3
// realizzare la funzione uniqueArray che prende in ingresso un array e rimuove tutti gli elementi duplicati, restituendo un nuovo array privo quindi di valori duplicati.
// Chiamare la funzione con il valore [10, 'ciao', 20, 'ciao', 'javascript', 10] e stampare in output il nuovo valore

function uniqueArray(array) {
    let result = new Set()
    for (let i = 0; i < array.length; i++) {
        result.add(array[i])
    }
    array = []
    result.forEach(function (value) {
        array.push(value)
    })
    return array
}
// -----------------------------------------------------------
function uniqueArray2(array) {
    let result = new Set(array)

    let r = []
    result.forEach(function (value) {
        r.push(value)
    })
    return r
}
console.log(uniqueArray2([10, 'ciao', 20, 'ciao', 'javascript', 10]));

// -----------------------------------------------------------
// Ex 4
// realizzare due istanze di Map che rappresentano due studenti che abbiano la seguente struttura:
// - name, lastname, rates
// dove name e lastname sono stringhe e rates è un array di 5 numeri
// assegnare valori a piacere per ogni chiave, es mario rossi 4, 5, 6, 4, 3 e luigi verdi 8, 7, 4, 9, 9
// creare la funzione bestStudent, che prende in ingresso due mappe che rappresentano uno studente, e restituisce il nome e il cognome dello studente che ha la media voto migliore tra i due.
// Richiamare questa funzione passando le due mappe create precedentemente

let stdnt1 = new Map([
    ['name', 'mario'],
    ['lastname', 'rossi'],
    ['rates', [4, 5, 6, 4,]]
])
let stdnt2 = new Map([
    ['name', 'luigi'],
    ['lastname', 'verdi'],
    ['rates', [8, 7, 4, 9, 9]]
])
console.log(stdnt1.values());
function bestStudent(map1, map2) {
    function averageS(a) {
        let sum = 0
        let i = 0
        for (i = 0; i < a.length; i++) {
            sum += a[i]
        }
        return sum / i
    }
    let avrg1 = averageS(map1.get('rates'))
    let avrg2 = averageS(map2.get('rates'))
    if (avrg1 > avrg2) {
        return map1.get('name') + ' ' + map1.get('lastname') + ' has a higher average'
    }
    else if (avrg1 < avrg2) {
        return map2.get('name') + ' ' + map2.get('lastname') + ' has a higher average'
    }
    else return 'both have the same average'
}
console.log(bestStudent(stdnt1, stdnt2));
// -----------------------------------------------------------