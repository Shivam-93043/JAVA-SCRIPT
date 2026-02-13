// const userEmail="h@itesh.ai";



//falsy value
// > 0,falsy,-0,BigInt O(n),"", null, undefined, NaN

//truthy values
// > "0", 'false', " ",[],{},function(){}


// false==0
//true

// false==''
// true

// 0==''
// true



//Nullish coalescing Operator(??):this operator are only used for handling "null" or "undefined" value while execution

// let val1;
// val1=5 ?? 10;
// val1=null ?? 10;//here 10 value are printed
// val1=undefined ?? 15;//here 15 are printed
// val1=null ?? 10 ?? 20 ??30;//here 10 are printed because after null ,first value always  be printed

// console.log(val1)




//TERNIARY OPERATOR (?): nullish and terniary both operator are totally different

// const iceTeaPrice=100
// iceTeaPrice<=90 ? console.log("less than 90"): console.log("More than 90");
