function isHomogeneous(arr) {
    let x = 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (typeof arr[i] != typeof arr[i + 1]) {
            x++
        }
    }
    if (x != 0) {
        return false
    }
    else return true
}
console.log(isHomogeneous([1, 2, 3, 5, 'asd']));

function largestSwap(n) {
    n += ''
    let x = n[1] + n[0]
    if (x > n) {
        return false
    }
    else return true
}
console.log(largestSwap(27));
function reverse(str) {
    let x = ''
    for (let i = str.length - 1; i > -1; i--) {
        x += str[i]
    }
    console.log(x);
    return x
}
reverse([1, 2, 3, 4, 5])
function union(arr1, arr2) {
    let arr3 = arr1.concat(arr2)
    return arr3
}
console.log(union([1, 2, 3, 4, 5], [6, 7, 8, 9]));

// scrivere una funzione chiamata alfabetoStrambo che 
// data una stringa in ingresso
// ritorni una copia della stringa modificata come negli esempi

// ad esempio con "ciao a tutti" ritorna "ciaoro ara tuttiri"
// ad esempio con "" ritorna ""
// ad esempio con "ad esempio" ritorna "ad esempioro"
// ad esempio con "funziona solo con vocali alla fine" ritorna 
// "funzionara soloro con vocaliri allara finere"

function alfabetoStrambo(s) {
    let v = new Set(['a', 'e', 'i', 'o', 'u']);
    let x = ''
    for (let i = 0; i < s.length; i++) {
        x += s[i]
        if (v.has(s[i]) && (s[i + 1] == ' ' || s[i + 1] == undefined)) {
            x += 'r' + s[i]
        }
    }
    return x
}
console.log(alfabetoStrambo('ciao a tutti'));


function chessboard(l) {
    let matrix = []
    for (let i = 0; i < l; i++) {
        let arrayIn = []
        if (i % 2 == 0) {
            for (let j = 0; j < l; j++) {
                if (j % 2 == 0) {
                    arrayIn.push('#')
                }
                else arrayIn.push(' ')

            }
        }
        else {
            for (let j = 0; j < l; j++) {
                if (j % 2 == 0) {
                    arrayIn.push(' ')
                }
                else arrayIn.push('#')

            }
        }
        matrix.push(arrayIn)
    }
    return matrix
}
console.log(chessboard(3));

function mergeSortedArrays(arr1, arr2) {

}
console.log(mergeSortedArrays([5, 9], [1, 5, 7]));

function findLongestSubstring(string) {
    let set = new Set()
    let x = ''
    for (let i = 0; i < string.length; i++) {
        set.add(string[i])
    }
    set.forEach(function (el) {
        x += el
    });
    return x
}

console.log(findLongestSubstring('ciaooooo'));

function firstSum(arr, n) {
    for (let i = 0; i < arr.length; i++) {


    }
}
function getStr(arr) {
    return arr[1].toUpperCase()
}
console.log(getStr(['a', 'b', 'c', 'd', 't']));

/*
Ex 2

Creare una funzione makeObj che prende in ingresso due parametri:
una stringa e un numero.
La funzione crea e RESTITUISCE un oggetto con due proprietà: label, che avrà come valore il valore passato come primo parametro, e rate, che avrà come valore il valore passato come secondo parametro.
Chiamare la funzione makeObj due volte con valori a piacere per creare e stampare in output due oggetti con i valori indicati.
*/
function makeObj(str, n) {
    return { 'label': str, 'rate': n }
}
let obj1 = makeObj('ciao', 1)
let obj2 = makeObj('ciao', 2)
console.log(obj1);
console.log(obj2);


// creare una funzione getMaxMinAsArray che prende in ingresso un array di 6 numeri e restiuisce un array di 2 numeri: il primo, che rappresenta il numero più piccolo del primo array, e il secondo che rappresenta il numero più grande del primo array.
// Richiamare la funzione getMaxMinAsArray con un array di 6 numeri a piacere, salvare l'array restituito dalla funzione e stampare il numero più grande e più piccolo con un apposito messaggio
function getMaxMinAsArray(array) {
    let max = array[0]
    let min = array[0]
    let r = []
    for (let i = 1; i < array.length; i++) {
        if (max <= array[i]) {
            max = array[i]
        }
        if (min >= array[i]) {
            min = array[i]
        }

    }
    r.push(min, max)
    return r
}
let k = getMaxMinAsArray([7, 2, 3, 4, 5, 6])
console.log(`maggiore: ${k[1]}
minore: ${k[0]}`);

function getMaxMinAsArray1(array) {
    let x = []
    for (let i = 0; i < array.length; i++) {
        array.sort(function (a, b) {
            return a - b;
        });
    }
    x.push(array[0], array[array.length - 1])
    return x
}
let t = getMaxMinAsArray1([-7, 2, 3, 4, 5, 6])
console.log(`maggiore: ${t[1]}
minore: ${t[0]}`);

function firstSum(arr, n) {

    let x = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] == n && j != i) {
                console.log('ciao');
                x[0] = arr[i]
                x[1] = arr[j]
                return x
            }
        }
    }
    return x
}
console.log(firstSum([2, 3], 4));
let age = 10
let name = age > 10 ? 'pedro' : 'bello'  /*figata importante!!!!!!*/
console.log(name);

/*
Ex 1

Creare un array che è composto da 3 oggetti, che rappresentano dei rettangoli, e avranno le proprietà base e altezza (numeri).
Crea quindi 3 oggetti che rappresentano 3 rettangoli con le caratteristiche indicate, mettili in un array.
Cicla questo array SIA con un foreach PRIMA che con un for DOPO, per stampare l'area di ogni rettangolo (ad ogni iterazione)
*/

const rctngl = [
    { altezza: 1, base: 2 },
    { altezza: 2, base: 3 },

    { altezza: 3, base: 4 }]
rctngl.forEach((el, i) => {
    let area = 0
    area = el.altezza * el.base
    console.log(`l'area del rettangolo ${i + 1} è: ${area}`);
});

for (let i = 0; i < rctngl.length; i++) {
    let area = 0
    area = rctngl[i].altezza * rctngl[i].base
    console.log(`l'area del rettangolo ${i + 1} è: ${area}`);
}


function fattoriale(x) {
    let fct = 1
    if (x != 0) {
        for (x; x > 0; x--) {
            fct *= x
        }
    }
    return fct
}

console.log(fattoriale(5));

function aaray(array) {
    let i=array.length
    while (i!=0) {
        i--
        console.log(array[i].toUpperCase());
    }
    array.forEach(el => {
        console.log(el);
    });
    
}

aaray(['aasdsad','basdasd','casda','dasdasd','easdasd'])
console.log('-------------------------------');

function nand(b1, b2) {
    return !(b1 && b2)
  }
  
  function andGate(b1, b2) {
    return nand(nand(b1, b1), nand(b2, b2))
  }
  console.log(andGate(false,true));

// console.log('-----------------------------------');
// const language={
//     label:'js',
//     tags:['frontend','webdev','high-level'],
//     printTags:function(){ 
//         let i=0
//         while (i<this.tags.length) {
//             console.log(this.tags[i]);
//             i++
//         } }
// }

// language.printTags()

console.log('-------------------');
function nand(b1, b2) {
    return !(b1 && b2)
  }
  
  function orGate(b1, b2) {

    return nand(nand(b1, b1), nand(b2, b2))
  }
  console.log(orGate(false,false));
  console.log(orGate(true,false));
  console.log(orGate(false,true));
  console.log(orGate(true,true));

//   function triangolo(n) {
//     array=[]
//     for (let i = 0; i < n; i++) {
//         array.unshift('x')
//         console.log(array);
//     }
//     for (let i = n-1; i > 0; i--) {
//         array.shift('x')
//         console.log(array);
        
//     }
//   }
//   triangolo(4)
function fn(n) {
    let k=[]
    k.push
}