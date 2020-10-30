// Visitor Pattern
// Allows one to add functionalities / behaviors to an object (receiver)
//   without actually changing the receiver itself. The extended
//   functionalities are kept on a `visitor` object.
// The receiver object must expose some kind of `accept` method to
//   provide visitor object access.

function Person(name, salary) {
  this.name = name;
  this.salary = salary;
}

Person.prototype.getSalary = function () {
  return this.salary;
};
Person.prototype.setSalary = function (salary) {
  this.salary = salary;
};

// `accept` method to expose information to visitor
// Give visitor access to self
Person.prototype.accept = function (visiterFn) {
  visiterFn(this);
};

const denny = new Person("Denny", 60000);
console.log(denny.getSalary()); // 60000

// Define a visitor
function raise(person) {
  person.salary = person.salary * 2;
}

// Use the visitor
denny.accept(raise);
console.log(denny.getSalary()); // 12000
