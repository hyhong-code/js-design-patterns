// Iterator Pattern
// Useful when one wants to loop over some collection of objects
//   and access each one in certain order.

const collection = [1, "Denny", true, { GPA: 4.0 }];

function Iterator(collection) {
  // Key properties: collection, index
  this.collection = collection;
  this.index = 0;
}

// Put methods of Iterator into prototype
// Key methods: hasNext(), next()
// One can defined custom logic for hasNext(), and next()
Iterator.prototype = {
  hasNext() {
    return this.index < this.collection.length;
  },
  next() {
    return this.collection[this.index++];

    // Note:
    // this.index++ returns this.index, then increment it
    // ++this.index increments this.index, then returns it
  },
};

const iter = new Iterator(collection);

console.log(iter); // { collection: [ 1, 'Denny', true, { GPA: 4 } ], index: 0 }
console.log(iter.__proto__); // { hasNext: [Function: hasNext], next: [Function: next] }

while (iter.hasNext()) {
  console.log(iter.next());
}

/*
1
Denny
true
{ GPA: 4 }
*/
