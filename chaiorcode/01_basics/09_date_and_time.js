// let mydate=new Date();
// console.log(mydate);//in unreadble form
// console.log(mydate.toString());//in readable form
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toJSON());
// console.log(mydate.getDate());
// console.log(mydate.getTimezoneOffset());
// console.log(typeof mydate);//object

// let mycreatedate= new Date(2023,0,23);//in javascript month is starting from 0th index
// console.log(mycreatedate);
// console.log(mycreatedate.toDateString());

// let mycreatedate= new Date(2023,0,23,5,6);//here date and time as well as year and month
// console.log(mycreatedate.toLocaleString());


// let mycreatedate= new Date("2023-01-14");
// // console.log(mycreatedate.toLocaleString())






// //++++++++++++= TIME STAMP =++++++++++++++++
// let myTimeStamp= Date.now();//gives time in millisecond
// console.log(myTimeStamp);
// console.log(mycreatedate.getTime());






// console.log(Math.floor(Date.now()/1000));//here floor is used for not taking decimal value and we divide it by 1000 is for taking that time in second




let newDate=new Date();
// console.log(newDate.getMonth());//it gives always 1 month previous number because in js month is of 0th index
// console.log(newDate.getDate());


console.log(newDate.toLocaleString('default',{weekday:"long",timeZone:"Asia/Kolkata"}));