// OBEYKT GA OID masalalar

// 1-masala

// const person ={
// name: "Muhammadnur",
// age: 16,
// jobs : "student",

// }
// console.log(person);

// 2-misol
// const person ={
// name: "Muhammadnur",
// age: 16,
// jobs : "student",

// };
// person.name= "Vali"
// console.log(person);

// 3-misol

// const person = {
//   name: "Muhammadnur",
//   age: 16,
//   jobs: "student",
// };
// person.location = "Fergana";
// console.log(person);

// 4-misol

// const person = {
//   name: "Muhammadnur",
//   age: 16,
//   jobs: "student",
// };
// person.location = "Fergana";
// delete person.jobs;
// console.log(person);

// 5-misol

// const person = {
//   name: "Muhammadnur",
//   age: 16,
//   jobs: "student",

//   telefon : {
//     mobil : 930400726,
//     uy: 53,
//   }
// };

// console.log(person);

// 6-misol

// 7-misol

// const person = {
//   name: "Muhammadnur",
//   age: 16,
//   jobs: "student",
// };
// console.log(person.age);

//  8-misol

// function person(name, age, jobs) {
//   return { name: name, age: age, jobs: jobs };
// }
// const peerson = person("muhammadnur", 16, "student");
// console.log(peerson);

//    Umumlashtiruvchi masalalar

// 1-masala

// const str = "123333444";
// function findstring(str) {
//   let counter = 0;
//   for (let num of str) {
//     if (num === "3") {
//       counter++;
//     }
//   }
//   return counter;
// }
// console.log(findstring(str));

// 2-misol
// let arr =1;
// function tonelement(arr, n){
//     let ar=[]
//     for (let a=arr; a<n ; a++){
//         if(a%2==1){
//             ar.push(a)
//         }
//     }
//     return ar;

// }
// console.log(tonelement(arr, 100));

// 3-misol

// const str = " he*llo*world"
// function  deleteasteriks(str){
//     return str.replace(/\*/g, '')
// }
// console.log(deleteasteriks(str));

// 4-misol

// const string = "salom"
// function removesecondelement(string){
//     let res = string.slice(0,1)+string.slice(2)

//     return res;
// }
// console.log(removesecondelement(string));

// 5-misol

// let max;
// function maxarr (arr){

// }

// 6-misol

// const str= 'salom'
// function tomassivelement(str){

// let res= str.split('')
// return res;
// }
// console.log(tomassivelement(str));

// 7-misol

// let arr = ['s', 'a', 'l', 'o', 'm']
// function tostringelement(arr){
//     let res = arr.join('')
//     return res;
// }
// console.log(tostringelement(arr));

// 8-misol

// const str = "hello world"
// function findword(str,words){
//     let res= str.includes(words);
//     return res;
// }
// console.log(findword(str, "world"));

// 9-misol

// 10-misol

// 11-Misol

// const str = [ 'olma', 'anor', 'behi', 'shaftoli']

// function findlengthelement(str){

//     let  long = str[0]
//     for(let i =1; i<str.length; i++){
//          if(str[i].length>long.length){
//             long= str[i];
//          }
//     }
//     return long;
// }
// console.log(findlengthelement(str));

// 12-misol

// let arr = ['s', 'a', 'l','o','m']
// function reverseelement(arr){
// let res = arr.reverse();
// return res.join('')
// }
// console.log(reverseelement(arr));

// 13-misol

// const str = "salom qalaysiz"

// function aastr (str){
//     let res=  str.split(' ')
//     return res;
// }
// console.log(aastr(str));

// 14-misol

// const str = "salom salom alik ";
// function reversestar(str) {
//   let words = str.split(" ");

// let reversestr = words.reverse()
//   let result = reversestr.join(' ');
//   return result;
// }
// console.log(reversestar(str));


// 15-misol

// let arr =[ 'salom','xayr']
// function newStr(arr){
// let res = arr.join(' ')

// }

// 19-misol
// const str = "salom xayr";
// function newstring(str) {
//   let res = str.split(" ");
//   return res.reverse();
// }
// console.log(newstring(str));


// 20-misol
// const str = "salom xayr";
// // function newstring(str) {
//   let res = str.split(" ");
//   return res.reverse();
// }
// console.log(newstring(str));