// Ex 4
// creare una funzione treeStr che prende in ingresso una stringa che deve avere una lunghezza superiore pari e superiore a 4 e stampa la seguente formattazione in output:

// treeStr('javascript') 
//          s
//         s c
//       a s c r
//     v a s c r i
//   a v a s c r i p
// j a v a s c r i p t
function treeStr(input) {
    let s = input.length /2 -1
    console.log(s);

    for (let k = 0; k < s+2; k++) {
        let a =[]
        let b =''
    for (let i = 0; i < input.length; i++) {
        if (i>(s-k) && i<=(s+k)||i==s) {
            if (i==s && k==0) {
                b+='  '
            }
            b=b+'  ' +input[i]+'  '
            // a.push(input[i])
        }
        else 
        b+='     '
        // a.push('')
        
    }
    console.log(b);
}

}
console.log(treeStr('javascript'));