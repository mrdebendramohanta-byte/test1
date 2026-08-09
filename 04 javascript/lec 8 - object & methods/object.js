// const user = {
//      firstname: "Robin",
//      lastname: "Hood",
//      age : 22,
//      isGraduated: true,
//      'address': 'BBSR',
//      'course-fee': 10000,
//      greet: function(){
//          console.log("Robin says Hello!");
//          console.log("My full name is",this.fullname );
//      },
//     hello: () =>{
//         console.log("Hello Everyone!");
//     },
//     add: function(a,b){
//         return a+b;
//     }
// }

// // Extract complete object
// // console.log("user object", user);

// //extarct single values from onject
// console.log("First Name:", user.firstname);
// console.log("Last Name:", user.lastname);
// console.log("Full Name:", user.firstname , user.lastname);

// console.log("Age is:", user['age']);
// console.log(" Course Fee is:", user['course-fee']);

// console.log("fullname key is:",user.fullname); //undefined

// //Add/Update key to object
// user.fullname = "Robin Hood";
// user.isGraduated = false;

// console.log( user);

// user['Aadhar number'] = 3138455453;
// console.log(user);

// //access methods from object
// user.greet();
// user.hello();

// user.add(10,20);



//=================Nestaed Object=========================
// const employee = {
//     fullname:'Devraj singh',
//     age: 25,
//     address: {
//         city: 'BBSR',
//         state: 'Odisha',
//         pincode: 751007}







   const college = {
  name: "REC ",
  location: "Bhubaneswar",

  departments: {
    MCA: {
      HOD: "Dr.Arivind",

      classrooms: {
        Room306: {
          floor: 4,

          students: [
            {
              id: 101,
              name: "Debendra",
              age: 22
            },
            {
              id: 102,
              name: "Sandeep",
              age: 23
            },
            {
              id: 103,
              name: "kanha",
              age: 21
            }
          ]
        }
      }
    }
  }
};

console.log(college);


// console.log(college.name); // REC 
// console.log(college.departments.MCA.HOD); // Dr.Arivind
// console.log(college.departments.MCA.classrooms.Room306.students[0].name); // Debendra

