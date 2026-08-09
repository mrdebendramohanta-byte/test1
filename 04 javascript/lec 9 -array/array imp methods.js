// const numbers = [10, 20, 30]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// console.log("hello");

// numbers.forEach(function printNumbers(value, idx, arr){
//     console.log("value is", value, "at index", idx, "of array", arr);
// })

// numbers.forEach(printNumbers)
// function printNumbers(value, idx, arr){
//     console.log("value is", value, "at index", idx, "of array", arr);
// }

// const printNumbers = function(value, idx, arr){
//     console.log("value is", value, "at index", idx, "of array", arr);
// }
// numbers.forEach(printNumbers)

// numbers.forEach(function(value, idx, arr){
//     console.log("value is", value, "at index", idx, "of array", arr);
// })

// numbers.forEach((value, idx, arr) => {
//     console.log("value is", value, "at index", idx, "of array", arr);
// } )

//===================map() method====================>>>
// const numbersIncresedByTwo = numbers.map((value, idx, arr) => {
//     console.log("value is", value, "at index", idx, "of array", arr);
//     return value + 2;
// });
// console.log("numbersIncresedByTwo : ", numbersIncresedByTwo);

// const squareOfNumbers = numbers.map((value) => {
//     return value * value;
// });
// console.log("squareOfNumbers : ", squareOfNumbers);

// const cubeOfNumbers = numbers.map((value) => value * value * value);
// console.log("cubeOfNumbers : ", cubeOfNumbers);

// const users = [
//     { id: 101, name: "Alice das", salary: 250000 },
//     { id: 102, name: "Bob sethi", salary: 300000 },
//     { id: 103, name: "Charlie sahoo", salary: 350000 },
//     { id: 104, name: "David putra", salary: 400000 }
// ]

// // mapvalue = users.map((value) => {
// //     return{
// //         id: value.id,
// //         firstname: value.name.split(" ")[0],
// //         bonus: value.salary * 0.10
// //     };
// // });
// const mapvalue = users.map(user => ({
//     id: user.id,
//     firstname: user.name.split(" ")[0],
//     bonus: user.salary * 0.10
// }));
// console.log("mapvalue : ", mapvalue);


// //===================filter() method====================>>>
//   numbers = [10, 11, 20, 21, 30, 31]

//   const divisiblebyten = numbers.filter((value, idx, arr) => {
//     console.log("value is", value, "at index", idx, "of array", arr);

//     return value % 10 === 0;
//   })
//   console.log("divisible By ten : ", divisiblebyten);
// divisiblebyten
  
// //Q-1
// const users = [
//     { id: 1, name: "Amit", isActive: true},
//     { id: 2, name: "Rahul", isActive: false},
//     { id: 3, name: "Neha", isActive: true}

// ];

// users.filter(user => user.isActive)
// //Q-2
// users.map(user => user.name)
// //Q-3
// const products = [
//     {id: 1, name: "laptop",price:50000 },
//      {id: 2, name: "Mobile",price:20000 },
//       {id: 3, name: "Tablet",price:30000 },

// ];

// products.filter(product => product.price > 25000).map(product => product.name)
// products.filter(product => product.price > 25000)

// const filterproducts = products.filter(product => product.price > 25000)

// filteredproducts.map(product => product.name)


// const students =[
//     {student:"Amit",marks: 80},
//     {student:"Rahul",marks: 90},
//     {student:"Neha",marks: 70},
//     {student:"Rohit",marks: 60},
// ] 
// students.map(student)

//=================some() method====================>>>
// const numbers = [10, 20, 30, 40, 50];

// const isAnyNumberGreaterThan30 = numbers.some((value) => {
//     return value > 30;
// });
// console.log("isAnyNumberGreaterThan30 : ", isAnyNumberGreaterThan30);
//=================find() method====================>>>
// const numbers = [10, 20, 30, 40, 50,41];

// const number = numbers.find(num => num == 41)
// console.log("is 41 found", number);

// const numberidx = numbers.findIndex(num => num == 41);
// console.log("Index of 41 : ", numberidx);

// const products = [
// { id: 1, name: "laptop", price: 50000 },
// { id: 2, name: "Mobile", price: 20000 },
// { id: 3, name: "Tablet", price: 30000 }
// ]

// const product = products.find(product => product.id ===2 );
// console.log("Product with ID 2 : ", product);



// const students =[
//     {name:"Amit",marks: 80},
//     {name:"Rahul",marks: 90},
//     {name:"Neha",marks: 70},
//     {name:"Cera",marks: 60},
// ] 
// const student = students.find(student => student.name == "cera");
// students.findIndex(student => student.name =='cera')

// const sum =numbers.reduce((prevVal, currVal, idx, arr)=>{
//  console.log(" previous value is", prevVal,"currrnt value is",currVal, "at index", idx, "of array", arr);
//     return prevVal+ currVal
// })

// console.log("/////////sum",sum)

// const order = [
//     {
//         id:101,
//         amount:2000,
//         status:"Delivered"
//     },
//      {
//         id:102,
//         amount:3000,
//         status:"pending"
//     },
//      {
//         id:103,
//         amount:4000,
//         status:"Delivered"
//     },
    
// ]

//1. find the orders whoose status is delivered
//  const filterorder = order.filter(order => order.status==Delivered)

// // filteredorder.map(order => order.Delivered)
// const deliveredorders = order.filter(order => order.status ==='Delivered')
// console.log("//////delivered orders",deliveredorders)

// //2. merge the delivered orders amount to get the total sale
// const totalsale = deliveredorders.reduce((prev, curr)=>{
//     console.log(".....prev",prev ,"....curr",curr)
//     return prev.amount+curr.amount
// },0)
// console.log("///////total sale",totalsale)


const users = [
    {
        id:1,
        name:"Sarthak",
        age:20
    },
     {
        id:2,
        name:"Amit",
        age:26
    },
 {
        id:3,
        name:"Nikhil",
        age:28
    },
]
// find the average age of users
const avgage = users.reduce((prev,curr)=>{
    console.log (prev,curr)
    return prev+curr.age
},0)
console.log("///total age",avgage)
console.log("///avg age",avgage/users.length)


//for each(nothing) = only retrive & print
//map(new array) = to tarnsform the array & return a new modified array
//filter(new array) = to filter elements based on some condition
//some(boolean ) = to check is there any element available who satisfies the condition 
//every(boolean) = to check is all the elements  satisfies the condition or not
//find(a particular element)= to find a single a particular element
//find index()