// Scrivere una funzione che riceva in ingresso tre stringhe:
// ● la prima sara’ un testo
// ● la seconda sara’ una parola che andra’ cercata nel testo
// ● la terza sara’ la parola da sostituire al posto della seconda
// La funzione deve quindi produrrei lo stesso effetto che si ottiene quando si fa find and
// replace di una parola in un testo.
// Si assuma che:
// ● la seconda e la terza stringa siano sempre e solo una parola, mai una frase, quindi
// non ci saranno spazi
// ● sulle stringhe non esistano i metodi indexOf, replace, e similari, dovete scrivere voi
// l’algoritmo
// ● la seconda e la terza parola non necessariamente devono avere lo stesso numero di
// caratteri
// Ricordate che le stringhe in JavaScript sono trattate in modo simile agli array.
// La funzione deve ritornare la nuova stringa aggiornata.
function findAndReplace(text, find, replace) {
    const spText = text.split(' ')
    for (let i = 0; i < spText.length; i++) {
        if (spText[i] == find) {
            spText[i] = replace
        }
    }
    return spText.join(' ')
}

console.log(findAndReplace('ciao come stai bello', 'stai', 'sto'));



// Scrivere una funzione che, dato in ingresso un array di oggetti così strutturato:
// sia in grado di attribuire un valore di default dove sia presente un null, seguendo queste
// regole:
// ● se il type e’ “boolean” deve aggiornare usando false
// ● se il type e’ “string” deve aggiornare usando stringa vuota
// ● se il type e’ “number” deve aggiornare usando 0
// ● se il type e’ “array” deve aggiornare usando array vuoto
// ● se il type e’ “object” deve aggiornare usando oggetto vuoto
// Come vedete ogni singolo oggetto ha sempre due attributi, uno la cui chiave non e’ dato a
// sapere a priori, un altro la cui chiave e’ sempre “type” e il valore e’ nella lista qui sopra.
// La funzione deve ritornare lo stesso oggetto ricevuto in input, con i valori aggiornati.

const arrObj = [
    {
        "maggiorenne": null,
        "type": "boolean"
    },
    {
        "nome": null,
        "type": "string"
    },
    {
        "cognome": null,
        "type": "number"
    }
    ,
    {
        "cognome": null,
        "type": "array"
    }
    ,
    {
        "cognome": null,
        "type": "object"
    }
]
function findAndUpdate(array) {

    for (let i = 0; i < array.length; i++) {
        Object.keys(array[i]).forEach(el => {
            if (el != 'type') {
                if (array[i].type == 'boolean') {
                    array[i][el] = false
                }
                else if (array[i].type == 'string') {
                    array[i][el] = ''
                }
                else if (array[i].type == 'number') {
                    array[i][el] = 0
                }
                else if (array[i].type == 'array') {
                    array[i][el] = []
                }
                else if (array[i].type == 'object') {
                    array[i][el] = {}
                }
            }
        });
    }

    return array
}
console.log(findAndUpdate(arrObj));
// ---------------------------------------------------
let addDigits = function(num) {
    num+=''
    let r=parseInt(num[0])
        for (let i = 1; i < num.length; i++) {
            r+=parseInt(num[i])            
        }
        r+=''
        if (r.length==1) {
            return ~~r 
        }
        
        else return addDigits(parseInt(r))
};

console.log(addDigits(193));

// -----------------------------------------------------
var addTwoNumbers = function(l1, l2) {
    r1=reversee(l1)
    r2=reversee(l2)
    let r=Number(r1.join(''))+Number(r2.join(''))
    r+=''
    r=r.split('').reverse()
    for (let i = 0; i < r.length; i++) {
        r[i]=parseInt(r[i])
        
    }
    return r
};
let reversee =function (array) {
    let r =[]
    for (let i = array.length-1; i >-1 ; i--) {
        r.push(array[i])
    }
    return r
}

console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]));


function findLongestSubstring2(string) {
    let result =''
    let current = ''
    let z=[]
    for (let i = 0; i < string.length; i++) {
        current+=string[i]
        console.log(current+'-----current');
        
            if (current.includes(string[i+1])) {
                result=current
                console.log(result+'------result');
                current = ''
                z.push(result)
            }    
            console.log('    '); 
    }
        let max=0
   z.forEach(el => {
    if (el.length>=max) {
        max=el
    }
   });
    
    return max
}

console.log(findLongestSubstring2('abcabcbb'));
console.log(findLongestSubstring2('casessssroma'));
console.log(findLongestSubstring2('pwwkew'));
console.log(findLongestSubstring2('stringaaacciu'));


// abcabcbb -> abcc
// casessssroma -> sroma
// pwwkew -> wke | kew
// stringaaacciu -> stringa

// function findLongestSubstring(s){
//     let parola=''
//     let res=''
//     for (let i = 0; i < s.length; i++) {
//         const lettera = s[i];
//         if(parola.includes(lettera)){
//             if(parola.length>res.length){
//                 res=parola
//             }
//             parola=''
//         }else{
//             parola+=lettera
//         }
//     }
//     if(parola.length>res.length){
//         res=parola
//     }
//     return res
// }