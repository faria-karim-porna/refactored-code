class Car {
  name: string; // Need to define the property type
  constructor(name: string) {
    // Need to add parameter to the constructor because the driver code construct the object by passing string type of parameter
    this.name = name; // Need to set the value of the name property in the constructor, so that when we will call the printName function from the driver code, the name will be printed
  }

  printName() {
    console.log("Car name: " + this.name);
  }

  printAssembly() {
    console.log("The Car finishes assembly every Friday at 5pm.");
  }
}

class TeslaCar extends Car {
  constructor(name: string) {
    super(name); // Need to call the parent class constructor using super, so that we can use the printName function of the parent class from the driver code using the child class
  }

  generateAssemblyReports(reportFormat: string) {
    // Need to add reportFormat parameter to get the passing value of the function
    console.log("Generating assembly reports...");
    console.log("Exporting " + reportFormat + " format reports..."); // Need to use the parameter to print the report format of the function parameter
    console.log("Printing reports...");
  }
}

// Driver code
const myCar = new TeslaCar("Model_3");
myCar.printName();
myCar.generateAssemblyReports("Excel");
