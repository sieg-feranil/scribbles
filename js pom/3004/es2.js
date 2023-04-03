// Ex 2
// creare una funzione checkArray che prende in ingresso un array di N numeri e stampa:
// - quanti sono pari
// - quanti sono dispari
// - se contiene il numero 10
// - se è un array o meno
// chiamare con:
// checkArray([90, 78, 45, 34])
// checkArray([0, 0, 0])
// checkArray([10])
// checkArray(10)
function checkArray(array) {
    let even = 0
    let odd = 0
    let zero = 0
    if (Array.isArray(array)) {
        console.log('è un array');

    for (let i = 0; i < array.length; i++) {
        if (array[i]%2==0 && array[i]!=0) {
            even++
        }
        
        else if ((array[i]%2-1)==0 && array[i]!=0)  {
            odd++
        }
        else {
            zero++
        }
        if (array[i]==10) {
            console.log('contiene almeno un 10');
        }
        
    }
    console.log(even + '  pari  ' + odd +'  dispari  '+ zero +'  zero');
}
else
console.log('non è un array, è di tipo: '+ typeof array);
}
console.log(checkArray(10));