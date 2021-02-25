const a = [1, 4, 6, 3, -1, 5];
function consoleCallBack(value) {
    console.log(value);
}

function forEach(data, callBack) {
    for (let i = 0; i < data.length; i++) {
        callBack(data[i]);
    }
}
forEach(a, consoleCallBack);
// *************** MAP ***********************************
let n = 2

function returnCallBackPlus(value) {
    return value + n;
}
function returnCallBackMinus(value) {
    return value - n;
}
function returnCallBackMultiply(value) {
    return value * n;
}
function returnCallBackShare(value) {
    return value / n;
}
//И так далее..



const b = [];
function map(data, callBack) {
    for (let i = 0; i < data.length; i++) {
        b[i] = callBack(data[i]);
    }

}

map(a, returnCallBackPlus);
console.log(b);
map(a, returnCallBackMinus)
console.log(b);
map(a, returnCallBackMultiply)
console.log(b);
map(a, returnCallBackShare)
console.log(b);

//*************FILTER ********************/
let c = [];
let filterСomparison = 3;
function filterMore(value) {
    if (value >= filterСomparison) {
        return value;
    }
    if (value < filterСomparison) {
        return false;
    }

}
function filterLess(value) {
    if (value <= filterСomparison) {
        return value;
    }
    if (value > filterСomparison) {
        return false;
    }


}
function filterEqually(value) {
    if (value === filterСomparison) {
        return value;
    }
    if (value !== filterСomparison) {
        return false;
    }

}

function filter(data, callBack) {
    for (let i = 0; i < data.length; i++) {
        c[i] = callBack(data[i]);
    }

}

filter(a, filterMore)
console.log(c);
filter(a, filterLess)
console.log(c);
filter(a, filterEqually)
console.log(c);


/*********** every **********/
let startEvery = -10;
function everuCallBackEqually(value) {
    if (value === startEvery) {
        return "true"
    } else {
        return "false"
    }
}
function everuCallBackMore(value) {
    if (value > startEvery) {
        return "true"
    } else {
        return "false"
    }
}
function everuCallBackLess(value) {
    if (value < startEvery) {
        return "true"
    } else {
        return "false"
    }
}

let resultEvery;
function every(data, callBack) {
    for (let i = 0; i < data.length; i++) {
        resultEvery = callBack(data[i]);

    }

}
every(a, everuCallBackMore);
console.log(resultEvery)

/* ******************SOME************/

let resultSome;
let startSome = 4;
function someCallBackEqually(value) {
   if (value !== startSome){
       continue;
   }
   if(value ===startSome){
       return true;
   }
}


function some(data, callBack) {
    for (let i = 0; i < data.length; i++) {
        resultSome = callBack(data[i]);

    }

}
some(a, someCallBackEqually);
console.log(resultSome);