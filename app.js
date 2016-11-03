var Employee_1 = {
  name : "Karunakar",
  age: 30,
  salary : 10000,
  Address:{
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee_2 = {
  name : "Adithi",
  age: 27,
  salary : 10000,
  Address:{
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee_3 = {
  name : "Divakar",
  age: 25,
  salary : 10000,
  Address:{
    city: "Bangalore",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee_4 = {
  name : "Dharithri",
  age: 30,
  salary : 10000,
  Address:{
    city: "Mysore",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee_5 = {
  name : "Santosh",
  age: 30,
  salary : 10000,
  Address:{
    city: "Coorg",
    state: "Karnataka",
    pincode: 560061
  }
};

var Employee = [Employee_1, Employee_2, Employee_3, Employee_4, Employee_5]; //Arrays containing Employee Objects
console.log("Name: " + Employee[4].name); //Printing the 5th Employee Details.
console.log("Age: " + Employee[4].age);
console.log("Salary: " + Employee[4].salary);
console.log("City: " + Employee[4].Address.city);
console.log("State: " + Employee[4].Address.state);
console.log("PinCode: " + Employee[4].Address.pincode);
