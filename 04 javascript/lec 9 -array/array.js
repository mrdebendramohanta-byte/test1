// const s1 = "amit"
// const s2 = "ankit"
// const s3 = "asit"

// const {arr = ["amit", "ankit", "asit"]
// console.log(arr)

// // console.log(arr[0]) 
// // console.log(arr[1]) 
// // console.log(arr[2]) 

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// console.log(arr[4]) // undefined

// arr[10] = "sambit"
// console.log(arr)


//=================Array Methods====================>>>
const fruits = ["Apple", "Banana", "Mango"];
fruits.push("Orange","Grape","Cherry"); // Add an element at the end
console.log(fruits);

fruits.pop(); // Remove the last element
console.log(fruits);

fruits.shift(); // Remove the first element
console.log(fruits);

fruits.unshift("Pineapple"); // Add an element at the beginning
console.log(fruits);

console.log(fruits.includes("Apple",0)); // Find the index of an element
console.log(fruits.includes("Apple", 2)); // Check if an element exists at a specific index

// let x = fruits.indexOf("Mango"); // Find the index of an element
// if(x>=0){
//     fruits[x] = "kiwi"; // Modify an element at a specific index
// }
// console.log(fruits);

//step 1: check banana is present or not
if(fruits.includes("Banana")){
    //step 2 :if exist then find the index of banana
    const index = fruits.indexOf("Banana");
    //step 3 :then update the value of banana to kiwi
    fruits[index] = "kiwi"; // Modify an element at a specific index
    console.log(fruits);
}else{
    // step 4 : if not exist then do nothing
}
   
console.log(fruits);

fruits.push('mango', 'orange'); // Add an element at the end
console.log(fruits);
console.log("last index of mango is : ",fruits.lastIndexOf("mango")); // Find the last index of an element

console.log(fruits.slice(0, 3)); // Get a portion of the array (from index 0 to 3)
console.log(fruits.slice(2, 5)); // Get a portion of the array (from index 2 to 5)
console.log(fruits.slice(2)); // Get a portion of the array (from index 2 to the end)
console.log(fruits.slice()); // Get a portion of the array (from index 0 to the end)

fruits.splice(2, 4); // Remove an element at a specific index
console.log("after splice : ",fruits);

fruits.slice(2, 3, "cherry")
console.log("after slice2 : ",fruits);

const numbers = [10, 20, 30]
const fruitsnumbers = fruits.concat(numbers); // Concatenate two arrays
console.log("fruits with numbers: ",fruitsnumbers);

const fruitsString = fruits.join("-"); // Convert an array to a string
console.log("fruits as string: ",fruitsString);

fruits.reverse(); // Reverse the order of elements in an array
console.log("fruits after reverse: ",fruits);

fruits.push(57,28,36,22); // Add numbers to the array
fruits.sort(); // Sort the elements of an array in ascending order
console.log("fruits after sort: ",fruits);

const arr = [10, 20, 30, 40, 5];
arr.sort(xyz)
arr.sort((a, b) => a - b); // Sort the elements of an array in ascending order
console.log("arr after sort: ",arr);

