//functions declaration
//functions <>(list of params){}
function myFun(){
    console.log("Good Morning!!!")
}

// myFun()

function greet(name ='JT' , ){
    console.log("Good Morning", name,'!!!')
}

//greet("Debendra")
//greet(10)
// greet(true)
// greet()
//greet("sai",10)

// function addJTTag(name){
//     return "JT'ans" + name
// }
//  let updateName=addJTTag(" Debendra")
//  console.log(updateName)

//  function addclg(name){
//     return "clg name is " +name
//  }
//   let updateName=addclg(" REC")
//  console.log(updateName)

// function add(a,b){
//     return a+b 
// }
// let addition=add(5,6)
// console.log(addition)

//5-non parameterize funtion, paramiterize funtion  ,5-value return with parameterize

//non-parameterize function............................................

function run(){
    console.log("Running is good habit")
}
run()

function eat(){
    console.log("Eat healthy stay healthy")
}
eat()
 
function numAdd(){
    console.log(11+55)
}
numAdd()

function name(){
    console.log("Student name is :" +"Debendra"+" Mohanta")
}
name()

function  multiple(){
    console.log(5*6)
}
multiple()

function stringAdd(){
    console.log("7"+"8")
}
stringAdd()


//parameterize function................................

function student(name){
    console.log("my name is " + name);
}
student("Debendra")

function choice(Apple){
console.log(typeof(Apple))
}
choice("Apple")

function university(Name,place){
    console.log(Name + " is in " + place + " ")
}
university("BPUT","Raulkela")

//value return with parameterize.........................
function add(x , y){

    return x + y;
}
console.log(add(33, 55));

function marvel(hero1,hero2){
    return hero1 + " and " + hero2 + " are is Doomsday";
}

let hero = marvel("Thor", "Hulk");
console.log(hero)
    
function multiply(x , y){
    return x*y
}
let values = multiply(5,8)   
console.log(values)

function add(x , y){

    return x + y;
}
console.log(add("45", "66"));

