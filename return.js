function randomNumber(max){
    let decimal = Math.random();
    let times10 = decimal * max;
    let number = Math.floor(times10);
    return number;
};
let number = randomNumber(1000);
console.log('hello my name is  superman');

