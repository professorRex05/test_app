let arr = [1,2,3,4];

// const cb = (i) => {
//     return i * 2;
// }

function cb1(i){
    return i * 2;
}

console.log("arr.map: " + arr.map(cb1));
console.log("myMap: " + myMap(arr, cb1));

function myMap(arr, cb){
    let newArr = [];
    for(let i of arr){
        let newItem = cb(i);
        newArr.push(newItem);
    }
    return newArr;
}