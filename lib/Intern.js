
const Employee = require('./Employee');

// TODO: Create a `Car` class that extends the `Vehicle` class
class Intern extends Employee {
  constructor(id, name, email, school) {
    
    super(id, name, email, school); 
    this.school = school;

  }

getSchool(){
        return this.school;
    };
    
getRole(){
        return 'Intern';
    };
 


}


module.exports = Intern;

