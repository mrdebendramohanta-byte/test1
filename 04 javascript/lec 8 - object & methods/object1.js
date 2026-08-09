const user = {
    name: "Devraj Singh",
    age: 25,

}

//user = {} //error: Assignment to constant variable.

/**
 * const onject
 * 1.existing key can be updated
 * 2.existing key can be deleted
 * 3.new keys can be added
 */
user.name = "Debendra"; 
console.log(user); 

delete user.age;
console.log(user);

user.address = "Bhubaneswar";
console.log(user);

/**
 * object .seal()
 * 1.existing key can be updated
 * 2.existing key can not be deleted
 * 3.new keys can not be added
 */

const employee = {
    name: "Debnedra",
    age:21
}

Object.seal(employee);
console.log(employee);

employee.name = "Sandeep";
console.log(employee);
// employee.name = "Sandeep";
delete employee.name
console.log(employee);

employee.address = "Bhubaneswar";
console.log(employee);

/**
 * object .freeze()
 * 1.existing key can not be updated
 * 2.existing key can not be deleted
 * 3.new keys can not be added
 */

const student = {
    name: "Debnedra",
    age:21
}

Object.freeze(student);
console.log(student);

student.name = "Sandeep";
console.log(student);
// student.name = "Sandeep";
delete student.name
console.log(student);

student.address = "Bhubaneswar";
console.log(student);

