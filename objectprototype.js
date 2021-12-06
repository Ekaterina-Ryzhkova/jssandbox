'use strict'

let person =
{

getName: function ()
{
  return "The name is " + this.firstName + " " + this.lastName; //this ссылается на объект, к которому привязан метод getName.
},
getInitials: function ()
{
  if (this.firstName && this.lastName)
  {
    return this.firstName[0] + this.lastName[0];
  }
},
getAge: function ()
{
  return "After graduation from school " + this.firstName + " will be " + (this.age + 3) + " years old";
}
};
let student1 = Object.create(person);
student1.firstName = "Katya";
student1.lastName = "Rizhkova";
student1.age = 18;
let student2 = Object.create(person);
student2.firstName = "Maxim";
student2.lastName = "Maximov";
student2.age = 16;
let student3 = Object.create(person);
student3.firstName = "Boris";
student3.lastName = "Borisov";
student3.age = 19;

console.log(student1.getAge()); //After graduation from school Katya will be 21 years old
