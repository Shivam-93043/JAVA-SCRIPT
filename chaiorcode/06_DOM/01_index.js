//this whole code can be applied on browswe directly

/*
console.log(document);
console.log(window.document);
console.log(document.links);


console.log(document.getElementById('Fheading'));

// for manipulation
console.log(document.getElementById('Fheading').innerHTML="<h1>Shivam</h1>")



document.getElementById("title");
document.getElementById("title").id;
document.getElementById("title").className;
document.getElementById("title").getAttribute("id");

document.getElementById("title").setAttribute("id","test");
document.getElementById("test, heading").setAttribute("id","title");



document.getElementById('title');//for accessing id
const title=document.getElementById("title");//for storing in title


//for styling 

title.style.backgroundColor="green";//for color
title.style.padding="20px";//for padding

title.style.borderRadius="10px";//for borderradius




//for knowing innerhtml or what is written inside the code
title.textContent;//it gives what is written inside code



title.textContent;//it gives each and every thing which is written inside the code

title.innerText;//it does not give each and every thing which is inside the code , if i hide the thing using style then it is not able to fetch that data

title.innerHTML;//in innerHTML all the thing are fetched kyu na html ke ander html ho



//QUERYSELECTOR
document.querySelector('h1');//it gives first element


document.querySelectorAll('h1');//it gives all h1


document.querySelector('#title');//for accessing id through queryselector we use #


document.querySelector('.heading');//for accessing class through querySelector we use .


// for selecting unorderedlist
document.querySelector("ul")
<ul>​…​</ul>​
const myul=document.querySelector("ul");//for accessing first element of ul and we store that element in myul

myul.querySelector('li');//for accessing first element

const turngreen=myul.querySelector('li');//we storing that element in turngreen

turngreen.style.backgroundColor="red";//after that we apply style method




//for queryselectorAll

const tempLiLIst=document.querySelectorAll('li')

tempLiLIst
NodeList(4) [li, li, li, li]


tempLiLIst.style.color="green";//it doesnot work because nodelist is like array but not an array
--->VM3558:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
    at <anonymous>:1:23
(anonymous) @ VM3558:1Understand this error


tempLiLIst[0].style.color="green";//this work perfectly


//we are applying foreach here

tempLiLIst.forEach(function(l){
    l.style.backgroundColor='green'
})



//*** converting nodelist or htmlcollection in array


//converting nodelist or htmlcollection in Array-->first we use "Array.from( htmlcollection/nodelist)". and in tthis first letter of array is always capital.

document.getElementsByClassName('list-item')
HTMLCollection []length: 0[[Prototype]]: 

const tempClassList=document.getElementsByClassName('list-item')
undefined

tempClassList
HTMLCollection []

//here we are converted the html collection in array
Array.from(tempClassList)


const myConvertedArray=Array.from(tempClassList);//here we are storing
*/ 