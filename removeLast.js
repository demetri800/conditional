function removeLast(array){
    let last = array[array.length-1];
    array.length -= 1;
    return last;
};
let arr = [1, 2, 3, 4, 5];
let last = removeLast(arr); // () represents a call of the function // 

console.log(last);
console.log (arr);
