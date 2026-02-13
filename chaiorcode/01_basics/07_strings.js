const name="shivam ";
const repocount=40;
console.log(name+repocount);
console.log(`Hello my name is ${name} abd my repo count is${repocount}`);




const gameName=new String('Shi-vam-sc-');//new way to create string
console.log(gameName[0]);// when we use new keyword then this function will come automatically
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());//to convert in upper case
console.log(gameName.length);//for knowing length
console.log(gameName.charAt(3));//at 3rd index which character is
console.log(gameName.indexOf('h'));//h is of which index
 const newString= gameName.substring(0,4);//last will not be included just like no4
console.log(newString);

const anotherString= gameName.slice(-5);//slice can use negative value also and start from end at that criteria
console.log(anotherString);

const newString1="        hitesh     "
console.log(newString1);
console.log(newString1.trim());//it is used for throw extra space taken in any thing

const url= "https://skp2023@gmail.com/shivam%20pathak";
console.log(url.replace('%20','-'));//it replaces the special character from given string

console.log(url.includes('skp'));//it shows that ,that keyword is available or not

console.log(gameName.split("-"))