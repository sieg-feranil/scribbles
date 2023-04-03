const esArray = ['40', '50', '60', '70']

for (let i = (esArray.length - 1); i >= 0; i--) {
    console.log(esArray[i]);

}
// --------------------------------------------------
console.log('es2--------------------------------------------------');

let es2Array = ['marioaaao', 'luigio', 'peach', 'daisy', 'yosho']
for (let i = 0, m = es2Array; i < m.length; i++) {
    if (m[i].charAt(m[i].length - 1) != 'o') {
        console.log(m[i]);
    }
}
// ---------------------------------------------------
console.log('es3------------------------------------------------');
for (let m = es2Array,  i = (m.length - 1); i >= 0; i--) {
    let a = m[i].charAt(0)
    let b = m[i].charAt(m[i].length-1)
    console.log(a.toUpperCase() + b.toUpperCase());
}
// ---------------------------------------------------
console.log('es4------------------------------------------------');
let max = 0
let a = 0
let b = 0
let z = 0
let sameMax = []
let es4Array = ['mario', 'stefania', 'luca5678', 'lee', 'stefaia']
for (let i = 0, m = es4Array; i < m.length; i++) {
    if (m[i].length > max) {
        max = m[i].length
        b = m[i] 
        sameMax[0] = m[i]
    } 
    else if (m[i].length == max){
        z=z+1
        sameMax[z] = m[i]
    }
}
z=z+1

if (z>1){
    console.log('i nomi con la stessa lunghezza sono:'+ z);
    console.log(sameMax);
}
else {
    console.log(b);
}

// dovevi usare .push per inserire in coda all'array 

// --------------------------------------------------
max = 0
console.log('es5--------------------------------------------');
let es5Array = [1, 5, 1, 14, 3]
for (let i = 0; i < es5Array.length; i++) {
    max = max + es5Array[i]
}
console.log(max);

// Date 3 stringhe con valori a piacere, stampare in output quante delle tre stringhe realizzate iniziano con la lettera 'a'
console.log('-----------------------------------------------------');
let pl = 0
let es6Array = ['aoarsf', 'akshdkhaskd', 'akahsdkw']
for (let i = 0; i < es6Array.length; i++) {
    let vb = es6Array[i]
    if (vb.charAt(0)=='a') {
        pl = pl+1
    }
    
}
console.log(pl);
// -----------------------------------------------------------------------------------------------------------
console.log('----------------------------------------------------');
let a1='sdfsdf', a2='asdrsda', a3='anfksdke'
let tot1 = 0
if (a1.charAt(0)=='a') {
    tot1+=1
    console.log(tot1);
}
if (a2.charAt(0)=='a') {
    tot1+=1
    console.log(tot1);
}
if (a3.charAt(0)=='a') {
    tot1+=1
    console.log(tot1);
}