'use strict';

const body = document.body,
      boxContainer = document.querySelector('.box-container'),
      boxes = Array.from(boxContainer.children),
      button = document.querySelector('.button'),
      audios = document.querySelectorAll('audio'),
      newBox = document.createElement('section'),
      newSound = document.createElement('audio');

var keyCodes = [];

//this loops through audios from DOM and push data-key content into an empty array
for (var audio of audios) {
    keyCodes.push(audio.getAttribute('data-key'));
//    keyCodes.push(audio.dataset.key);
}

//this loops through the boxes array from DOM and adds an event listener to each array item
for (var box of boxes) {
    box.addEventListener('click', playCorrespondingAudio)
}

function playCorrespondingAudio() {
    const audio = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
        audio.currentTime = 0;
        audio.play();
}

function confirmKeyCode(e) {
    var code = e.code,
        checkCode = keyCodes.includes(code);
    
    if(checkCode) {
        const audio = document.querySelector(`audio[data-key="${code}"]`),
              sections = document.querySelector(`audio[data-key="${code}"]`);

            audio.currentTime = 0;
            audio.play();
    } else {
        alert("This button doesn't have a command attached to it");
    }
}


window.addEventListener('keydown', confirmKeyCode )

//
//
//function createBox(letterNotation, inputedKeyCode, audioName) {
//    newBox.className = 'box';
//    newBox.setAttribute('data-key', inputedKeyCode);
//    keyCodes.push(inputedKeyCode);
//    boxes.push(newBox);
//    newBox.innerHTML = `<small>${letterNotation}<br>${audioName}</small>`;
//    button.before(newBox);
////    addTheSound();
//}
//
//function collectBoxProperties() {
//    var inputedKeyCode = prompt("What's the key code?", 'KeyQ'),
//        letterNotation = prompt("What letter notation be used?", 'Q'),
//        audioName = prompt("What's the audio name", 'Qick');
//    
//    createBox(letterNotation, inputedKeyCode, audioName);
//    alert('Created successfully');
//}
// 
//
//function create() {
//    console.log('button clicked');
//    const confirmation = confirm('Create a new box?');
//    if (confirmation) {
//        collectBoxProperties();
//    } else { 
//        alert('oooops! Okay then.');
//    }
//}
//
//
//function addTheSound() {
//    newSound.setAttribute('src', 'sounds/ride.wav');
//    newSound.app
//}

      
      
      
      
      
      
      
      
      
      