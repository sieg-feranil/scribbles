function ope(str, num1, num2) {
    let z = 0
    if (str == '+') {
        return num1 + num2;
    }
    else if (str == '-') {
        return num1 - num2;
    }
    else if (str == '*' || str == 'x') {
        return num1 * num2;
    }
    else if (str == '/') {
        return num1 / num2;
    }
    else {
        return 0;
    }

}
console.log(ope('-', 10, 5));
// -------------------------------------------------------------------2
console.log('---------------------------------------------------------');
function invertString(str) {
    let inverted = []
    if (typeof str == 'string') {

        for (let i = str.length - 1; i >= 0; i--) {
            inverted.push(str.charAt(i))
        }
    }
    else if (!isNaN(str)) { 
        inverted = str * 10
    }

    return inverted
}
console.log(invertString('ciao'));
// -------------------------------------------------------------------3
console.log('---------------------------------------------------------');
function xRayArray(str) {
    let num = 0
    if (str.length > 0) {
        console.log('lunghezza dato: ' + str.length);
        if (Array.isArray(str)) {
            console.log('è un array');
        }
        else {
            console.log('str è di tipo: '+typeof str);
        }
        for (let i = 0; i < str.length; i++) {
            if (!isNaN(str[i])) {
                num++
            }
        }
        if (num == str.length) {
            console.log('sono tutti numeri');
        }

    }
    else {
        console.log('empty');
    }
}
console.log(xRayArray([1,2,3]));
// -------------------------------------------------------------------4
console.log('---------------------------------------------------------');
function isPalindrome(str) {
    let count = 0
    let j = str.length
    for (let i = 0; i < str.length; i++) {
        j--
        if (str[i].toLowerCase() == str[j].toLowerCase()) {
            count++
        }
        else {
            console.log('non è palindroma');
        }
        if (count == str.length) {
            console.log('è palindroma');
        }
        // console.log(count);
    }
}
console.log(isPalindrome('Ana'));
// -------------------------------------------------------------------5
console.log('---------------------------------------------------------');
function evenInMatrix(mtrx) {
    let even = 0
    for (let i = 0; i < mtrx.length; i++) {
        for (let j = 0; j < mtrx[i].length; j++) {
            if (mtrx[i][j] % 2 == 0) {
                even++
            }

        }


    }

    return even
}
console.log(evenInMatrix([
    [2, 1, 6],
    [3, 4, -10],
    [9, 9, 240]
]));

console.log('---------------------------------------------------------');
function isPalindrome(str) {
    let count = true
    let j = str.length
    for (let i = 0; i < str.length; i++) {
        j--
        if (str[i].toLowerCase() != str[j].toLowerCase()) {
            count= false
        }
  
        
    }
    if (count) {
        console.log('è palindroma');
    }
    else 
    console.log('non è palindroma');
    // console.log(count);
}
console.log(isPalindrome('anssa'));