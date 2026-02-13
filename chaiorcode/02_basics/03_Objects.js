//SINGLETON OBJEECTS:->when we use any constructor then only single type of objects are formed 

// Object.create()//by this we can take Singleton object


//object literals:->

const mysym= Symbol("key1");
const jsuser={
    name:"Shivam",
    "full Name":"Shivam Pathak",//this thing will never accessed using . operator. for this always use ["full name"], by using this we can access the full name
    age:20,
    [mysym]:"key1",//symbol is used like this
    location:"jaipur",
    email:"shivampathak00000@gmail.com",
    isLoggedIn:false,
    lastlogindays:["Monday","saturday"]
}
console.log(jsuser.email);
console.log(jsuser[mysym]);//for accessing symbol
console.log(jsuser["email"]);//this thing can access each and every thing of object



//for changing the elements of the object
jsuser.email="sangamkumar832646@gmail.com"
console.log(jsuser["email"]);

//if you want to no body can change the value then you apply freeze keyword
// Object.freeze(jsuser);
// console.log(jsuser);
// jsuser.email="swati@gmail.com";//by appplying this after freezeing,this is not give the error but value never be change
// console.log(jsuser)




jsuser.greeting=function(){
    console.log("Hello js user");
}
jsuser.greetingTwo=function(){
    console.log(`hello js user,${this["full Name"]}`);
}
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())