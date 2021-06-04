/* 4) Define a function with one parameter, which will be a string. The function must do the following:
a) Have a clear, descriptive name.
b) Retrieve only the last character from strings with lengths of 3 or less.
c) Retrieve only the first 3 characters from strings with lengths larger than 3. 
d) Use a template literal to return the phrase, "We put the '___' in '___'." Fill the first blank with the modified string, and fill the second blank
with the original string.
*/
  function clearAndDescriptiveName (descriptiveString){
    let returnString = "";
    if(descriptiveString.length <= 3){
      returnString = descriptiveString.slice(descriptiveString.length-1);
    }
    else if ((descriptiveString.length > 3)){
      returnString = descriptiveString.slice(0,3);
    }
    
    return `We put the ${returnString} in ${descriptiveString}.`
  }


/* Now test your function:
e) Outside of the function, define the variable str and initialize it with a string (e.g. 'Functions rock!').
*/
let stringBoi = "Stringboi Rock!";
console.log(clearAndDescriptiveName(stringBoi))