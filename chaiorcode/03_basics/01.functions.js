// console.log("Mahadev");


// function syMyName(){
//     console.log("Shivam");
//     console.log("Shivam");
//     console.log("Shivam");
//     console.log("Shivam");
//     console.log("Shivam");
//     console.log("Shivam");
//     console.log("Shivam");
// }
// syMyName();//without calling function we can not give output


//NON PARAMETERIZED FUNCTION
// function addTwoNo(){
//     let a=10,b=20;
//     console.log(a+b);
// }
// addTwoNo();


// PARAMETERIZED FUNCTION
// function addTwoNum(num1,num2){//num1 and num2 are parameters
//     console.log(num1+num2);
// }
// addTwoNum(10,20);//10 and 20 are arguments


// function addTwoNumberr(num1,num2){
    // let result=num1+num2;
    // return result;


//     return num1+num2;
// }
// const result=addTwoNumberr(10,10);
// console.log("result",result)




// function loginUserName(username="Sam")//if we do not pass any arguments then "sam" will automatically printed
// {
//     if(username===undefined)// or "if(!username)"
//         {
//         console.log("Please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }
// loginUserName("Shivam")
// console.log(loginUserName("Shivam"))
// console.log(loginUserName());//if we do not pass any arguments then output will be undefined





//REST OPERATOR OR SPREAD OPERATOR(...)

// function calcualteCartPrice(val1,val2,...num1){//in this first two value will occupy by val1 and val2 and rest are occupied by spread operator i.e ...num1
// function calcualteCartPrice(...num1){
//     return num1;

// }
// console.log(calcualteCartPrice(200,300,400,500))



//HOW TO PASS OBJECT INTO FUNCTION

const user={
    username:"Shivam",
    price:100
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)

//PASSSING OBJECT AS ARGUMENT

// handleObject({
//     username:"sam",
//     price:100
// })




//PASSING ARRAY AS ARGUMENT

const myNewArray=[200,400,500,600];
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([1,2,3,4,5,6]))