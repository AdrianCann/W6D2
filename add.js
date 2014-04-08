var readline = require('readline');
READER = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    READER.question("Pick a number! ", function (numString) {

      var num = parseInt(numString);

      sum += num;
      console.log("your sum is " + sum);

      addNumbers(sum, numsLeft- 1, completionCallback);
    });
  } else {

    completionCallback(sum);

    READER.close()
  }

}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
});
