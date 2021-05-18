//const { test } = require("@jest/globals");
//const { getMaxListeners } = require("node:process");
//const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'email' string,and 'officeNumber' number", () => {
      const manager = new Manager(2,"Mark", "test@test.com", 4);

      // Verify that the new object has the correct properties
      expect(manager.id).toEqual(2 );
      expect(manager.name).toEqual("Mark");
      expect(manager.email).toEqual("test@test.com");
      expect(manager.officeNumber).toEqual(4);
    });

    // it("should throw an error if provided no arguments", () => {
    //     // Wrap the object initialization in a callback function that Jest will run
    //     const ma = () => new Manager();
  
    //     // Verify that an error was thrown in the callback function
    //     expect(ma).toThrow();
    //   });

  });

  describe("getRole", () => {
    it("should return the Role of Manager", () => {
      // Create new objects to test with
      const manager = new Manager(2,"Mark", "test@test.com", 4);
    

      // Verify that the child was added to the children array
      expect(manager.getRole()).toEqual("Manager");
      
    });
 
  });

  
});