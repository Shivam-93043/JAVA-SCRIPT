//createion ofPromise

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls and cryptography

  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); //if we not write "resolve()" here then "promiseOne.then" never be executed
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});




new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  });
}, 3000).then(function () {
  console.log("Async 2 resolved");
});




const Promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});
Promise3.then(function (user) {
  console.log(user);
});




const PromiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ username: "chai", password: "Shivam@345" });
    } else {
      reject("SOMETHING WENT WRONG");
    }
  }, 1000);
});

PromiseFour.then((user) => {
  // console.log(user)
  return user.username;
})
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function(){
    console.log("The promise is either resolved or rejected")
  })





  //Promise handling using Async and await

  const PromiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:'javascript',password:"shivam@8847"})
        }else{
            reject("ERROR: js went wrong")
        }
    },2000)
  })
  async function consumePromiseFive(){
   try{
     const response=await PromiseFive
    console.log(response)
   }
   catch(error){
    console.log(error)
   }
  }
  consumePromiseFive()




//   async function getAllUser(){
//     try{
//         const response= await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         // console.log(response)
//     const data= await response.json()
//     console.log(data)
//     }catch(error){
//         console.log(error)
//     }
//   }
//   getAllUser()




fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data)})
.catch((error)=>console.log(error))