// let a=100;//global scope
// const b=20;
//  var c=300;

// if(true){
    // let a=10;//block scope
// const b=20;
// var c=30;
// }


// console.log(a);
// console.log(b);
// console.log(c);






// function one(){
//     const username="Shivam"
//     function two(){
//         const website="Youtube"
//         console.log(username)
//     }
     // console.log(website);//here this is not fetched due to local scope 
//     two()
// }
// one()








// if(true){
//     const username="Shivam "
//     if(username==="Shivam "){
//         const website="youtube";
        // console.log(username + website)
    // }
   // console.log(website);//this will never execute due to local scope
// }
// console.log(username);//this will also never execute due to local scope






//++++++++++++++++++++++++++++++++++    ++++++++++


addone(5);//this thing can be hoisted
function addone(num){
    return num+1;

}
// addone(5);//this thing can be hoisted


//OR

const addTwo=function(num){
    return num+2;
}
addTwo(5);// but this thing can't be hoisted