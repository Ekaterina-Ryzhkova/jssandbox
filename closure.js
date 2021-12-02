function SayHello(name)
{
  let age = 15;

  function SayAge()
  {
    let Hometown = "Moscow";

    function SayHometown()
    {
      alert("I live in " + Hometown);
    }
    alert("My age is " + age);

    return SayHometown()
  }
  alert("Hello " + name);

  return SayAge();
}

let Zam = SayHello("Vasya");
Zam();
Zam();
Zam();
