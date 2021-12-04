let terminal = {
  Allusernames : [],
  _username: "",

  Show()
  {
    console.log(this.Allusernames);
  },

  get username()
  {
    return this._username;
  },

  set username(name)
  {
    if (name.length > 2)
    {
      this._username = name;
      this.Allusernames.push(name);
    }
    else
    {
      console.log("The name " + name + " is too short");
    }

  }
};

var myTerminal = Object.create(terminal);
myTerminal.username = "Katya";
myTerminal.username = "Lena";
myTerminal.username = "Sasha";
myTerminal.username = "Fr";

myTerminal.Show();
