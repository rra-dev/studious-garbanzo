// my solution
function countBs (word) {
	let cnt = 0;
  	for (i = 0; i <= word.length - 1; i++) {
    	if (word[i] == "B") cnt++;
    }
  	return cnt;
}
function countChar (word, letter) {
  	let cnt = 0;
  	for (i = 0; i <= word.length - 1; i++) {
    	if (word[i] == letter) cnt++;
    }
  	return cnt;
}
// book solution - :facepalm: didn't read the instructions well enough
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == ch) {
        counted += 1;
      }
    }
    return counted;
  }
  
  function countBs(string) {
    return countChar(string, "B");
  }
  