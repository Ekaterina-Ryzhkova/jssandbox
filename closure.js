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

  return SayAge(); //Возврат гарантирует замыкание функции, внешняя функция прекращает существование после вызова и передает локальные значения внутренней функции
}

let Zam = SayHello("Vasya");
Zam(); // Вызов внутренней функции SayAge()
Zam(); // Вызов внутренней функции SayHometown()
