let a = [1, 4, 6, 3, -1, 5];
// n - переменнаяб которую мне так и не удалось передать как аргумент функции
let n = -10;

/**************** forEach*****************************/
// function consoleCallBack(value) {
//     console.log(value);
// }

// function forEach(data, callBack) {
//     for (let i = 0; i < data.length; i++) {
//         callBack(data[i]);
//     }
// }
// forEach(a, consoleCallBack);

// *************** MAP ***********************************


// function mapRerurnPlus(value){
//     return value + n;
// }

// function mapRerurnMinus(value){
//     return value - n;
// }
// function mapRerurnShere(value){
//     return value / n;
// }
// function mapRerurnPower(value){
//     return value ** n;
// }

// function map(data,callBack){
//     let b = [];
//     for(let i = 0; i < data.length; i++){
//         b.push(callBack(data[i]));
//     }
//     return b;
// }

// let arr1 = map(a,mapRerurnPower);
// let arr2 = map(a,mapRerurnShere);
// console.log(arr1,arr2);

/********************Filter ********************/

// function filterMin(value){
//     if(value < n){
//         return value;
//     }else{
//         return false;
//     }
// }
// function filterMax(value){
//     if(value > n){
//         return value;
//     }else{
//         return false;
//     }
// }
// function filterEqually(value){
//     if(value == n){
//         return value;
//     }else{
//         return false;
//     }
// }

// function filter(data,callBack){
//     let b= [];
//     for(let i = 0; i < data.length; i++){
//         if(callBack([data[i]])){
//             b.push(callBack(data[i]));
//         }
//     }
//     return b;
// }

// let arr3 = filter(a,filterMax);
// arr4 = filter(a,filterEqually);
// console.log(arr3,arr4);


/**************************Some***********/

function returnSomeMax(value) {
    if (value > n) {
        return true;
    } else {
        return false;
    }
}
function returnSomeMin(value) {
    if (value < n) {
        return true;
    } else {
        return false;
    }
}
function returnSomeEqually(value) {
    if (value == n) {
        return true;
    } else {
        return false;
    }
}


function some(data, callBack) {
    let resultSome ;
    for (let i = 0; i < data.length; i++) {
        if(callBack(data[i])){
            resultSome = true;
        }else{
            resultSome = false;
        }
    }
    return resultSome;
}



let u = some(a, returnSomeMin);
console.log(u)


/********************every********** */

function returnEveryMax(value){
    if(value > n){
        return true;
    }else{
        return false;
    }
}
function returnEveryMin(value){
    if(value < n){
        return true;
    }else{
        return false;
    }
}
function returnEveryEqually(value){
    if(value === n){
        return true;
    }else{
        return false;
    }
}
function every(data,callBack){
    let resultEvery;
    for(let i = 0; i< data.length; i++){
        if((callBack(data[i]===false))){
            resultSome = false;
        
        }else{
            resultSome = true;
        }

    }
    return resultEvery;
}
console.log(some(a,returnEveryEqually));

