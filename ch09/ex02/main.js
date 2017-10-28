// 9.2.2
// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     this._userGears = ['P', 'N', 'R', 'D'];
//     this._userGear = this._userGears[0];
//   }

//   get userGear() {
//     return this._userGear; 
//   }
//   set userGear(value) {
//     if(this._userGears.indexOf(value) < 0) {
//       throw new Error(`ギア指定が正しくない:${value}`);
//     }
//     this._userGear = value;
//   }

//   shift(gear) {
//     this.userGear = gear;
//   }
// }

// const car1 = new Car("Tesla", "Model 5");
// const car2 = new Car("Mazda", "3i");
// console.log(car1);
// console.log(car2);

// car1.shift('D');
// car2.shift('R');

// console.log(car1.userGear);
// console.log(car2.userGear);

// car1.userGear = "X";


// 9.2.5
// class Car {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     this.vin = Car.getNextVin();
//   }

//   static getNextVin(){
//     return Car.nextVin++;
//   }

//   static areSimilar(car1, car2) {
//     return car1.make === car2.make && car1.model === car2.model;
//   }

//   static areSame(car1, car2) {
//     return car1.vin === car2.vin;
//   }
// }
// Car.nextVin = 0;

// const car1 = new Car("Tesra", "Model S");
// const car2 = new Car("Mazda", "3i");
// const car3 = new Car("Mazda", "3i");

// console.log(car1.vin);
// console.log(car2.vin);
// console.log(car3.vin);

// console.log(Car.areSimilar(car1, car2));
// console.log(Car.areSimilar(car2, car3));
// console.log(Car.areSame(car2, car3));
// console.log(Car.areSame(car2, car2));


// 9.2.6
class Vehicle {
  constructor() {
    this.passengers = [];
    console.log("Vehicleが生成された");
  }

  addPassenger(p) {
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor() {
    super();
    console.log("Car が生成された");
  }

  deployAirbags() {
    console.log("バーンッ！");
  }
}

const v = new Vehicle();
v.addPassenger("太郎");
v.addPassenger("花子");
console.log(v.passengers);

const c = new Car();
c.addPassenger("景子");
c.addPassenger("ミドリ");
console.log(c.passengers);
c.deployAirbags();