 
 const arr=[1,2,2,2,3,4,5]
 console.log(arr.length);
const newArr = arr.filter((num)=> num != 2);
newArr.push(8)
newArr.unshift(9)
let isArry = Array.isArray(newArr)
console.log(newArr)
console.log(isArry)

const numbers = [5, 12, 8, 20, 3, 15];
const newNum = numbers.filter((num) => num >= 10)
console.log(newNum)

const names = ["Ali", "John", "amna", "Sara", "Ahmed", "mike"];
const newNames = names.filter((name) => name.toUpperCase().startsWith("A"))
console.log(newNames)

const nums = [1, 3, 5, 8, 9, 12, 14, 15, 20];
const filteredNum = nums.filter((num) => num%5===0)
console.log(filteredNum)

const name = "hello"
// name.split('').reverse().join()
let reverseName= []
for(let i = name.length;  i >=0;   i--){
  
   reverseName.push(name[i])
}
  console.log(reverseName.join('')) 

 function vowels(text){
   const myVowels = ['a','e','i','o','u']
   const filteredtext = text.toLowerCase().split('').filter((n)=> !myVowels.includes(n))
   return  filteredtext.join('');
 }

console.log(vowels("Hello World"))

// for(let i = 0; i<=num ;i++){
//   arr.push(i)
//   console.log(arr) 
// }


function secretCode(text){
    let result = '';
  text.split('').forEach( char => {
   if(char >= 'a' && char <= 'z'){
     result += char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1);
   }
    else if(char >= 'A' && char <= 'Z'){
    result += char === 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1);
}
     else {
      result += char;
    }
  })
  return result;
}
console.log(secretCode("abc ABC #$"));


function decodeCode(text){
  let result = ''
  text.split('').forEach( char => {
    if (char >= 'a' && char <= 'z') {
      result += char === 'a' ? 'z' : String.fromCharCode(char.charCodeAt(0) - 1);
    } else if (char >= 'A' && char <= 'Z') {
      result += char === 'A' ? 'Z' : String.fromCharCode(char.charCodeAt(0) - 1);
    } else {
      result += char;
    }
  })
  return result;
}
console.log(decodeCode("abc ABC #$"));
