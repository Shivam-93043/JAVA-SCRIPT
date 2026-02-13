//for of

// const arr=[1,2,3,4,5,6,7];
// for (const num of arr) {//for of loop:-this loop is automatically managing loop
//     console.log(num)
// }



// const greeting="hello World";
// for (const  greet of greeting) {
//     console.log(`Each char is ${greet}`)
// }



//MAPS:- Duplicate elements are not allowed in map and it maintains the original order of insertion of keys



// const map=new Map()
// map.set('IN',"india");
// map.set('us',"United states")
// map.set('IN',"india")
// // console.log(map);

// for (const key of map) {
//     console.log(key);//in this the key with array is printed just like ['IN'=>'INDIA']
    
    
// }



//for printing key and values we may write this code as:-

// const map=new Map()
// map.set('IN',"india");
// map.set('us',"United states")
// map.set('IN',"india")
// // console.log(map);

// for (const [key, value] of map) {
//     console.log(key,':-',value)
// }


//===>CAN WE APPLY FOR OF LOOP ON OBJECT?
// ===>Object is not iterable directly and it is not accessiable by "for of " loop

    // const myobj={
    //     'game1':'nfs',
    //     'game2':'spiderman'
    // }
    // for(const[key, value] of Object){
    //     console.log(key,':-',value)
    // }



    // for in loop on maps are gives us nothing in output

    const map=new Map()
map.set('IN',"india");
map.set('us',"United states")
map.set('IN',"india")
// console.log(map);

for (const [key, value] in map) {
    console.log(key,':-',value)
}