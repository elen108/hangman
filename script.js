let pickWord = function () {
  // pick a random word
  let words = ["fall", "spring", "tea", "success", "no"]

  return words[Math.floor(Math.random() * words.length)]
}

let word = pickWord()

let setupAnswerArray = function (word) {
  //create an answer array
  let answerArray = []
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_"
  }

  return answerArray
}

let answerArray = setupAnswerArray(word)

let showPlayerProgress = function (answerArray) {
  // using alert to show the current state of the game
  alert(
    "Lives: " +
      maxOfTries +
      "\n" +
      answerArray.join(" ") +
      "\n" +
      remainingLetters +
      " letters to go"
  )
}

let getGuess = function () {
  //request a response option
  return prompt("Guess the letter or click Cancel to exit the game")
}

let updateGameState = function (guess, word, answerArray) {
  //update answerArray according to the player's response guess
  //return the number of times the letter guess occurs in the word
  //so that the value remainingLetters can be updated
  let appearances = 0
  for (let j = 0; j < word.length; j++) {
    if (word[j] === guess) {
      answerArray[j] = guess
      appearances++
    }
  }
  return appearances
}

let showAnswerAndCongratulatePlayer = function (answerArray) {
  // Using alert show answer and congratulate the player
  showPlayerProgress(answerArray)
  alert("Good job! The hidden word is " + word)
}

//maximum of tries
let maxOfTries = 5
let guessAll = ""

//remaining letters
let remainingLetters = word.length
while (remainingLetters > 0 && guessAll.length < maxOfTries) {
  showPlayerProgress(answerArray)

  //guess: response of the player
  let guess = getGuess()

  // add guesses to an answerArray
  guessAll += guess

  if (guess === null) {
    break
  } else if (guess.length !== 1) {
    alert("Please, enter one letter")
  } else {
    //convert toLowerCase
    guess = guess.toLowerCase()

    //correctGuesses: number of open letters
    let correctGuesses = updateGameState(guess, word, answerArray)
    remainingLetters -= correctGuesses
  }
}

showAnswerAndCongratulatePlayer(answerArray)
