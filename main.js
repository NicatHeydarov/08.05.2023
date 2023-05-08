function Car (brand,marka,petrol) {
    this.brand = brand
    this.marka= marka
    this.petrol=petrol
  
  
  Car.prototype.charging = function (amount) {
    console.log(`is charging petrol.`)
    this.petrol += amount
  }
  
 
  
  Car.prototype.driving = function (length) {
    console.log(`car gasoline is running low.`)
    this.petrol -= length
  }

  Car.prototype.stop = function (length) {
    console.log(`${this.brand}  is stoping.`)
    this.petrol = length
  }

}
  
const mercedes= new Car("mercedes","s-class",10)
console.log(mercedes.petrol);
mercedes.charging(10);
console.log(mercedes.petrol);
mercedes.stop()
console.log(mercedes.stop);
  

