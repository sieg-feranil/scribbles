function and(...bool) {
    for (let i = 0; i < bool.length; i++) {
        if (!bool[i]) {
            return bool[i]
        }
    }
    return true
}
console.log(and(false, true, true, true, false));


const hello = {
    chiave1: 'A',
    chiave2: 'B'
};

function keyss(obj) {
    const { chiave1, chiave2 } = obj;
    console.log(chiave1);
    console.log(chiave2);
}

function chiavii({ chiave1, chiave2 }) {
    console.log(chiave1, chiave2);
}
chiavii({ chiave1: 'ciao', chiave2: 3, chiave4: 'jkahskdhksa' })
keyss(hello)