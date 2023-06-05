function findLongestSubstring2(string) {
    let result = ''
    let current = ''
    let z = []
    for (let i = 0; i < string.length;i++ ) {
        current += string[i]
        if (current.includes(string[i + 1]) || i == string.length - 1) {
            result = current
            current = ''
            z.push(result)
        }
    }
    let max = ''
    console.log(z);
    for (let i = 0; i < z.length; i++) {

        if (z[i].length >= max.length) {
            max = z[i]
        }

    }
    return max.length
}

console.log(findLongestSubstring2('abcabcbb'));
console.log(findLongestSubstring2('casessssroma'));
console.log(findLongestSubstring2('dvdf'));//sbagliatoooo
console.log(findLongestSubstring2('stringaaacciu'));


// abcabcbb -> abcc
// casessssroma -> sroma
// pwwkew -> wke | kew
// stringaaacciu -> stringa

console.log('------------');
let max = ''
let y = ['13', 'asdsdf', 'o']
for (let i = 0; i < y.length; i++) {
    if (y[i].length > max) {

        max = y[i]
    }

}
console.log(max);

console.log('------------');


function arrOrd(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]==target||target<array[i]) {
            return i
        }
        
    }
    return array.length
}

console.log(arrOrd([1,3,5,6],5));
console.log(arrOrd([1,3,5,6],2));
console.log(arrOrd([1,3,5,6],7));
console.log(arrOrd([1,3,5,6],0));

function binarySearch(array, target) {
    let x=parseInt(array.length/2)
    if (target>array[x]) {
        return binarySearch(array.slice(x,array.length),target)
    }
    else if (target<array[x]) {
        return binarySearch(array.slice(0,x))
    }
    else if(target==array[x]){return x}
    else return 0
}

console.log(binarySearch([1,3,5,6],6));

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
console.log(mergeSortedArrays([1,3,5], [2,4,6,7,8]));

function piramid(height) {
    let m =[[1]]
    for (let i = 0; i < height; i++) {
        m.push()
        
    }
}