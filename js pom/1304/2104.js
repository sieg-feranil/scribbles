/*
Ex 1

creare un array in cui occorre includere 5 dati di tipi diversi:
- un letterale oggetto con proprietà x: 10 e y: 5
- un numero (100)
- una stringa ("javascript")
- una mappa ("label" -> "sono una mappa")
- un array [40, 50, 60]

Iterare sull'array esterno con un foreach e...
se l'elemento corrente è...

un letterale oggetto, stampa la somma delle sue proprietà x e y

un numero, controlla se è > 100 scrivi red, altrimenti blue

una stringa, stampa il suo primo carattere

una mappa, stampa il valore della sua proprietà "label", se ce l'ha

un array, stampa i numeri in ordine inverso
*/
const obj={
    x:10,
    y:5
}
const map = new Map()
map.set('label','sono una mappa')

const array=[obj,100,'javascript',map,[40, 50, 60]]

array.forEach(el => {
    if (el instanceof Map) {
        if (map.has('label')) {
            console.log(map.get('label'));
        }
    }
   
    else if (Array.isArray(el)) {
        for (let j = el.length-1; j >-1; j--) {
            console.log(el[j]);
            
           }
    }
    else if (!isNaN (el)) {
        let x = el > 100 ? 'red' : 'blue'
        console.log(x);
    }
    else if (typeof el=='string') {
        console.log(el[0]);
    }
    else if (typeof el=='object') {
        console.log(el.x+el.y)
    }
});

