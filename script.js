console.log("script.js is working!");
document.getElementById('background-img').ondragstart = function() { return false; };

const radioButtons = document.querySelectorAll('input[type="radio"]');
// radioButtons[0].focus();

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

const audio = document.getElementById('character-audio');
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

