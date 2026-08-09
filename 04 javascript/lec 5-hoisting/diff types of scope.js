// var d = 10
// console.log(d)
// debugger
// let name = Dev;

// console.log(name);

//local scope  & block scope

//local scope
// debugger    
// function word(){
//     var place = "BBSR"
//     console.log(place)
// }
// word()


//block scope
// debugger   
// if (true){
// var key = 10
// let word = 15

// console.log(key)
// console.log(word)
// }
// console.log(key)
// console.log(word)


//lexical scope ..//closure..................................
function fun1(){
    debugger 
    let x = 20
    console.log(x)

    function fun2(){
        let y = 30
        console.log(y)
        console.log("value of x inside nested function", x)

        function fun3(){
            console.log("value of y inside fun3",y)
             console.log("value of y inside fun3",x)

              console.log("value of y inside fun3",)
             console.log("value of y inside fun3",x)
        }
    console.log("Before calling fun3")
    fun3()
    console.log("After calling fun3")
}
console.log("Before calling fun2")
fun2()
console.log("After calling fun2")
    }


fun1()



