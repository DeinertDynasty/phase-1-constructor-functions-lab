// Define the Scooter constructor function
function Scooter(year, color, model) {
    this.year = year;
    this.color = color;
    this.model = model;
  }
  
  // Define the Driver constructor function
  function Driver(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
  }
  
  // Define the PickupLocation constructor function
  function PickupLocation(address, city) {
    this.address = address;
    this.city = city;
  }
  
  // Create a new Scooter instance
  let myScooter = new Scooter(2023, 'red', 'scooter model 1');
  
  // Create a new Driver instance
  let myDriver = new Driver('John Doe', 30, '5 years');
  
  // Create a new PickupLocation instance
  let myPickupLocation = new PickupLocation('123 Main St', 'New York City');
  
  // Now you can access the properties of these instances
  console.log(myScooter.year); // Outputs: 2023
  console.log(myDriver.name); // Outputs: 'John Doe'
  console.log(myPickupLocation.city); // Outputs: 'New York City'
  