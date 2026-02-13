// for each loop




// --->for each using function

// const coding=["js","python","c++","ruby","cpp"];
// coding.forEach( function (item){
//     console.log(item)
// })


// ---->for each using Arrow function 

// const coding=["js","python","c++","ruby","cpp"];
// coding.forEach( (item)=>{
//     // console.log(item)
// })




// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)




// coding.forEach((item, index,arr)=>{
//     console.log(item,index,arr)
// })






const mycoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    },
    {
        languageName:"ruby",
        languageFileName:"rb"
    }
]

mycoding.forEach((item)=>{
    console.log(item.languageName)
})