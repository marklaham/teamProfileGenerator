const Employee = require("../lib/Employee");


describe("Employee", () => {
  describe("Initialization", () => {
    it("should create an object with 'id' number, 'name' string, 'email' string", () => {
      const emp = new Employee(2,"Mark", "test@test.com");

      // Verify that the new object has the correct properties
      expect(emp.id).toEqual(2 );
      expect(emp.name).toEqual("Mark");
      expect(emp.email).toEqual("test@test.com");
    });

    // it("should throw an error if provided no arguments", () => {
    //     // Wrap the object initialization in a callback function that Jest will run
    //     const em = () => new Employee();
  
    //     // Verify that an error was thrown in the callback function
    //     expect(em).toThrow();
    //   });

  });

  describe("getRole", () => {
    it("should return the Role of Employee", () => {
      // Create new objects to test with
      const em = new Employee(2,"Mark", "test@test.com");
    

      // Verify that the child was added to the children array
      expect(em.getRole()).toEqual("Employee");
      
    });
 
  });

  describe("getName", () => {
    it("should return the Name of employee", () => {
      // Create new objects to test with
      const em = new Employee(2,"Mark", "test@test.com");
    

      // Verify that the child was added to the children array
      expect(em.getName()).toEqual("Mark");
      
    });
 
  });

  describe("getId", () => {
    it("should return the Id of employee", () => {
      // Create new objects to test with
      const em = new Employee(2,"Mark", "test@test.com");
    

      // Verify that the child was added to the children array
      expect(em.getId()).toEqual(2);
      
    });
 
  });

  describe("getEmail", () => {
    it("should return the email of employee", () => {
      // Create new objects to test with
      const em = new Employee(2,"Mark", "test@test.com");
    

      // Verify that the child was added to the children array
      expect(em.getEmail()).toEqual("test@test.com");
      
    });
 
  });

  
});