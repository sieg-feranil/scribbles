// Ex 1
// Dato il seguente JSON:
// [
//     {
//         "fullname": "Yoshi", "rate": [4, 5, 4, 6]
//     },
//     {
//         "fullname": "Wario", "rate": [4, 9, 6, 7]
//     },
//     {
//         "fullname": "Toad", "rate": [8, 9, 9, 8]
//     }
// ]
// salvarlo in un template string, parsarlo con l'apposita strategia e stabilire algoritmicamente chi è lo studente migliore e chi è ilpeggiore.

let json = `[
    {
        "fullname": "Yoshi", "rate": [4, 5, 4, 6]
    },
    {
        "fullname": "Wario", "rate": [4, 9, 6, 7]
    },
    {
        "fullname": "Toad", "rate": [8, 9, 9, 8]
    }
    ,
    {
        "fullname": "Toad", "rate": [8, 9, 9, 8]
    }
]`
function average(a) {
    let sum=0
    for (let i = 0; i < a.length; i++) {
        sum+=a[i]
    }
    let avrg= sum/a.length
    return avrg
}
// ------
const obj = JSON.parse(json)
// ------
function es1 (a){
    let max = 0
    let min = 0
    let j=0
for (let i = 0; i < a.length; i++) {
    if (average(a[i].rate) < average(a[j++].rate)) {
        max = i
        if (average(a[i].rate) == average(a[j].rate)) {
            console.log(a[i].fullname + '='+a[j].fullname);
        }
    }
    else {
        min = i
    }
}
let best =average(a[max].rate)+' '+a[max].fullname
let worst =average(a[min].rate)+' '+a[min].fullname
console.log('best student '+best +' '+ '/worst student '+worst);
}

console.log(es1(obj));

// ----------------------------------------------------------------------
// Ex 2
// Creare una funzione parseShape che prende in ingresso un oggetto che abbia questo template:
// { x: number, y: number, name: string }
// e produca un ouput relativo ad area e perimetro, in base al valore della proprietà name che stabilisce il tipo di figura geometrica in uso.
// Richiamare la funzione due volte con:

 const quadrato = {x: 5, y:5, shape: 'square'}
 const rettangolo = {x: 5, y:4, shape: 'rectangle'}
// per stampare area e perimetro di quadrato e rettangolo.
function parseShape(a) {
if (a.shape=='square') {
 console.log('square');   
 let perimeter=a.x*4
 let area = a.x*a.x
 console.log('perimeter '+perimeter);
 console.log('area '+area);
}
if (a.shape=='rectangle') {
    console.log('rectangle');
 let perimeter=a.x*2+a.y*2
 let area = a.x*a.y
 console.log('perimeter '+perimeter);
 console.log('area '+area);
}
return 'end'
}
console.log(parseShape(rettangolo));
// ----------------------------------------------------------------------
// Ex 3
// creare, a piacere, due letterali oggetto, che descriveranno rispettivamente:
// - uno studente (avrà nome, cognome, età, voti, un metodo per calcolare e stampare la sua media voti, un metodo per stabilire se è maggiorenne o meno)
// - un'automobile (avrà modello, marca, prezzo e tipoMotore. tipoMotore a sua volta avrà cilindrata, tipo (benzina, diesel o elettrico) e cv. L'automobile avrà un metodo printInfo che stampa in modo correttamente formattato e leggibile le sue feature
// richiamare i metodi dei due oggetti per stampare in output i risultati

const studente = {
    firstName: "John",
    lastName : "Doe",
    age       : 55,
    voti      :[1,2,3,4,5,6,7],
    gradesAvrg: function () {
    let avrg=0
      for (let i = 0; i< studente.voti.length; i++) {
      avrg=avrg+studente.voti[i]
       
      }  
      return avrg/studente.voti.length
    },
    over18 : function() {
      if (studente.age>=18) {
        return 'maggiorenne'
      }else return 'kid'
    }
  };
  console.log(studente.gradesAvrg());
console.log(studente.over18());
const auto = {
    modello: "punto",
    marca: "fiat",
    prezzo: "10$",
    tipoMotore: { cilindrata: 4, tipo: 2.2, cv: 1 },
    printInfo: function() {
        // return this.modello + " " + this.marca+" "+this. tipoMotore.cilindrata;
        return `info auto
marca:${this.marca}
modello:${this.modello}
prezzo:${this.prezzo}
tipo motore
cilindrata:${this.tipoMotore.cilindrata}
tipo:${this.tipoMotore.tipo}
cv:${this.tipoMotore.cv}`
      }
}
let k = auto.printInfo()
console.log(k);
// ----------------------------------------------------------------------
// Ex 4
// creare un array di oggetti, che rappresentano le dimensioni dei lati di un rettangolo, e avranno proprietà base e altezza.
// Nell'array inserire 5 oggetti con questo template e valori a piacere.
// Creare una funzione parseRectangles che prende in ingresso un array di oggetti con la struttura descritta e restituisca l'indice del rettangolo con l'area maggiore.
let dimensioni=`[
    {
        "base": 2, "altezza": 3
    },
    {
        "base": 3, "altezza": 4
    },
    {
        "base": 4, "altezza": 5
    }
    ,
    {
        "base": 6, "altezza": 7
    }
    ,
    {
        "base": 5, "altezza": 6
    }
]`
const rctngl = JSON.parse(dimensioni)
function parseRectangles(a) {
    let maxA=0
    let max=0
    let area = 0
    for (let i = 0; i < a.length; i++) {
        area = a[i].base*a[i].altezza
        if (maxA<=area) {
            maxA = area
            max=i
        }
    }
    return max
}
console.log('indice '+parseRectangles(rctngl));
// ----------------------------------------------------------------------
// Ex 5
// creare un array di oggetti, che rappresentano il contenuto di un parola, e avranno proprietà text. 
// Es { text: 'ciao' }, { text: 'javascript' }
// Nell'array inserire 5 oggetti con questo template e valori a piacere.
// Creare una funzione parseStrings che prende in ingresso un array di oggetti con la struttura descritta e restituisca quante stringhe contengono la lettera 'x'.

let prl=`[
    {
        "text": "xciao"
    },
    {
        "text": "hellxo"
    },
    {
        "text": "hola"
    }
    ,
    {
        "text": "etra"
    }
]`
const parola = JSON.parse(prl)
function parseStrings(array) {
    let c=0
    let x=0
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].text.length; j++) {
            if (array[i].text[j]=='x') {
                x++
            }
        }   
        if (x>0) {
            c++
            x=0
        }
    }
    return c
}
console.log('parole con x '+parseStrings(parola));