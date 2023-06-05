

const nums= [1,2,3,4,5]
let init= 3

let k=nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    init
);
console.log(k);

function countdown(seconds) {
    return new Promise((resolve, reject) => {
  
      const countdownInterval = setInterval(() => {//esegue un funzione ogni tot tempo
        if (seconds > 0) {
          console.log(seconds + '...');
          seconds--;
        } else {
          clearInterval(countdownInterval);//ferma la ripetizione
          resolve();
        }
      }, 1000);//tempo tra una esecuzione e l'altra
    });
  }

  
  countdown(3)
  .then(() => {
    console.log('Fine countdown!');
  })//funzione async aspetta che la promise finisca

  const myPromise = new Promise((resolve, reject) => {
    // Esempio di risoluzione della Promise con un valore
    resolve("Risultato");//risoluzione della promise
  });
  
  myPromise.then((result) => {// il metodo then si usa per gestire la risoluzione di resolve
    console.log(result); // Output: "Risultato"
  });


  const myPromise2 = new Promise((resolve, reject) => {
    const myFunction = () => {
      setTimeout(() => {
        const result = "Risultato dalla funzione";
        resolve(() => result+'!!!!'); // Restituzione di una funzione che ritorna il risultato
      }, 2000);
    };
  
    myFunction();
  });
  
  myPromise2
    .then((resultFunction) => {
      const result = resultFunction(); // Chiamata esplicita alla funzione restituita
      console.log(result); // "Risultato dalla funzione"
    })
    .catch((error) => {
      console.log("Errore durante l'esecuzione:", error);
    });
  
    const obj = {
      "id": 3,
      "data": {
        "name": "pippo",
        "age" :28
      }
    }

    //destructuring
    let {data:{age},id}=obj
    console.log(age, id);