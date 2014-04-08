var object = {
  name: "Buddy",

  sayHello: function() {
    console.log("hello" + this.name);
  }
};

object.sayHello();

var hi = object.sayHello;
hi();

var sayHiLater = function(cb) {
  cb();
};

sayHiLater(object.sayHello)

sayHiLater(object.sayHello.bind(object))

sayHiLater(function() {
  object.sayHello();
})

sayHiLater(function() {
  this.sayHello();
}.bind(object))