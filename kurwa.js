'use strict'


class Planet
{
constructor (name,radius)
{
  this.Name = name;
  this.Radius = radius;
}

getArea()
{
  let Area = 4*Math.PI*Math.pow(this.Radius,2);
  console.log("Surface Area - " + Area);
  return Area;
}

set gravity(value)
{
  this._gravity = value;
}

get gravity()
{
  return this._gravity;
}
}

let earth = new Planet("Earth",6378);
earth.gravity = 9.81;
earth.getArea();

console.log(earth.gravity);
