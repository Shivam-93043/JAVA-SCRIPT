console.log("Mahadev")


//if statement


// < ,>,<=,>=,==,===,!==


// const userlogin=true;
// const temprature=41;
// if(temprature<50)
// {
//     console.log("Temprature is good or Normal");
// }
// else{
//     console.log("Temprature is not good");
// }




// const score=200;
// if(score>100){
//     const power="fly";
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`);//here power are not accessable because let and const is block scope


//SHORTHAND NOTATION

// const balance=1000;
// if(balance>500) console.log("test"),console.log("test2");//in general we are not using this because it is totally immature type code which is read by some people



// const balance=1000;
// if(balance<500){
//     console.log("less than")
// }else if(balance<750){
//     console.log("less than 750")
// }else if(balance<900){
//     console.log("less than 910")
// }else
//     console.log("totally 1000 hai")






const userLoggedIn=true;
const debitcard=true;
const loggedInFromGoogle=false;
const loggedInFromEmail=true;
if(userLoggedIn && debitcard)
{
    console.log("Allow to buy course");
}
if(loggedInFromGoogle||loggedInFromEmail)
{
    console.log("user logged in")
}