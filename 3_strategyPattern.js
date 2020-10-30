// Strategy Pattern (Behavioral)
// Strategy allows one to encapsulate a group / family of
//   closely related functions (stragegies). Allows for swaping
//   between them very easy.

// Strategy constructors
function FedEx() {
  this.calculate = () => {
    // Fedex pricing...
    return 12.88;
  };
}

function UPS() {
  this.calculate = () => {
    // UPS pricing...
    return 4.88;
  };
}

function USPS() {
  this.calculate = () => {
    // USPS pricing...
    return 3.88;
  };
}

// Get instances of strategies
// They all have a .calculate() method
const fedex = new FedEx();
const ups = new UPS();
const usps = new USPS();

// Strategies design pattern
function Shipping() {
  this.strategy = null; // Store instances of strategy

  this.setStrategy = (strategy) => {
    this.strategy = strategy;
  };

  this.calculate = (package) => {
    return this.strategy.calculate(package);
  };
}

// Dummy package for DEMO
const package = { from: "Seattle", to: "Oregan", weight: 2.5 };

// Use Shipping strategies
const shippingStrategy = new Shipping();

// Use FedEx as strategy
shippingStrategy.setStrategy(fedex);
console.log(`FedEx strategy costs $${shippingStrategy.calculate(package)}`);

// Easily swap to USPS strategy
shippingStrategy.setStrategy(usps);
console.log(`USPS strategy costs $${shippingStrategy.calculate(package)}`);

// Easily swap to UPS strategy
shippingStrategy.setStrategy(ups);
console.log(`UPS strategy costs $${shippingStrategy.calculate(package)}`);

/*
FedEx strategy costs $12.88
USPS strategy costs $3.88
UPS strategy costs $4.88
*/
