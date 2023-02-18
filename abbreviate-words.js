let abbreviateWords = function(sentence){
    let toArr = sentence.split(" ");
    let newWord = [];

    for (let i = 0; i < toArr.length; i++){
        let currentWord = toArr[i];

        if (currentWord.length > 4) {
           newWord.push(removeVowels(currentWord));
        } else {newWord.push(currentWord);
        }

    }
    return newWord.join(" ");
};

let removeVowels = function(word){
    if(typeof word !== "string") {
        console.log("not a word!")
    }

    let vowel = "aeiou";
    let newWord = " ";

    for (let i = 0; i < word.length; i++){
        if (!vowel.includes(word[i])) { // //2: iterate through all words and remove vowels of current index
            newWord += word[i];
        }
    }
    return newWord;
}

//convert to array with split.()
// Check if a word.length is above 4 characters
//1:if they are above 4 characters
//2: iterate through all words and remove vowels of current index



console.log(abbreviateWords('what a wonderful place to live')); // what a wndrfl plc to live
console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg


/* Write a function abbreviateWords(sentence) that takes in a sentence string.
The function should return a new sentence where words that are longer than 4 characters have their vowels removed.
Hint: Consider creating a helper function to remove all vowels in a string. */
