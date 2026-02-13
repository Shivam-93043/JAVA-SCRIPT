// const hero=["thor","marvelman","spiderman"];
// const dc_heros=["superman","flash","batman"];
 // hero.push(dc_heros);//it is just copying the element
// console.log(hero);
// console.log(hero[3][1]);



//concat is used for adding two or more things and gives a new thing
// let newhero=hero.concat(dc_heros);
// console.log(newhero);


// //spread operator
// const all_new_heros=[...dc_heros,...hero]
// console.log(all_new_heros)



// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
// const real_another_array=another_array.flat(Infinity);//flat is used for extracting all data elements which are overlapped
// console.log(real_another_array);



// console.log(Array.isArray("Shivam"));//false
// console.log(Array.from("Shivam"));//it converts strings into array elements






//+++++++++++ = INTRESTING VALUES =+++++++++++

console.log(Array.from({name:"Shivam"}));//it always return empty array until you decleare that it converts keys to array or keysvalues to array


let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));//array of is directly convert the things into Array