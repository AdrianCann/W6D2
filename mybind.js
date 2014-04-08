Function.prototype.myBind = function(boundObject) {
  var that = this;
  return function() {
    that.apply(boundObject);
  }
}