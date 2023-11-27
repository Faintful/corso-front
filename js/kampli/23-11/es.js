// Use the arrow format to create functions that output the values one and two to the console. 

const fnOne = () => console.log('One');

const fnTwo = () => console.log('Two');

// Create a third function that outputs the value three to the console, and then invokes the first two functions. 

const fnThree = () => {
  console.log('Three');
  fnOne();
  fnTwo();
};

/* Create a fourth function that outputs the word four to the console and also use setTimeout() to invoke the first function immediately and then the third function. */

const fnFour = () => {
  console.log('Four');
  setTimeout(fnOne, 0);
  fnThree();
};

fnFour();

/* What does your output look like in the console? Try to get the console to output:

```
Four
Three
One
Two
One
```  */
