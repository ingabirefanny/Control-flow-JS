//Q1
//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
function changeArray(arr) {
    let numericArray = arr.map(Number);
    let multipliy = numericArray.slice(0, 4).map((num) => num * num);
    let add = numericArray.slice(-2).map((num) => num + 10);
    let resultArray = [...multipliy, ...add];
    return resultArray;
}
let numbers= [50, 20, 30, 70, 10, 40];
let result = changeArray(numbers);
console.log(result);

//Q2
//Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = 0; 

while (i < arrNum.length) {
    if (i === 4) {
        break;
    }
    console.log(`Item: ${arrNum[i]}`);
    i++; 
}
//Q3
//Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']
function arrstring(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        if (i === 2) {
            continue;
        }
        console.log(`Fruit: ${fruits[i]}`);
    }
}
let fruits = ['apple', 'plum', 'banana', 'strawberries', 'kiwi'];
arrstring(fruits);

//Q4
//Write a function that accepts an array of strings and console.logs each element using a for loop.
function stringArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Element: ${arr[i]}`);
    }
  }
    let girls = ["fanny", "diane", "faith"];
  stringArray(girls);

  //Q5
  //Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
  function reverseString(str) {
    let reversedstr = '';
    let i = str.length - 1;
    while (i >= 0) {
      reversedstr += str[i];
      i--;
    }
    return reversedstr;
  }
    let strg = "Love";
  let reversedString = reverseString(strg);
  console.log("Reversed string:", reversedString);
  
  
