var readline = require('readline');
READER = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

var askLessThan = function(el1, el2, callback) {

  var question = "Hey, Buddy, is " + el1 + " less than " + el2 + "?"
  READER.question(question, function(answerString) {
    if (answerString === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  })
}

var performSortPass = function(arr, i, madeAnySwaps, callback) {
  if (i < arr.length -1) {
    askLessThan(arr[i], arr[i+1], function(isLessThan) {
      if (isLessThan) {
        performSortPass(arr, i+1, madeAnySwaps, callback);
      } else {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
        performSortPass(arr, i+1, madeAnySwaps, callback);
      }
    })
  } else {
    callback(madeAnySwaps);
  }
}

var crazyBubbleSort = function(arr, sortCompletionCallback) {

  var sortPassCallback = function(madeAnySwaps) {
    if (madeAnySwaps) {
      performSortPass(arr, 0, false, sortPassCallback)
    } else {
      sortCompletionCallback(arr);
      READER.close();
    }
  }
  sortPassCallback(true); //only runs once

}

crazyBubbleSort([3, 2, 1], function (arr) { console.log(arr); });