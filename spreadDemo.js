let arr1 = [1,2,3,4,5];
let arr2 = [5,6,7,8];
let arr3 = [...arr1,...arr2];
let arr4 = [arr1,arr2];
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);

//let arr1 = [1,2,3,4,5];
//let [a,b,c,d] = arr1;
function test(a){
    return [1,a,3];
}
[a,b,c,d] = test('b');
console.log(a);
console.log(b);
console.log(c);
console.log(d);