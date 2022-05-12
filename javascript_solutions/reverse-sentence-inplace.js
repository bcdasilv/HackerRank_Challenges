/* Given a sentence (an array of characters), reverse the order of its words 
without affecting the order of letters within a given word. 
All operations must be done in place. 
*/

let reverseWords = function(sentence) {     

    //Reverse the whole sentence chat by char O(n)
    sentence = reverse(sentence); 
    
    //Then, take each word and reverser it
    // The sentence will be the all the chars
    // up to the word + the reversed word + the rest of the sentence
    // loop over until have the next word
    // O(n)
    let subStr = "";
    for (let index = 0; index < sentence.length ; index++) {
      const char = sentence.charAt(index);
      if (char === " ") {
        sentence = sentence.substring(0, index - subStr.length) + reverse(subStr) + sentence.substring(index);
        subStr = "";
      } else if (index === sentence.length - 1) {
        subStr += char;
        sentence = sentence.substring(0, index - subStr.length + 1) + reverse(subStr);
        subStr = "";      
      }
      else 
        subStr += char;
    }
    return sentence;
  };
  
  function reverse (sentence) {
    let len = sentence.length;
    let count = 0;
    while(count != len) {
      const char = sentence.substring(len - count - 1,len - count);
      sentence+= char;
      count++;
    
    }
    sentence = sentence.substring(len);
    return sentence;
  }
  