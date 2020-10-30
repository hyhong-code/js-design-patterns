// Observer Pattern
// One (Subject) to many (Observers) relationship.
// Observers are functions that watch the Subject and wait for
//   some signal / trigger before they run

function Subject() {
  // Key property: an array of subscribers
  this.observers = [];
}

// Define Subject's methods in it's prototype
// 3 key methods: subscribe, unsubscribe, fire
Subject.prototype.subscribe = function (fn) {
  this.observers.push(fn);
};
Subject.prototype.unsubscribe = function (fn) {
  // note: === or == comparasion on objects compare memory location
  this.observers = this.observers.filter((observerFn) => observerFn !== fn);
};
Subject.prototype.fire = function () {
  this.observers.forEach((observerFn) => observerFn());
};

// Create a new subject to observe
const subject = new Subject();

// Create Observer functions
function func1() {
  console.log("Observer func1 called!");
}
function func2() {
  console.log("Observer func2 called!");
}
function func3() {
  console.log("Observer func3 called!");
}

// Subscribe / unsubscribe
subject.subscribe(func1);
subject.subscribe(func2);
subject.subscribe(func3);
subject.unsubscribe(func2);

subject.fire();
/*
Subscriber func1 called!
Subscriber func3 called!
*/
