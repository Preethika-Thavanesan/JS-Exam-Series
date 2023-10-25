// 1
//  2
var person = {
    name: "Preethika",
    age: 22,
    introduceYou: function(){console.log("Hello, my name is " + this.name);}
}
person.introduceYou();

 // 3
 function greetStudent(student) {
    console.log("Hello " + student.name + " Welcome to the Coding School.");
  }
  var student = {
    name: "Preethika"
  };
  greetStudent(student);

// 4
console.log("Using dot notation:");
console.log("Name: " + person.name);
console.log("age: " + person.age);
console.log("Using bracket notation:");
console.log("Name: " + person["name"]);
console.log("age: " + person["age"]);

// 5
person.email = "preethikathavanesan@gmail.com";
console.log("email: " + person ["email"]);

// 6
delete person.email;
console.log(person);

// 7
if (person.hasOwnProperty('email')) {
    console.log("The 'email' property exists in the object.");
  } else {
    console.log("The 'email' property  doesn't exist in the object.");
  }

  //   8
var student = {
    name: "Preethika",
    age: 22,
  };
  var course = {
    courseName: "Full Stack Development Course",
  };
  var studentCourse = Object.assign({}, student, course);
  console.log(studentCourse);

  // 9
if (person.hasOwnProperty('address')) {
    console.log("Address is there");
  } else {
    console.log("Address not found");
  }

  // 10
var book = {
    title: "Cat Tn The Rain",
    author: "Earnest Hemingway",
    year: 1925
  };
  var bookJSON = JSON.stringify(book);
  console.log(bookJSON);

  // 11
var students = [
    { name: 'Preethi', age: 20, gpa: 3.5 },
    { name: 'Shanu', age: 21, gpa: 3.2 },
    { name: 'Kamshi', age: 15, gpa: 3.8 },
  ];
  console.log(students);