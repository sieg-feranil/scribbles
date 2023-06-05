// conta quante volte un carattere si ripete
function ins(str) {
    let map = new Map
    for (let i = 0; i < str.length; i++) {
        let n = 0
        for (let j = 0; j < str.length; j++) {
            if (str[i] == str[j]) { n++ }
        }
        if (!map.has(str[i])) { map.set(str[i], n) }
    }
    return map
}
console.log(ins('ak-47'));


function occorrenze(string) {
    let a = new Map()
    for (i = 0; i < string.length; i++) {
        if (a.has(string[i])) a.set(string[i], (a.get(string[i]) + 1))
        else a.set(string[i], 1)
    }
    return a
}
console.log(occorrenze('ajkshdkhasdkjshadkshad'));
function kappa(string) {
    let k = []
    for (let i = 0; i < string.length; i++) {
        if (k.indexOf(string[i]) == -1) {
            k.push(string[i])
        }
    }
    return k
}
console.log(kappa('aasssddffjj'));

obj1 = {
    a: null,
    b: undefined,
    z: 'ciao',
    macchina: 32
};
function countUndefinedKeys(obj) {
    let n = 0
    for (const [key, value] of Object.entries(obj)) {
        if (value == undefined || value == null) {
            n++
            console.log(key, value);
        }
    }
    return n
}
console.log(countUndefinedKeys(obj1));
function reverse(string) {
    let z = ''
    for (let i = string.length - 1; i >= 0; i--) {
        z += string[i]
    }
    return z
}
console.log(reverse('ciaooooo'));

let fk = 'aroiop'
let zk = fk[fk.length - 1].toUpperCase() + '_' + fk[0].toLocaleLowerCase()
console.log(zk);

let studente = {
    idMatricola: 14,
    nomeCompleto: 'Luigi Verdi',
    voti: [6, 7, 7],
    ciao: function () {
        console.log(`il terzo voto dello studente con id ${this.idMatricola} (${this.nomeCompleto}) è ${this.voti[2]}`);
    }
}
studente.ciao()

function names(x) {
    let array = []
    for (let i = 0; i < x; i++) {
        let arrayIn = []
        if (i % 2 == 0) {
            for (let j = 0; j < x; j++) {
                if (j % 2 == 0) {
                    arrayIn.push('#')
                }
                else arrayIn.push('o')

            }
        }
        else {
            for (let j = 0; j < x; j++) {
                if (j % 2 == 0) {
                    arrayIn.push('o')
                }
                else arrayIn.push('#')

            }
        }
        array.push(arrayIn)
    }
    return array
}
console.log(names(3));



function krusty(k) {
    let i
    let b
    for (let j = 0; j < k; j++) {
        let riga = ''
        if (j % 2 == 0) { i = 0, b = k }
        else { i = 1, b = k + 1 }
        for (i; i < b; i++) {
            riga += '|'
            if (i % 2 == 0) {
                riga += '#'
            }
            else riga += 'o'
            riga += '|'
        }
        console.log(riga);
    }

}
krusty(10)
function inc(x) {
    x++
    return x
}

let o=1
inc(o)
console.log(o);
console.log(inc(o));
function countVowels(string) {
    let map = new Map ([
        ["a", 0],
        ["e", 0],
        ["i", 0],
        ["o", 0],
        ["u", 0]
    ])
    for (let i = 0; i < string.length; i++) {
        if (map.has(string[i].toLowerCase())) {
            map.set(string[i].toLowerCase(), map.get(string[i].toLowerCase())+1);
        }
    }
    return map
}
console.log(countVowels('laksjdlkjsdlkjiPASIDPOIAPSODIooioioi'));


function createArray(n) {
    let array=[]
    for (let i = 0; i < n; i++) {
        array.push(n)      
    }
    return array
}
console.log(createArray(9));


function even(arr) {
    let out=[]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]%2==0) {
            out.push(arr[i])
        }
    }
    return out
}
console.log(even([1,2,3,4,5,6,7,8,9,10]));


function isInArray(array, ns) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]==ns) {
            return true
        }
        else return false
        
    }
}


function addUpFromNumber(n) {
    if(n>=0){
        let r=0
        for (let i = 1; i <= n; i++) {
        r+=i
    }
    return r
}
}
console.log(addUpFromNumber(4));

function arraySwap(arr) {
    for (let i = 0; i < arr.length; i+=2) {
        let x=arr[i]
        if(arr[i+1]!=undefined){
        arr[i]=arr[i+1]
        arr[i+1]=x
    }
    }
    return arr
}
console.log(arraySwap([1,2,3,4,5]));

function concatAll(...arrs) {
   let n=[]
   let r=n.concat(...arrs)
   console.log(typeof n);
   return 
}
console.log(concatAll([1,2,3],[4,5,6,],[7]));
console.log(Math.random());

function createRandomSortedArray(n) {
    let neu=[]
    for (let i = 0; i < n; i++) {
        let x =Math.random()
        if (x==0) {
            return []
        }
        neu.push(x)
        neu.sort(function(a, b) {
            return a - b;
          });
    }
    for (let i = 0; i < neu.length; i++) {
        
        
    }
    return neu
}
console.log(createRandomSortedArray(4));

function firstMatrix(arr, n) {
    let m=[]
    for (let i = 0; i < n; i++) {
        m.push(arr)
        
    }
    return m
}
console.log(firstMatrix([1,2,3],5));
console.log('-------------------------------');



function intersection(a, b) {
    let x=[]
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if(a[i]==b[j]){
                x.push(a[i])
            }
        }
    }
    return x
}
console.log(intersection([1,2,3,4],[3,2,1]));