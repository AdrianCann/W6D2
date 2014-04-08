var sumArray = function(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}


function buildArray(numEl, callback) {
  var arr = []

  while (arr.length < numEl) {
    READER.question("Pick a number! ", function (element) {
      arr.push(ParseInt(element));
    }
    console.log("sum is " + callback(arr))

  }

}

buildArray(4, sumArray);

