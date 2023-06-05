function mergeSortedArrays(arr1, arr2) {
    let c = arr1.concat(arr2)
    let swapping
    for (let i = 0; i < c.length; i++) {
        if (c[i]> c[i + 1]) {
            swapping = c[i + 1];
            c[i + 1] = c[i];
            c[i] = swapping;
            i=-1
            };
    }
  
    return c
}
console.log(mergeSortedArrays([-1,1, 7, 3], [2, 5, 0]));

function minz(array) {
    let min = array[0]
    for (let i = 1; i < array.length; i++) {
         if (min>array[i]) {
            min=array[i]
         }
    }
    return min
}

function noConditionals(n) {
const map = new Map([
    [1,0],
    [0,1]
]);
return map.get(n)
}
console.log(noConditionals(1));




function occurrencies(word) {
    const map=new Map ()
    let k=[]
    word=word.toLowerCase()
    for (let i = 0; i < word.length; i++) {
        if (map.has(word[i])) {
            map.set(word[i],(map.get(word[i])+1))
        }
        else map.set(word[i].toLowerCase(),1)
        
    }
    map.forEach(v => {
        k.push(v)
    });
    k.sort(function(a, b) {
        return a - b;
      });
      return k
}
console.log(occurrencies('ciiiiiaoooo'));

console.log('------------------------------');
let g=[['c','a','i','o'], "cio", "oiac", "bye"]
console.log(g[0].sort());
console.log(g[1].split(''));




console.log('---------------------------------');
// function anagrams(word, maybeAnagrams) {
//     let x= word.split('').sort()
//     let k=[]
//     maybeAnagrams.forEach(el => {
//         let y=el.split('').sort()
//         if (arrayEquals(x,y)) {
//             k.push(el)
//         }
//     });
//     return k
// }
// function arrayEquals(a, b) {
//     return Array.isArray(a) &&
//       Array.isArray(b) &&
//       a.length === b.length &&
//       a.every((val, index) => val === b[index]);
//   }




function anagramz(word, maybeAnagrams) {
    let x= word.split('').sort()
    let k=[]
    maybeAnagrams.forEach(el => {
        let y=el.split('').sort()
        if (x.length === y.length &&
      x.every((val, index) => val === y[index])) {
            k.push(el)
        }
    });
    return k
}
console.log(anagramz('ciao',["caio", "cio", "oiac", "bye"]));
console.log('--------------------------111');
function anagrams(word, maybeAnagrams) {
    let k=[]
    let map=new Map()
    for (let i = 0; i < word.length; i++) {
        map.set(word[i])  
    }
    for (let i = 0; i < maybeAnagrams.length; i++) {
        let h=0
        for (let j = 0; j < maybeAnagrams[i].length; j++) {
            
            if (map.has(maybeAnagrams[i][j])) {
                h++
            }
            }
            if (h==maybeAnagrams.length) {
                k.push(maybeAnagrams[i])
            }
        }
    
    return k
}
console.log(anagrams('ciao',["caio", "cio", "oiac", "bye"]));






function waldo(obj,name) {
    if (obj.value!=name) {
        if (obj.left.value==name) {
            i++
            return name +' '+ i
        }
        else waldo(obj.left,name)
        if (obj.right.value==name) {
            i++
            return name+' '+ i
        }
        else return waldo(obj.right,name)
    }
    else return obj.value
}
console.log(waldo(tree,'Shelob'));