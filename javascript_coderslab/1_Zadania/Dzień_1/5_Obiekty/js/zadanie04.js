// W pliku zadanie04.js możesz znaleźć przykładowy konstruktor dla robota. Konstruktor oczekuje, że podasz tylko imię robota. Wszystkie roboty mają od razu kilka metod (metody dodane są przez prototypy). Utwórz kilka robotów i sprawdź, czy w napisanym kodzie nie ma błędów.

var Robot = function(name) {
  this.name = name;
  this.isFunctional = true;
}

Robot.prototype.sayHi = function(toWho) {
  if(this.isFunctional === true) {
    console.log("Robot " + this.name + " greets " + toWho);
  }
  else{
    console.log("Robot " + this.name + "is broken");
  }
};

Robot.prototype.changeName = function(newname) {
  console.log("Robot " + this.name + " changes name to " + newname);
  this.name = newname;
};

Robot.prototype.fixIt = function() {
  this.isFunctional = true;
  console.log("Robot " + this.name + " was fixed");
};

var robot1 = new Robot ("rob1");
var robot2 = new Robot ("rob2");
var robot3 = new Robot ("rob3");
robot1.sayHi("John");
robot2.changeName("rob02");
robot2.fixIt();