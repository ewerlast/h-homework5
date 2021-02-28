let a = [1,5, 5];

function returnArray(value) {
    return value + 2;
}
function returnArrayMinus(value) {
    return value - 2;
}

function map(data, callBack){
    let er = [];
    for(let i =0; i<data.length; i++){
       er.push(callBack(data[i])); 
      
    }
    return er
} 


 let g = map(a,returnArray);
 let y = map(a,returnArrayMinus)

console.log(g,y)



function retutnFilter(value){
    if(value === 5 ){
        return value;
    }else {
        return false
    }
}
function Filter(data,callBack){
    let b =[];
    for (let i = 0; i< data.length; i++){
        if(callBack(data[i])){
            b.push(callBack(data[i]));
        }
    }
    return b;
}
 let m =  Filter(a,retutnFilter);
 console.log(m);
