// The countDown function should:

//     Take a positive integer as an argument.
//     Use a while loop to log each number to the console, starting from the input number and counting down to zero.
function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--; // Decrement the number by 1 in each iteration
    }
  }
  function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return messages;
  }
  