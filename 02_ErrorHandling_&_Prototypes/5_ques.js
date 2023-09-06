/*
5. Implementing a Person Class with Default Values

Create a class called Person with two properties: name and age.
The class should have a method called getDetails that returns a string in the format "Name: <name>, Age: <age>".
Use default parameters in the constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

*/

class Person {
    constructor(name = "Priyanka", age = 0) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
}

// Expected Output

const person1 = new Person("Priyanka", 20);
console.log(person1.getDetails()); // Output: Name: Priyanka, Age: 20

const person2 = new Person();
console.log(person2.getDetails()); // Output: Name: Priyanka, Age: 0

  
  