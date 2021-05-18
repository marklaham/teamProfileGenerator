const Employee = require('./Employee');

// TODO: Create a `Car` class that extends the `Vehicle` class
class Manager extends Employee {
  constructor(id, name, email, officeNumber) {
    
    super(id,name, email); 
    this.officeNumber = officeNumber;
  

  };

  getOfficeNumber() {
    return this.officeNumber;
  };

  getRole() {
      const role = 'Manager';
      return role;
    };


 

};

module.exports = Manager;