const coding=["js","python","c++","ruby","cpp"];


//FOR EACH LOOP WILL NOT RETURNING ANY VALUE AFTER RUNNING
// const val=coding.forEach((item)=>{
//     console.log(item)
// })


//FILTER IN LOOP
// const mynum=[1,2,3,4,5,6,7,8,9,10];
// const newnums=mynum.filter((num)=>num>4)//FILTER USING LOOP
// console.log(newnums)


// const mynum=[1,2,3,4,5,6,7,8,9,10];
// const newnums=mynum.filter((num)=>{return num>4})//if we not use return here then output will be empty array []
// console.log(newnums)




//USING FOR EACH LOOP

// const newnums=[];
// const mynum=[1,2,3,4,5,6,7,8,9,10];
// mynum.forEach((num)=>{
//     if(num>4){
//         newnums.push(num)
//     }
    // console.log(newnums);//it gives a triangle like updated array
// })
// console.log(newnums);//it gives the original answer



const books=[{title:'Book one',genre:'non-fiction',publish:1989,edition:2010},
{title:'Book one',genre:'Java',publish:1990,edition:2019},
{title:'Book two',genre:'non-fiction',publish:1988,edition:2010},
{title:'Book three',genre:'history',publish:1997,edition:2015},
{title:'Book four',genre:'physics',publish:1996,edition:2014},
{title:'Book five',genre:'chemistry',publish:1995,edition:2012},
{title:'Book six',genre:'history',publish:1984,edition:2011},

]
let userbooks= books.filter((bk)=>bk.genre==="history")


userbooks=books.filter((bk)=>{return bk.publish>=1990})//line 49 and 50 both statement are same but here is only one difference
userbooks=books.filter((bk)=> bk.publish>=1990)
userbooks=books.filter((bk)=> bk.publish>=1990 && bk.genre==="history")


console.log(userbooks)