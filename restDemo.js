function restDemo1(...param){
    console.log(param);
    console.log(param.length);
}

function restDemo2(a, ...param){
    console.log(param);
    console.log(param.length);
}

restDemo1(1,'a', 2, 'b');
restDemo2(1,'a', 2, 'b');