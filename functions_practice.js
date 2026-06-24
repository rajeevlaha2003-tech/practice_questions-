// // // // // // // // // // // // // // // //  use . filter method to print the numbers > 10 
// // // // // // // // // // // // // // // let arr = [1, 5, 8, 12, 15, 20];
// // // // // // // // // // // // // // // let wow = arr.filter(function(num){
// // // // // // // // // // // // // // //     if (num > 10){
// // // // // // // // // // // // // // //         return num;
// // // // // // // // // // // // // // //     }
// // // // // // // // // // // // // // // })

// // // // // // // // // // // // // // //use .reduce method to print the sum of the array 
// // // // // // // // // // // // // // let arr = [1,2,3,4,5];
// // // // // // // // // // // // // // let sum = arr.reduce(function(acc,num){
// // // // // // // // // // // // // //     return acc + num;
// // // // // // // // // // // // // // },0);


// // // // // // // // // // // // // // use . find to get the first number less than 10 ;

// // // // // // // // // // // // // let arr = [10 , 20 , 30 , 40 , 50 ];
// // // // // // // // // // // // // let first = arr.find(function(val){
// // // // // // // // // // // // //     return val === 20;
// // // // // // // // // // // // // })

// // // // // // // // // // // // // use . some to check if any student has scored below  35 .
// // // // // // // // // // // // let arr = [86,89,90,50,65];
// // // // // // // // // // // // let score = arr.some(function(val){
// // // // // // // // // // // //     return val < 60 ;
// // // // // // // // // // // // });

// // // // // // // // // // // // use .every to check if all the numbers are even 

// // // // // // // // // // // let num = [ 2, 4 ,7 , 6 ,9 ];
// // // // // // // // // // // let even = num.every(function(val){
// // // // // // // // // // //     return val%2==0;
// // // // // // // // // // // });

// // // // // // // // // // // destructure this array to get  first name and last name 
// // // // // // // // // // let fullname = ['harsh' , 'malhotra'];
// // // // // // // // // // let [first_name , last_name] = fullname;


// // // // // // // // // //write a code to convert the string to uppercase 
// // // // // // // // // function toCase(str){
// // // // // // // // //     return str +'-'+ str.toUpperCase();

// // // // // // // // // }
// // // // // // // // // let result = toCase('hello');


// // // // // // // // // create an object  for a student  name , age , and is Enrolled .

// // // // // // // // let obj ={
// // // // // // // //     Name : 'harsh',
// // // // // // // //     age :22,
// // // // // // // //     isEnrolled : true 
// // // // // // // // };


// // // // // // // //can a object key be a number or boolean ? try this 

// // // // // // // const obj = { 
// // // // // // //     true : 'yes',
// // // // // // //     42 : 'answer'};

// // // // // // //given a dynamic key let key = 'age' , how will you access  user[key]?

// // // // // // let key = "age ";

// // // // // // const user ={
// // // // // //     age : 26,
// // // // // // }

// // // // // //from the objects below , print the latitude 

// // // // // const locations  = {
// // // // //     city : "Bhopal",
// // // // //     coordinates : {
// // // // //         lat : 23.2599,
// // // // //         long : 77.4126,
// // // // //     },
// // // // // };

// // // // // what will happen   if coordinates   is missing ? how can you prevent errors ?
// // // // const locations  = {
// // // //     city : "Bhopal",
// // // //     coordinate : {
// // // //         lat : 23.2599,
// // // //         long : 77.4126,
// // // //     },
// // // // };

// // // // let {city , coordinates : {lat , long} = {} } = locations;


// // // // use for in  to log  all keys  in this object 

// // // const course  = {
// // //      title  : "javascript ", 
// // //      duration :  " 4 weeks "
// // // }

// // // for(let key in course){
// // //     console.log(key);
// // // }  

// // //this keyword is used to create a new object with the same properties as the original object but with some modifications.

// // let place ={
// //     PlaceName : 'office',
// //     behaviour : 'Professional',
// //     sayHello: function(){
// //         const insidePlace = {
// //             PlaceName : 'Meeting Room',
// //             behaviour : 'Formal',
// //             sayHi :() => {
// //                 console.log(this.PlaceName);
// //             }

// //         }
// //         insidePlace.sayHi();
// // }
// // }
// // place.sayHello();



// function Person(name) {
//     this.name = name;
// }

// Person.prototype.greet = function () {
//     console.log(`Hello, I am ${this.name}`);
// };

// function Student(name, course) {
//     Person.call(this, name);
//     this.course = course;
// }

// // Inherit Person's prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.study = function () {
//     console.log(`${this.name} is studying ${this.course}`);
// };

// const s1 = new Student("Rajeev", "ECE");

// s1.greet();
// s1.study();

function Vehicle(brand) {
    this.brand = brand;
}

Vehicle.prototype.start = function () {
    console.log("Vehicle Started");
};

function Car(brand, model) {
    Vehicle.call(this, brand);
    this.model = model;
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.drive = function () {
    console.log("Driving...");
};

function ElectricCar(brand, model, battery) {
    Car.call(this, brand, model);
    this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);

ElectricCar.prototype.charge = function () {
    console.log("Charging...");
};

const tesla = new ElectricCar("Tesla", "Model 3", "75kWh");

tesla.start();
tesla.drive();
tesla.charge();


// // // // // what will happen   if coordinates   is missing ? how can you prevent errors ?
// // // // const locations  = {
// // // //     city : "Bhopal",
// // // //     coordinate : {
// // // //         lat : 23.2599,
// // // //         long : 77.4126,
// // // //     },
// // // // };


// hi im rajeev an ece graduate and i want to learn web development and i have a good understanding of javascript and i want to learn react js and node js and i want to become a full stack developer and i want to work in a good company and i want to learn new technologies and i want to grow my career in web development.