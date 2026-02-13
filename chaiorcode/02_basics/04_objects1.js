console.log("Mahadev");


// const tinderUser=new Object();//this is giving empty {}
// const tinderUser={};//this is also gives us empty {}

// tinderUser.id="123ABC";
// tinderUser.name="Shivam";
// tinderUser.isLoggedIn=false;


// console.log(tinderUser)

//we can nest any thing at n times
// const regularUser={
//     email:"Shivampathak00037@gmail.com",
//     fullName:{
//         userfullname:{
//             firstname:"Shivam",
//             lastname:"Pathak"
//         }
//     }
// }
// console.log(regularUser)
// console.log(regularUser.fullName.userfullname.firstname);//for accessing single element from nested one


// console.log(regularUser.fullName?.userfullname?.middlename);
//  "?" we are using this for when we fetch data from api and at that time ,that thing are not present there then it does not contain error without applying if and else block







//MERGING OF TWO OBJECT
// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2};
// console.log(obj3);//this is like one upon other

//FOR ADDING TWO OBJECT THIS IS THE PERFECT METHOD
// const obj3=Object.assign(obj1,obj2);
// const obj3=Object.assign({},obj1,obj2);//good practice

// const obj3={...obj1,...obj2};//this thing we will use generally
// console.log(obj3)




//WHEN THE DATA WILL COME FROM DATABASE THEN WE USE
// const users=[
//     {
//         id:1,
//         email:"skumar@gmail.com",
//        
//     }
// ]



//when we want keys from inside then all keys are came in array i,e[]
// console.log(tinderUser)
// console.log(Object.keys(tinderUser));//for taking keys
// console.log(Object.values(tinderUser));//for taking values
// console.log(Object.entries(tinderUser));//for knowing entries and it retrn in arrays for all 
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));//for knowinr=g this property is available or not .





//OBJECT DESTRUCTURE AND JSON FILE
const course={
    coursename:"js in hindi",
    price:"999",
    courseinstructor:"Shivam"
}
const{courseinstructor}=course
console.log(courseinstructor);
// const{courseinstructor:instructor}=course;//"courseinstructor:instructor" if you thinks courseinstructor is long name then you can rename it using ":" and gives own type name which can you easily read or write

// console.log(instructor);








//JSON FILE SOMETHING for only understanding not full thing
// {
//     "name":"Shivam",
//     "cousename":"js by hitesh",
//     "price":"free"
// }


[
    {},
    {},
    {}
]