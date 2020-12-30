/*
    Copyright (C) 2020-2021 Hanna Tiara Andarlia
*/

// typeWriter Hello ...
let hello = document.querySelector(".hello");

let text = ""
let textArr = [
  "World!",
  "Clients",
  "Recruiter",
]

let currentTextIndex = -1;
let letterIndex = -1;

function addLetter(){
    letterIndex++;
    if (letterIndex < text.length) {
        setTimeout(function() {
            hello.textContent += text[letterIndex];
            addLetter();
        }, 100)
    } else {
        setTimeout(function() {
            removeLetter();
        }, 2500)
    }
}

function removeLetter(){
    letterIndex--;
    if (letterIndex >= 0) {
        setTimeout( function() {
            hello.textContent = text.slice(0, letterIndex);
            removeLetter();
        }, 100)
    } else {
        updateText();
    }
}

function updateText() {
    currentTextIndex++;
    if (currentTextIndex === textArr.length) {
        currentTextIndex = 0;
    }
    
    text = textArr[currentTextIndex];
    addLetter();
}

updateText()