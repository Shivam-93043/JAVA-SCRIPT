const mynums=[1,2,3,4]

//USING FUNCTION

// const mytotal=mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and curvval:${currval}`)
//     return acc+currval
// },0)//here 0 is accumulator which is initial value 
// console.log(mytotal)

//USING ARROW FUNCTION
const mytotal=mynums.reduce((acc,currval)=>{
    console.log(`acc:${acc} and curvval:${currval}`)
    return acc+currval
},0)//here 0 is accumulator which is initial value 
console.log(mytotal)



// or 

const mytotal1=mynums.reduce((acc,currval)=>(
    console.log(`acc:${acc} and curvval:${currval}`),
     acc+currval
),0)//here 0 is accumulator which is initial value 
console.log(mytotal1) 