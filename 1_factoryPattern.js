// Factory Pattern (Creational)
// - An object that menufactures other objects. Factory provides a
//   centralized object creation logic.

// Provides object creation machenisims that promote flexibility
//   and reusability. Especially in situations where one needs
//   to create many different types of many different objects.

// Types of objects
function Developer(name) {
  this.name = name;
  this.type = "Developer";
}

function Tester(name) {
  this.name = name;
  this.type = "Tester";
}

function Marketer(name) {
  this.name = name;
  this.type = "Marketer";
}

function Accountant(name) {
  // `this` starts off as {}, comes from the `new` call
  this.name = name;
  this.type = "Accountant";
}

// Factory
function EmployeeFactory() {
  // Factory in the very least must have a `create` method.
  this.create = (name, type) => {
    switch (type) {
      case "D":
        return new Developer(name); // Centralize the `new` calls
      case "T":
        return new Tester(name);
      case "M":
        return new Marketer(name);
      case "A":
        return new Accountant(name);
      default:
        throw new Error(`Type "${type}" not supported.`);
    }
  };
}

// Creates an instance of factory
const employeeFactory = new EmployeeFactory();

// Mock DB
const employeesDB = [];

// Create employees and store into DB
employeesDB.push(employeeFactory.create("Denny", "D"));
employeesDB.push(employeeFactory.create("Sam", "D"));
employeesDB.push(employeeFactory.create("John", "T"));
employeesDB.push(employeeFactory.create("Lance", "T"));
employeesDB.push(employeeFactory.create("Jamie", "M"));
employeesDB.push(employeeFactory.create("Tim", "A"));

employeesDB.map((employee) => say.call(employee)); // Provies `employee` as context in .call()
function say() {
  console.log(`Hi, I am ${this.name} and I am a ${this.type}!`);
}

/*
Hi, I am Denny and I am a Developer!
Hi, I am Sam and I am a Developer!
Hi, I am John and I am a Tester!
Hi, I am Lance and I am a Tester!
Hi, I am Jamie and I am a Marketer!
Hi, I am Tim and I am a Accountant!
*/
