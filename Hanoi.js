var readline = require('readline');
var reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});


(function (root) {

  var Hanoi = root.Hanoi = (root.Hanoi || {});
  var Game = Hanoi.Game = function() {
    this.towers = [[3,2,1], [], []];
  }

  Game.prototype.getMove = function() {
    var that = this;
    reader.question("select soucre tower", function(sourceString) {
      reader.question("select destination tower", function(destString){
        var source = parseInt(sourceString);
        var dest = parseInt(destString);
        that.move(source, dest);
        that.play();
      });
    });
  }

  Game.prototype.move = function(source, dest) {
    disk = this.towers[source].pop();
    this.towers[dest].push(disk);
  }

  Game.prototype.render = function() {
    console.log(this.towers);
  }

  Game.prototype.play = function() {

    if (this.towers[1].length !== 3 && this.towers[2].length !== 3) {
      this.render();
      this.getMove();
    } else {
      console.log("you won big guy!");
      reader.close();
      return;
    }

  }

})(this);

var myGame = new this.Hanoi.Game();
console.log(myGame.towers);
myGame.play();


//this.Hanoi.my_variable
