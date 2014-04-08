
function Clock() {
};


var buddyClock = new Clock();

Clock.prototype.run = function() {
  this.startTime = new Date();
  this.sec = this.startTime.getSeconds();
  this.min = this.startTime.getMinutes();
  this.hr =  this.startTime.getHours();
  var me = this;
  // var tickMe = this.tick.bind(this)
 //  setInterval(tickMe, 500); //bind this to clock
  //or setInterval(this.tick.bind(this), 500);
  var callback = function() {
    this.tick()
  }.bind(this)

  setInterval(callback, 500)
};
Clock.prototype.tick = function() {


  this.sec += 5;
  if (this.sec === 60) {
    this.sec = 0;
    this.min += 1;
  };
  if (this.min === 60) {
    this.min = 0;
    this.hr += 1;
  };
  if (this.hr ===24) {
    console.log("and now you die.");
  };
  console.log(this.hr + ":" + this.min + ":" + this.sec);
};


buddyClock.run();


