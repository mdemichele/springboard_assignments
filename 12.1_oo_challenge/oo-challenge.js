// Part One 
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  honk() {
    return "Beep.";
  }
  
  toString() {
    return `The vehicle is a ${make} ${model} from ${year}.`;
  }
}

// Part Two 
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// Part Three 
class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  
  revEngine() {
    return "VROOM!!";
  }
}

// Part Four 
class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }
  
  add(newVehicle) {
    // If garage capacity is full
    if (this.vehicles.length >= capacity) {
      return "Sorry, we're full.";
    }
    
    // Only add to vehicle array if argument is an instance of vehicle 
    if (newVehicle instanceof Vehicle) {
      this.vehicles.push(car);
      return "Vehicle in the garage!";
    } else {
      "Only vehicles are allowed in here!";
    }
  }
}