function palindrome(str) {
  // Good luck!
  if (str.toLowerCase().replace(/\S/) === str.split("").reverse().join("").toLowerCase().replace(/\S/)){
    return true;  
  } else {
    return false;
  }
  
}



palindrome("eye");
palindrome("race car"); 
palindrome("not a palindrome");
palindrome("A man, a plan, a canal. Panama");
palindrome("never odd or even");
palindrome("nope");
palindrome("almostomla");
palindrome("My age is 0, 0 si ega ym.");
palindrome("1 eye for of 1 eye.");
palindrome("0_0 (: /-\ :) 0-0");
