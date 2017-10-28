class Car {
  constructor() {
  }
}

class InsurancePolicy {
}

function makeInsurable(o) {
  o.addInsurancePolicy = function(p) {
    this.insurancePolicy = p;
  }

  o.getUnsurancePolicy = function() {
    return this.insurancePolicy;
  }

  o.isInsured = function() {
    return !!this.insurancePolicy;
  }
}

// const car1 = new Car();
// makeInsurable(car1);
// console.log(car1.isInsured());
// car1.addInsurancePolicy(new InsurancePolicy());
// console.log(car1.isInsured());

// makeInsurable(Car.prototype);

// const car1 = new Car();
// console.log(car1.isInsured());
// car1.addInsurancePolicy(new InsurancePolicy());
// console.log(car1.isInsured());

// const car2 = new Car();
// console.log(car2.isInsured());
// car2.addInsurancePolicy(new InsurancePolicy());
// console.log(car2.isInsured());

const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

function makeInsurable(o) {
  o[ADD_POLICY] = function(p) {
    this[_POLICY] = p;
  }

  o[GET_POLICY] = function() {
    return this[_POLICY];
  }

  o[IS_INSURED] = function() {
    return !!this[_POLICY];
  }
}

makeInsurable(Car.prototype);

const car1 = new Car();
console.log(car1[IS_INSURED]());
car1[ADD_POLICY](new InsurancePolicy());
console.log(car1[IS_INSURED]());

const car2 = new Car();
console.log(car2[IS_INSURED]());
car2[ADD_POLICY](new InsurancePolicy());
console.log(car2[IS_INSURED]());