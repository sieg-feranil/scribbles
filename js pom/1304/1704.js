function zigzag(str, n) {
    let line1 = ''
    for (let i = 0; i < str.length; i = i + n + 1) {
        line1 += str[i] + ' '
    }
    console.log(line1);
    let line2 = ''
    for (let i = 1; i < str.length; i = i + n - 1) {
        line2 += str[i]
    }
    console.log(line2);
    let line3 = ''
    for (let i = 2; i < str.length; i = i + n + 1) {
        line3 += str[i] + ' '
    }
    console.log(line3);
}

zigzag('PAYPALISHIRING', 3)


let m = [[1, 2, 3],
[1, 2, 3]]
console.log(m);

function zigzagn(str, n) {
    let x = (n - 1) * 2
    
    for (let abs = 0; abs < n; abs++) {
        let k = ''
        console.log(abs);
        if (abs % 2 == 0) {
            for (let j = abs; j < str.length; j += x) {
                k += str[j]+' '

            }
            console.log(k);
        }
        else {
            for (let i = abs; i < str.length; i += 2) {

                k += str[i]

            }
            console.log(k);
        }
        



        // console.log(z);
        // for (let j = abs; j < str.length; j+=x) {    
        //     y+=str[j]

        // }
        // console.log(y);
    }

    return
}
console.log(zigzagn('PAYPALISHIRING', 5));

function parentesi(str) {
    let count=0
    for (let i = 0; i < str.length; i++) {
       if(str[i]=='('||str[i]==')'){
        if (str[i]=='(') {
            count++
        }
        else if (str[i]==')'){
        count --}
        if (count<0) {
            return false
        }
}
else console.log(`${str[i]} non è una parentesi`);}
if (count==0) {
    return true
}
else {return false }}
console.log(parentesi('()()(()))'));

console.log('----------------');
function mergeSortedArrays(arr1, arr2) {
let c = arr1.concat(arr2)

let minimo=Math.min(...c)
for (let i = 0; i < c.length; i++) {
    if (c[i]==minimo) {
        c.unshift(c[i])
    }
}
return c
}
console.log(mergeSortedArrays([1,7,3],[2,5,0]));
for (let j = el[i].length; j >-1; j--) {
    console.log(el[i][j]);
    
   }


