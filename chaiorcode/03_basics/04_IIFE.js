// console.log("Mahadev");

//Immediately Invoked Function Expressions(IIFE)


function chai1(){
    console.log("Db connected")
}
chai1();


//AFTER APPLYING IIFE ON PREVIOUS CODE

(function chai(){//named  iife because function name is "chai()"
    console.log(`DB CONNECTED`)
})();


//Why we use IIFE?
// ->first it is immediately use me aata hai
// ->global scope ke pollution se bchne ke liye




//IIFE USING ARROW FUNCTION(=>)
(()=>{
    console.log(`DB CONNECTED`)
})();



//PARAMETERIZED THING USING IIFE
((name)=>{
    console.log(`DB CONNECTED to ${name}`)
})('shivam');