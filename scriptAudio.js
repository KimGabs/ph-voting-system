console.log("scriptAudio.js is working!");
// Audio repeat
document.addEventListener('keydown', (event) => {
  if (event.key === 'r' || event.key === 'R') {
    repeatAudio();
  }
});

function repeatAudio() {
  const audio = document.getElementById('speech-audio');
  audio.playbackRate =  audioSpeedRate;
  if (!audio.paused) {
    audio.pause(); // Pause and reset the audio to the beginning
    audio.currentTime = 0;
    audio.play();
  }
}

// President audio
const presidentRadios = document.querySelectorAll('input[name="radio-group"]');

presidentRadios.forEach((radio) => {
  radio.addEventListener('focus', () => {
      const SelectedPresident = radio.value;
      selectPresident(SelectedPresident);
  });
});


function selectPresident(presidentName) {
    const audio = document.getElementById('speech-audio');
    
    const audioFiles = {
        'President1': 'audio-resources/pres1.mp3',
        'President2': 'audio-resources/pres2.mp3',
        'President3': 'audio-resources/pres3.mp3',
        'President4': 'audio-resources/pres4.mp3',
        'President5': 'audio-resources/pres5.mp3',
        'President6': 'audio-resources/pres6.mp3',
        'President7': 'audio-resources/pres7.mp3',
        'President8': 'audio-resources/pres8.mp3',
        'President9': 'audio-resources/pres9.mp3',
        'President10': 'audio-resources/pres10.mp3'
    };
    
    // Set the audio source and play it
    audio.src = audioFiles[presidentName];
    audio.playbackRate = audioSpeedRate;
    audio.play();
}
// Vice president audio
const vpRadios = document.querySelectorAll('input[name="radio-group-2"]');

// Add event listeners to the radio buttons
vpRadios.forEach((radio) => {
  radio.addEventListener('focus', () => {
      const SelectedVP = radio.value;
      selectVP(SelectedVP);
  });
});


function selectVP(vpName) {
    const audio = document.getElementById('speech-audio');
    
    const audioFiles = {
        'vp1': 'audio-resources/vp1.mp3',
        'vp2': 'audio-resources/vp2.mp3',
        'vp3': 'audio-resources/vp3.mp3',
        'vp4': 'audio-resources/vp4.mp3',
        'vp5': 'audio-resources/vp5.mp3',
        'vp6': 'audio-resources/vp6.mp3',
        'vp7': 'audio-resources/vp7.mp3',
        'vp8': 'audio-resources/vp8.mp3',
        'vp9': 'audio-resources/vp9.mp3'
    };
    
    // Set the audio source and play it
    audio.src = audioFiles[vpName];
    audio.playbackRate = audioSpeedRate;
    audio.play();
}

const senCheckboxes = document.querySelectorAll('input[name="senate"]');

// Add event listeners to the radio buttons
senCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener('focus', () => {
      const SelectedSen = checkbox.value;
      selectSen(SelectedSen);
  });
});

function selectSen(senName) {
    const audio = document.getElementById('speech-audio');
    
    const audioFiles = {
        'sen1': 'audio-resources/sen1.mp3',
        'sen2': 'audio-resources/sen2.mp3',
        'sen3': 'audio-resources/sen3.mp3',
        'sen4': 'audio-resources/sen4.mp3',
        'sen5': 'audio-resources/sen5.mp3',
        'sen6': 'audio-resources/sen6.mp3',
        'sen7': 'audio-resources/sen7.mp3',
        'sen8': 'audio-resources/sen8.mp3',
        'sen9': 'audio-resources/sen9.mp3',
        'sen10': 'audio-resources/sen10.mp3',
        'sen11': 'audio-resources/sen11.mp3',
        'sen12': 'audio-resources/sen12.mp3',
        'sen13': 'audio-resources/sen13.mp3',
        'sen14': 'audio-resources/sen14.mp3',
        'sen15': 'audio-resources/sen15.mp3',
        'sen16': 'audio-resources/sen16.mp3',
        'sen17': 'audio-resources/sen17.mp3',
        'sen18': 'audio-resources/sen18.mp3',
        'sen19': 'audio-resources/sen19.mp3',
        'sen20': 'audio-resources/sen20.mp3'
    };
    
    // Set the audio source and play it
    audio.src = audioFiles[senName];
    audio.playbackRate = audioSpeedRate;
    audio.play();
}

// Audio Instruction
const presidentDivs = document.querySelectorAll('.divInstruct');

presidentDivs.forEach((div) => {
  div.addEventListener('focus', () => {
    const selectedDiv = div.getAttribute('value');
    selectDiv(selectedDiv);
  });
});

function selectDiv(divName) {
  const audio = document.getElementById('speech-audio');
  
  const audioFiles = {
    'pDiv': 'audio-resources/instruction-president.mp3',
    'vpDiv': 'audio-resources/instruction-vp.mp3',
    'senDiv': 'audio-resources/instruction-sen.mp3'
  };
  
  audio.src = audioFiles[divName];
  audio.playbackRate = audioSpeedRate;
  audio.play();
}

// Audio for bottom buttons
const Buttons = document.querySelectorAll('.btn');

Buttons.forEach((btn) => {
    btn.addEventListener('focus', () => {
    const selectedBtn = btn.getAttribute('value');
    selectBtn(selectedBtn);
  });
});

function selectBtn(btnName) {
  const audio = document.getElementById('speech-audio');
  
  const audioFiles = {
    'submit': 'audio-resources/finish.mp3',
    'validate': 'audio-resources/validate.mp3'
  };
  
  audio.src = audioFiles[btnName];
  audio.playbackRate = audioSpeedRate;
  stopAudio();
  audio.play();
}

// Audio for icons buttons
const iconBtns = document.querySelectorAll('.icon-btn');
  iconBtns.forEach((icon) => {
    icon.addEventListener('focus', () => {
    const selectedIcon = icon.getAttribute('value');
    selectIcon(selectedIcon);
  });
});

function selectIcon(btnName) {
const audio = document.getElementById('speech-audio');

const audioFiles = {
  // 'settings': 'audio-resources/.mp3',
  'instructions': 'audio-resources/instructions.mp3'
};

  audio.src = audioFiles[btnName];
  audio.playbackRate = audioSpeedRate;
  stopAudio();
  audio.play();
}


const allRadios = document.querySelectorAll('input:not([type="range"])');
allRadios.forEach((radio) => {
  radio.addEventListener('click', () => {
    const audio = document.getElementById('speech-audio');
    if (radio.checked) {
      playCheckedAudio(audio);
    } else {
      playUncheckedAudio(audio);
    }
  });
});

function playCheckedAudio(audio) {
  audio.src = 'audio-resources/select.mp3';
    stopAudio(); // Stop any currently playing audio
    audio.play();
}

function playUncheckedAudio(audio) {
  audio.src = 'audio-resources/deselect.mp3';
    stopAudio(); // Stop any currently playing audio
    audio.play();
}

// Get the revalidation button
const revalidationButton = document.getElementById('revalidation-button');
let timeouts = [];

// Add a click event listener to the revalidation button
revalidationButton.addEventListener('click', () => {

  timeouts.forEach((timeoutId) => {
    clearTimeout(timeoutId);
  });
  timeouts = [];

  // Get all selected radio buttons with class "president"
  const selectedPres = document.querySelectorAll('input[name="radio-group"]:checked');
  const selectedVP = document.querySelectorAll('input[name="radio-group-2"]:checked');
  const selectedSen = document.querySelectorAll('input[name="senate"]:checked');
  const audio = document.getElementById('speech-audio');
  
  // Validation audio
  announcePres(audio);
  timeouts.push(setTimeout(() => {
    selectedPres.forEach((radio) => {
      const pres = radio.value;
      selectPresident(pres);
    });
  }, 3150));
  timeouts.push(setTimeout(() => {
    announceVP(audio);
  }, 7400));
  timeouts.push(setTimeout(() => {
    selectedVP.forEach((radio) => {
      const vp = radio.value;
      selectVP(vp);
    });
  }, 10650));
  timeouts.push(setTimeout(() => {
    announceSen(audio);
  }, 15500));
  timeouts.push(setTimeout(() => {
  selectedSen.forEach((radio, index) => {
    const sen = radio.value;
    setTimeout(() => {
      selectSen(sen);
    }, index * 5000); 
  });
  }, 19000));
  
});

// Function to play pre-announcement audio
function announcePres(audio) {
  audio.src = 'audio-resources/validate-1.mp3';
  audio.playbackRate = audioSpeedRate;
  audio.play();
}

function announceVP(audio) {
  audio.src = 'audio-resources/validate-2.mp3';
  audio.playbackRate = audioSpeedRate;
  audio.play();
}

function announceSen(audio) {
  audio.src = 'audio-resources/validate-3.mp3';
  audio.playbackRate = audioSpeedRate;
  audio.play();
}

// Function to stop the audio playback
function stopAudio() {
  // Interrupt validation
  timeouts.forEach((timeoutId) => {
    clearTimeout(timeoutId);
  });
  timeouts = [];
  if (!audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reset the audio to the beginning
  }
}