function f2(cb){
    return cb(2,3);
}

function f1(tmp){
    console.log(tmp);
}



f1(f2((a,b)=>{
    console.log(a + "+" + b + "=");
    return a + b;
}));

