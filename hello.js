const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

// improved

const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");
