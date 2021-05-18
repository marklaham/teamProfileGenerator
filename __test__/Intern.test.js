const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'email' string,and 'officeNumber' number", () => {
      const intern = new Intern(2,"Mark", "test@test.com", "carleton");

      // Verify that the new object has the correct properties
      expect(intern.id).toEqual(2 );
      expect(intern.name).toEqual("Mark");
      expect(intern.email).toEqual("test@test.com");
      expect(intern.school).toEqual( "carleton" );
    });

    // it("should throw an error if provided no arguments", () => {
    //     // Wrap the object initialization in a callback function that Jest will run
    //     const intern = () => new Intern();
  
    //     // Verify that an error was thrown in the callback function
    //     expect(intern).toThrow("command");
    //   });

  });

  describe("getRole", () => {
    it("should return the Role of Manager", () => {
      // Create new objects to test with
      const intern = new Intern(2,"Mark", "test@test.com", "carleton");
    

      // Verify that the child was added to the children array
      expect(intern.getRole()).toEqual("Intern");
      
    });
 
  });

  
});