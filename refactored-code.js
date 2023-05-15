var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name) {
        // Need to add parameter to the constructor because the driver code construct the object by passing string type of parameter
        this.name = name; // Need to set the value of the name property in the constructor, so that when we will call the printName function from the driver code, the name will be printed
    }
    Car.prototype.printName = function () {
        console.log("Car name: " + this.name);
    };
    Car.prototype.printAssembly = function () {
        console.log("The Car finishes assembly every Friday at 5pm.");
    };
    return Car;
}());
var TeslaCar = /** @class */ (function (_super) {
    __extends(TeslaCar, _super);
    function TeslaCar(name) {
        return _super.call(this, name) || this;
    }
    TeslaCar.prototype.generateAssemblyReports = function (reportFormat) {
        // Need to add reportFormat parameter to get the passing value of the function
        console.log("Generating assembly reports...");
        console.log("Exporting " + reportFormat + " format reports..."); // Need to use the parameter to print the report format of the function parameter
        console.log("Printing reports...");
    };
    return TeslaCar;
}(Car));
// Driver code
var myCar = new TeslaCar("Model_3");
myCar.printName();
myCar.generateAssemblyReports("Excel");
