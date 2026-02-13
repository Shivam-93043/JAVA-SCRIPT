//for

// for(let i=0;i<=10;i++){
//     console.log(i)
// }

//or

// for(let index=0;index<=20;index++){
//     const element=index;
//     console.log(element);//element and index both are not accessiable outside the block
// }

// for(let index=0;index<=20;index++){
//     const element=index;
//     console.log(element);//element and index both are not accessiable outside the block
// }


// for(let index=0;index<=20;index++){
//     const element=index;
//     console.log(element);
//     if(element==5){
//         console.log("5'th no is best number");
//     }
//     console.log(element);
// }





// for(let i=0;i<=10;i++)
// {
//     console.log(`Outer loop ${i}`)
//     for(let j=0;j<=10;j++)
//     {
//         // console.log(`inner loop ${j} and inner loop ${i}`)

//         //for printing table 
//         console.log(i+"*"+j+"="+i*j)

//     }
// }




// let myarr=[1,2,3,4,5,6,7,8,9,0,"true","false","chor","chotta","bigHarami"];
// for(let i=0;i<myarr.length;i++)
// {
//     let element=myarr
//     console.log(element)
// }



//BREAK AND CONTINUE : in break statement when we reach at given condition and we applied the break statement after that not a single line will be executed in whole code but when 'continue 'keyword is detected then only that statement is skipped and rest all things or statement are printed
// for(let i=0;i<=10;i++){
//     if(i==5){
//         console.log(`detected 5`);
//         break;
//     }
//     console.log(`value of i is ${i}`)
// }


for(let i=0;i<=10;i++){
    if(i==5){
        console.log(`detected 5`);
        continue;
    }
    console.log(`value of i is ${i}`)
}