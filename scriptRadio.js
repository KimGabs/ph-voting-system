console.log("scriptRadio.js is working!");
const radios = document.querySelectorAll('input[name="radio-group"]');

let currentRadIndex = 0;

function handleArrowKeyRad1(event) {
    const numRows = 3; // Number of rows
    const numCols = 4; // Number of columns

    if (event.key === 'ArrowUp' && !event.shiftKey && currentRadIndex > 0) {
        currentRadIndex -= 1;
    } else if (event.key === 'ArrowDown' && !event.shiftKey) {
        if (currentRadIndex < radios.length - 1) {
            currentRadIndex += 1;
        } else if (currentRadIndex % numCols === numCols - 1 && currentRadIndex < radios.length - numCols) {
            // Move to the first radio button in the next row
            currentRadIndex += numCols - (numCols - 1);
        }
    } else if (event.shiftKey) {
        if (event.key === 'ArrowUp' && currentRadIndex >= numCols) {
            currentRadIndex -= numCols;
        } else if (event.key === 'ArrowDown' && currentRadIndex < radios.length - numCols) {
            currentRadIndex += numCols;
        }
    }

    radios[currentRadIndex].focus();
}

radios.forEach((radio, index) => {
    radio.addEventListener('keydown', (event) => {
        if (event.key.startsWith('Arrow')) {
            event.preventDefault();
            handleArrowKeyRad1(event);
        }
    });
});

// radios[currentRadIndex].focus();


const radios2 = document.querySelectorAll('input[name="radio-group-2"]');

let currentRadIndex2 = 0;

function handleArrowKeyRad2(event) {
    const numRows = 3; // Number of rows
    const numCols = 4; // Number of columns

    if (event.key === 'ArrowUp' && !event.shiftKey && currentRadIndex2 > 0) {
        currentRadIndex2 -= 1;
    } else if (event.key === 'ArrowDown' && !event.shiftKey && currentRadIndex2 < radios2.length - 1) {
        currentRadIndex2 += 1;
    } else if (event.shiftKey) {
        if (event.key === 'ArrowUp' && currentRadIndex2 >= numCols) {
            currentRadIndex2 -= numCols;
        } else if (event.key === 'ArrowDown' && currentRadIndex2 < radios2.length - numCols) {
            currentRadIndex2 += numCols;
        }
    }
    radios2[currentRadIndex2].focus();
}


radios2.forEach((radio, index) => {
    radio.addEventListener('keydown', (event) => {
        if (event.key.startsWith('Arrow')) {
            event.preventDefault();
            handleArrowKeyRad2(event);
        }
    });
});