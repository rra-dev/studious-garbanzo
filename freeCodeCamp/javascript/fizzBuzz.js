// My Solution
for (i = 1; i < 101; i++) {
    if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
  }
//This one didn't work right
for (i = 1; i < 101; i++) {
  switch (0) {
    case (i % 3): 
      console.log("Fizz");
    case (i % 5):
      console.log("Buzz");
      break;
    default:
      console.log(i);
  }
}
//Book Solution
for (let n = 1; n <= 100; n++) {    // starts similar loop
  let output = "";                  // initialize empty string
  if (n % 3 == 0) output += "Fizz"; // If divisible by 3 concat Fizz to string
  if (n % 5 == 0) output += "Buzz"; // If divisible by 5 concat Buzz to string
  console.log(output || n);         // Using || "" is falsey while any string is true 
}                                   //   n will only be displayed if output is not ""