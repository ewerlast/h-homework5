const a = [1, 2, 3, -1, 5];
function consoleCallBack(value) {
    console.log(value);
}

function forEach(data, callBack) {
    for (let i = 0; i < data.length; i++) {
        callBack(data[i]);
    }
}
forEach(a, consoleCallBack);

function returnCallBack(value) {
    return value;
}
const b = [];
function map(data, callBack) {
    for (let i = 0; i < data.length; i++) {
        b[i] = callBack(data[i] * 2);
    }
    console.log(a);
    console.log(b);
}
map(a, returnCallBack);

let c = [];

function filter(data, callBack) {
    for (let i = 0; i < data.length; i++) {
        if (data[i] < 4) {
            c[i] = callBack(data[i]);
        }
    }
    console.log(c);
}
filter(a, returnCallBack);

let resultEvery;
function every(data ,callBack){
    for (let i = 0; i < data.length; i++){
        if(data[i] > 0 && data[i] != false){
            resultEvery = callBack[i] = "true";
        }else{
            resultEvery = callBack[i] = "false";
        }
        console.log(resultEvery);
    }
   
}
every(a,returnCallBack);

let resultSome;
function some(data,callBack){
    for (let i = 0; i < data.length; i++){
        if(data[i]>0){
            resultSome = callBack[i] = "true";
        }else{
            resultSome = callBack[i] = "false";
        }
       
    }
    console.log(resultSome);
}
some(a,returnCallBack);

