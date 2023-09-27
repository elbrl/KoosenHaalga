let number1 = 12345 + "";
let number2 = 12346 + "";
let percentageMaps = ["0%", "0%", "40%", "60%", "80%", "90%", "100%"];

function getPercentage(number1, number2) {
  counter = 0;
  for (var i = 0; i < number1.length; i++) {
    if (number1.charAt(i) == number2.charAt(i)) {
      counter++;
    }
  }
  return percentageMaps[counter];
}

console.log(getPercentage(number1, number2));
