const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span");  
timeText = document.querySelector(".hint b");
inputField = document.querySelector(".input"); 
refresBtn = document.querySelector(".refres-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
         if(maxTime > 0){
            maxTime--;
          return  timeText.innerText = maxTime;
         }
         clearInterval(timer);
         alert('Time off! ${correctWord.toUpperCase()} was the correct word');
         initGame();
    }, 1000);
}

const initGame = () => {
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];//let randomObj = words
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.lenght - 1; i > 0; i--){
        let j = Math.floor(Math.random() *  ( i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLocaleLowerCase();
    inputField.value == ""; // making field emoty
    inputField.setAttribute("maxlength", correctWord.length);
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase(); //geeting user value
    if(!userWord) return alert("Please enter a word check");

    //if user word doesn't matched with the correct word
   if(userWord !== correctWord) return alert('Oops! ${userWord} is not a correct word');

   //if  above two if conditions are failed than show congrats alert because user word is correct
   alert('Congrats! ${userWord.toUpperCase()} is a correct word');
   initGame();
} 

refresBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);