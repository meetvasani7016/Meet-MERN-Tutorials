// 1. Class Blueprint Definition
class Vehicle {
  constructor(brand, topSpeed) {
    this.brand = brand;
    this.topSpeed = topSpeed;
  }

  // Method (available to all instances)
  describe() {
    return "This is a " + this.brand + " with top speed of " + this.topSpeed + " km/h.";
  }

  // Static Method (utility function tied to class template itself)
  static compareSpeeds(v1, v2) {
    return v1.topSpeed > v2.topSpeed ? v1.brand : v2.brand;
  }
}

// 2. Class Inheritance (Subclass copying parent structure)
class Bike extends Vehicle {
  constructor(brand, topSpeed, hasGears) {
    super(brand, topSpeed); // super() calls parent vehicle constructor
    this.hasGears = hasGears; // extra property
  }

  // Method Overriding (updates parent describe method)
  describe() {
    return super.describe() + " Gears present: " + this.hasGears;
  }
}

// 3. Instantiation (Creating objects using the blueprint)
let myBike = new Bike("Trek", 45, true);
console.log(myBike.describe()); // "This is a Trek with top speed of 45 km/h. Gears present: true"

let car1 = new Vehicle("Toyota", 180);
let car2 = new Vehicle("Tesla", 240);
console.log("Faster vehicle:", Vehicle.compareSpeeds(car1, car2)); // "Tesla"
