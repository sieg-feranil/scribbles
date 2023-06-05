// Ex 1
// --------------------------------------------------------------------
// creare una funzione formatDate che, presi in ingresso un numero, una stringa e un numero, stampi una data formattata.
// Il primo numero rappresenta l'anno, la stringa il nome del mese e il secondo numero il giorno.
// es: formatDate(2023, 'maggio', 17)   stampa "17-05-2023"

function formatDate(y,m,d) {
    let obj =new Map([
        ["gennaio", 1],
        ["febbraio", 2],
        ["marzo", 3],
        ["aprile", 4],
        ["maggio", 5],
        ["giugno", 6],
        ["luglio", 7],
        ["agosto", 8],
        ["settembre", 9],
        ["ottobre", 10],
        ["novembre", 11],
        ["dicembre", 12]
    ]);
   
   m=obj.get(m)
   let date= new Date(y,m-1,d) 
   let mStr=''
   if (m<10) {
    mStr='0'+(m)
   }
   else mStr+=(m)+''
   console.log(date.getDate()+'-'+mStr+'-'+date.getFullYear());
   
}
formatDate(1997, 'ottobre', 24)
// Ex 2
// --------------------------------------------------------------------
// creare una funzione cmpDate che prende in ingresso 2 stringhe che rappresentano 2 date formattate nel formato americano visto a lezione.
// La funzione estrapola l'anno da entrambe le date e restituisce 1 se il primo anno è maggiore del secondo, -1 viceversa e 0 se sono pari.
// Chiamare la funzione 3 volte con valori a piacere.

function cmpDate(str1,str2) {
let date1=new Date(str1)
let date2=new Date(str2)
if (date1.getFullYear()>date2.getFullYear()) {
    return 1
}
else if (date1.getFullYear()<date2.getFullYear()) {return-1}

return 0
}
console.log(cmpDate('1999-02-02','1999-02-02'));
// Ex 3
// --------------------------------------------------------------------
// creare una funzione getDateDay che prende in ingresso una data formattata nel formato americano visto a lezione e restituisce il giorno della settimana relativo, in parola.
// Chiamare la funzione con 3 date a piacere.
// es: getDateDay('2023-05-17')  -> 'mercoledì'
function getDateDay(y,m,d) {
    let date= new Date(y,m,d) 
    let str= date.getDate
    return str
}
console.log(getDateDay(2022,6,3));
// Ex 4
// --------------------------------------------------------------------
// dato il seguente JSON:

let json= `[
    {
        "name": "mario",
        "active": true,
        "feat": {
            "role": "protagonist"
        }
    },
    {
        "name": "luigi",
        "active": true,
        "feat": {
            "role": "protagonist"
        }
    },
    {
        "name": "wario",
        "active": false,
        "feat": {
            "role": "antagonist"
        }
    },
    {
        "name": "yoshi",
        "active": false,
        "feat": {
            "role": "protagonist"
        }
    }
]`

// creare una funzione getInfo che, preso in ingresso l'array di oggetti ottenuto dal JSON, mi dice:
// - quanti protagonisti ci sono nell'array
// - quanti protagonisti attivi ci sono nell'array
// - quanti antagonisti ci sono nell'array
const input = JSON.parse(json)
function n(a) {
    let prt=0
    let ant=0
    let act=0
    for (let i = 0; i < a.length; i++) {
        
        if (a[i].feat.role=="protagonist")
        prt++
        else if (a[i].feat.role=="antagonist"){
            ant++}
            act=prt
            if (!a[i].active) {
                act--
            }
    }
   return `potagonisti: ${prt} attivi ${act} antagonisti ${ant} `
    
}
console.log(n(input));
// Ex 5
// --------------------------------------------------------------------
// creare uno script a piacere in cui si dimostra l'uso di:
// - array di array
// - array di oggetti
// - mappe
// - set
// - funzione che accetta una funzione
// - this

const pg1= 
    {
        name: "asd",
        online: true,
        buffs: {
            speed:true,
            hp:true,
            atk:true
        },
        skills: [
            ["swing","throw","dodge"],
            ["stun","buff","teleport"]
        ],
        useSkill: function(j,k) {
            console.log(`${this.skills[j][k]}`);
        },
    }


console.log(pg1);
pg1.useSkill(0,1)
function a(p) {
    if (isNaN) {
        return p
    }
}
function n(x) {
    console.log('ciao'+x);
}
n(a('p'))
console.log('--------------------------------------------------------------');
let twoSum = function(nums, target) {
    let map= new Map ()
    for (i=0;i<nums.length;i++){
        let n1 = nums[i]
        let n2 = target - nums[i]
        if (map.has(n2)){
            return [i,map.get(n2)]
        }
        map.set(n1, i)
    }
        };
        console.log(twoSum([1,2,3,6], 5))

        let x = 10

for (let x = 0; x <3; x++) {
    console.log(x);
    
}
console.log(x);
function biggerString(a, b) {
    if(a.length > b.length) return a
    else if (a.length < b.length) return b
    else return a
  }
  console.log(biggerString('ciao','hiiiiiiiiii'));
   n = 0
if ((n && true) || false) {
  console.log('Say. My. Name.')
} else {
  console.log("... you're Heisenberg...")
}