console.log("script.js is working!");
document.getElementById('background-img').ondragstart = function() { return false; };


const radioButtons = document.querySelectorAll('input[type="radio"]');

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let currentIndex = 0;
let checkedCount = 0;
const maxChecked = 12; // Maximum allowed checked checkboxes

// Checkbox
function handleArrowKey(event) {
    if (event.key === 'ArrowUp' && currentIndex > 0) {
        currentIndex -= 1;
    } else if (event.key === 'ArrowDown' && currentIndex < checkboxes.length - 1) {
        currentIndex += 1;
    } else if (event.key === 'ArrowLeft' && currentIndex >= 4) {
        currentIndex -= 4;
    } else if (event.key === 'ArrowRight' && currentIndex < checkboxes.length - 4) {
        currentIndex += 4;
    }

    checkboxes[currentIndex].focus();
}

const audio = document.getElementById('speech-audio');
checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkedCount += 1;
            if (checkedCount > maxChecked) {
                audio.src = 'audio-resources/limit-alert.mp3';
                audio.play();

                checkbox.checked = false;
                checkedCount -= 1;
            }
        } else {
            checkedCount -= 1;
        }
    });

    checkbox.addEventListener('keydown', (event) => {
        if (event.key.startsWith('Arrow')) {
            event.preventDefault();
            handleArrowKey(event);
        }
    });
});

// print/submit button
const printButton = document.getElementById('printButton');
    printButton.addEventListener('click', () => {
        window.print(); 
    });

// Setting icon button
let audioSpeedRate = 1;
const audioTest = document.querySelector('.speedcontrolcontainer  audio');
const playbackrate = document.querySelector('.speedcontrolcontainer input');
const display = document.querySelector('.speedcontrolcontainer span');
const displayvalue = val => {
  return parseInt(val * 100, 10) + '%'
}

if (window.localStorage.pbspeed) {
    audioTest.playbackRate = window.localStorage.pbspeed;
    playbackrate.value = window.localStorage.pbspeed;
}
    display.innerText = displayvalue(audioTest.playbackRate);

playbackrate.addEventListener('change', e => {
    audioTest.playbackRate = playbackrate.value;
    audioSpeedRate = playbackrate.value;
    display.innerText = displayvalue(playbackrate.value);
    window.localStorage.pbspeed = playbackrate.value;
});

// const settings = document.getElementById('icon-setting');
//     settings.addEventListener('click', () => {
//         audioSpeedRate = 0.8;
//     })