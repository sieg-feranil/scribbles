let es1A1 = ['salve', 'ciao', 'giorno', 'sera']
let inverted = []

for (let i = 0; i < es1A1.length; i++) {
    let pot = ''
    for (let j = (es1A1[i].length - 1); j >= 0; j--) {
        pot += es1A1[i].charAt(j)

    }
    inverted.push(pot)
    console.log(pot);
}
console.log(inverted);
console.log('---------------------------------------------------------');
// ---------------------------------------------------------
let es2A1 = [10, -2, 3, 7, -23, 2, 23, 53, -1, 0]
let pari = 0
let dispari = 0
let negativi = 0
let positivi = 0

for (let i = 0; i < es2A1.length; i++) {
    if (es2A1[i] > 0) {

        positivi++
        if (es2A1[i] % 2 == 0) {
            console.log(es2A1[i] + ' positivo pari');
            pari++;
        }
        else {
            console.log(es2A1[i] + ' positivo dispari');
            dispari++
        }

    }
    else if (es2A1[i] < 0) {
        negativi++
        if ((es2A1[i] * -1) % 2 == 0) {
            console.log(es2A1[i] + ' negativo pari');
            pari++
        }
        else {
            console.log(es2A1[i] + ' negativo dispari');
            dispari++
        }
    }
    else {
        console.log(es2A1[i] + ' è zero');
    }
}
console.log('pari ' + pari, 'dispari ' + dispari, 'positivi ' + positivi, 'neagtivi ' + negativi);

console.log('---------------------------------------------------------');
// ----------------------------------------
let pl = 0
let es6Array = ['aoarsf', 'akshdkhaskd', 'akahsdkw']
for (let i = 0; i < es6Array.length; i++) {
    let vb = es6Array[i]
    if (vb.charAt(0) == 'a' && vb.charAt(vb.length - 1) == '_')

        pl = pl + 1

}
console.log('numero di parole con a iniziale e _finale ' + pl);

console.log('---------------------------------------------------------');
// ----------------------------------
let pass = 'aeiou$_2'
let dkey = 0
let ukey = 0
let nkey = 0
let vkey = 0
// puoi farlo con flase sulle variabili
for (let i = 0; i < pass.length; i++) {
    if (pass[i] == 'a' || pass[i] == 'e' || pass[i] == 'i' || pass[i] == 'o' || pass[i] == 'u') {
        vkey++
    } else
        if (pass[i] == '$') {
            dkey++
        } else
            if (pass[i] == '_') {
                ukey++
            } else
                // !isNaN potevi metterlo come condizione
                if (pass[i] >= 0) {
                    nkey++
                }
    // console.log(vkey, dkey, ukey, nkey);


}
// e qua condition (vkey && dkey && ukey && nkey ) 'this is a shortcut' quinidi se sono tutti true si entra
if (vkey > 0 && dkey > 0 && ukey > 0 && nkey > 0) {
    console.log('password ok');
}
else {
    console.log('NO!!!!!!');
}

console.log('---------------------------------------------------------');
// ----------------------------------------------
last = ['a', false, true, true, 3]
let str = 0
let nmbr = 0
let bool = 0
let maxx = 0
for (let i = 0; i < last.length; i++) {

    let k = typeof last[i]
    console.log(k);
    if (k == 'string') {
        str++
    }
    else if (k == 'number') {
        nmbr++
    }
    else if (k == 'boolean') {
        bool++
    }
    else {
        console.log('wtf');
    }


}
console.log('n.strings ' + str, 'n.number ' + nmbr, 'n.boolean ' + bool);

if (str > nmbr && str > bool) {
    console.log('winner str');
}
else if (nmbr > str && nmbr > bool) {
    console.log('winner nmbr');
}
else if (bool > nmbr && bool > str) {
    console.log('winner bool');
}
// ---------------------------------
let asd = 5
if (asd == (10 || 5 || 3)) {
    console.log(asd);
}
else
    console.log('non entra');