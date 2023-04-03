// Ex 1
// creare la funzione selector, che accetta una stringa in ingresso è in grado di stabilire se è un selettore CSS valido (selettore semplice, senza annidamenti), tra:
// - selettore di id
// - selettore di classe
// - selettore di un elemento tra div, span e img
// Se lo è, restituisce true, altrimenti false.
// In fase di chiamata, stampare un apposito messaggio in ouput, per ognuna delle seguenti chiamate:
// selector('#myDiv')  -> è un selettore valido, di id
// selector('.myDiv')  -> è un selettore valido, di classe
// selector('div')          -> è un selettore valido, di elemento div
// selector('paperino')  -> non è un selettore valido
// selector('ul')               -> non è un selettore valido (non è div, span o img)
function selector(str) {
    if (str[0] == '#') {
        console.log('è un selettore valido, di id');
    }
    else if (str[0] == '.') {
        console.log('è un selettore valido, di classe');
    }
    else if (str == 'div') {
        console.log('è un selettore valido, di elemento div');
    }
    else if (str == 'span') {
        console.log('è un selettore valido, di elemento span');
    }
    else if (str == 'img') {
        console.log('è un selettore valido, di elemento img');
    }
    else
        console.log('non è un selettore valido');
}
console.log(selector('span'));