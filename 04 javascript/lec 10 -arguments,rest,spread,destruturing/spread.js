// const numbers =[10,20,30,40,50]
// console.log(numbers)//rest
// console.log(...numbers) //spread

// const employees = [
//     {name: "Raj",age:25},
//     {name: "Ankit",age:25},
//     {name: "Sarit",age:25},
//     {name: "Renu",age:25},

// ]
// console.log(employees)
// console.log(...employees)

const myname = "Debubhai"
console.log(...myname)

//================copy arrays============
// const arr1 = [100, 200, 300]
// // const arr2 = arr1
// // arr2.push(400)
// // console.log(arr1)

// // const arr2 =[]
// // for (let i = 0;i< arr1.length;i++){
// //     arr2[i] = arr[i];
// // }

// const arr2 = [...arr1]

// arr2.push(500)
// console.log(arr1)
// console.log(arr2)

///===================merge arrays==========
// const arr1 = [10,20,30]
// const arr2 = [100,200,300]

// const arr3 = [...arr1,...arr2]
// console.log(arr3)

// const name = "javascript"
// const arr4 = [...arr1,...arr2,...name]
// console.log(arr4);

///=================copy objects==========
// const user = {
//     id:101,
//     name:"Aju",
//     age:23
// }

// const copyUser = {...user,phone:"9875321234"}
// console.log(copyUser);

// const copyUser1 = {}
// Object.assign(copyUser1,user)//target,source
// console.log(copyUser1);

const employee = {
    id:101,
    name: "Aju",
    age:23,
    address:{
        city:"BBSR",
        PIN:'751013'
    }
}

const copyEmployee = {...employee}
copyEmployee.address.city = 'CTC'
console.log(copyEmployee)