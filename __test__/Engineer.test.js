const Engineer = require("../lib/Engineer");
//const engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'email' string,and 'gitHub' string", () => {
      const eng = new Engineer(2,"Mark", "test@test.com", "marklaham");

      // Verify that the new object has the correct properties
      expect(eng.id).toEqual(2 );
      expect(eng.name).toEqual("Mark");
      expect(eng.email).toEqual("test@test.com");
      expect(eng.github).toEqual( "marklaham" );
    });

    // it("should throw an error if provided no arguments", () => {
    //     // Wrap the object initialization in a callback function that Jest will run
    //     const eng1 = () => new Engineer();
    //   console.log(eng1);
    //     // Verify that an error was thrown in the callback function
    //     expect(eng1).toThrow();
    //   });

  });

  describe("getRole", () => {
    it("should return the Role of Engineer", () => {
      // Create new objects to test with
      const en = new Engineer(2,"Mark", "test@test.com", "marklaham");
    

      // Verify that the child was added to the children array
      expect(en.getRole()).toEqual("Engineer");
      
    });
 
  });

  
});