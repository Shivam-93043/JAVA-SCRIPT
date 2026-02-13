// console.log("Mahadev");



//WHEN WE USE CURLY BRACES IN FUNCTION THEN WE HAVE TO APPLY "RETURN" KEYWORD AND THIS WHOLE THING IS CONSIDERD AS EXPLICIT FUNCTION




// const user={
//     username:"Shivam",
//     price:999,
//     welcomeMessage:function(){
//         console.log(`${this.username}, Welcome to website`);
//         console.log(this);//'this' thing gives us proper information about all thing inside this block
//     }
    
// }
// user.welcomeMessage()
// user.username="Sam";
// user.welcomeMessage()

// console.log(this)//this thing gives us empty{}





function chai(){
    let username="Shivam"
    console.log(this.username);//we are not able to use 'this' keyword inside function yet because here we are not calling the function
}
chai()



// const chai=function(){
//     let username="Shivam"
//     console.log(this.username);//here also we are not able to use 'this' keyword yet
// }
// chai()






//++++++++++++++++++ ARROW FUNCTION(=>) ++++++++++++++



// const chai=()=>{
//     let username="Shivam"
//     console.log(this.username);//here also we are not able to use 'this' keyword yet and here it is 'undefined'
//     console.log(this);// it gives the empty value i.e "{}"
// }
// chai()



// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(2,2))






//+++++++++++++++++++++++++ IMPLICIT RETURN ++++++++++++++++++
//in this we are remove the curly braces


// const addTwo=(num1,num2)=> (num1+num2);
// console.log(addTwo(1,2));