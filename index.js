function isPalindrome(str) {
  let reg = /[\W_ ]/g; // Regular expression to match non-alphanumeric characters, underscores, and whitespace

  let smallStr = str.toLowerCase().replace(reg, ""); // Remove non-alphanumeric characters, underscores, and whitespace and convert to lowercase

  let reversed = smallStr.split("").reverse().join(""); // Reverse the string

  if (reversed === smallStr) {
    return true;
  } else {
    return false;
  }
}

  

    

  // Write your algorithm here


/* 
  Add your pseudocode here
*/// function booelean
// one argument will be lowercase string 
// palindrome 

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
//if (require.main === module) {
  // add your own custom tests in here
  //console.log("Expecting: true");
  //console.log("=>", isPalindrome("racecar"));

  //console.log("");

  //console.log("Expecting: false");
  // console.log("=>", isPalindrome("robot"));


module.exports = isPalindrome;
console.log(isPalindrome("harry"))
