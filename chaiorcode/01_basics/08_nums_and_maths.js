// const score=400;


// const balance = new Number(100);//manually defining type of data
// console.log(balance);


// const balance = new Float32Array(100);//manually defining type of data  and print 100- 0
// console.log(balance)

// const balance = new Float64Array(100);//manually defining type of data and print 100- 0
// console.log(balance)


// console.log(balance.toString());//it convert the number into String
// console.log(balance.toString().length);//here the size of String is givem
// console.log(balance.toFixed(1));//to fixed is that how much number you want to see after decimal and we prefer mainly one or two
// const othernumber=23.8976;
// console.log(othernumber.toPrecision(4));//isko thora dhyan se use krna hoga kyoki ye starting se count krta hai


// const hundred=1000000;
// console.log(hundred.toLocaleString('en-US'));//it is ue]sed in US (united states)
// console.log(hundred.toLocaleString('en-IN'));//this is used in india




//+++++++++++++++++++++++++++++++++++++++++++++++++++
// console.log(Number.MIN_VALUE)
// console.log(Number.MAX_VALUE)
// console.log(Number.EPSILON)
// console.log(Number.NEGATIVE_INFINITY)
// console.log(Number.call)
// console.log(Number.NaN)



//+++++++++++++++++++++++= MATHS =++++++++++

console.log(Math.PI);
console.log(Math.abs(-4));//abs stab=nd for absolute value whiv=ch converts negative value to positive value
console.log(Math.round(4.3));//here it give general round of value
console.log(Math.ceil(4.2));//it provides uper value always just as for 4.2->5
console.log(Math.floor(4.9));//it takes lower value just as for 4.9->4
console.log(Math.sqrt(16));//it gives whise square root is 16
console.log(Math.min(1,2,3,4,5,6,78,9));//for minimum value
console.log(Math.max(1,2,3,4,5,6,7,8,9));//for maximum value
console.log(Math.random());//always give value between 0 and 1
console.log((Math.random()*10)+1);//value betweeen 1 and 10



const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);//value between max and min which are decleared and initialized above