const Employee = require('./Employee');

// TODO: Create a `Car` class that extends the `Vehicle` class
class Engineer extends Employee {
  constructor(id, name, email, github) {
    
    super(id, name, email); 
    this.github = github;
  
  }


  getGithub(){
      return this.github;
  };

  getRole(){
    return 'Engineer';
  };
  
 

}

module.exports = Engineer;