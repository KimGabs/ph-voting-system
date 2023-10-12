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
        'President1': 'audio-resources/presidents/pres1.mp3',
        'President2': 'audio-resources/presidents/pres2.mp3',
        'President3': 'audio-resources/presidents/pres3.mp3',
        'President4': 'audio-resources/presidents/pres4.mp3',
        'President5': 'audio-resources/presidents/pres5.mp3',
        'President6': 'audio-resources/presidents/pres6.mp3',
        'President7': 'audio-resources/presidents/pres7.mp3',
        'President8': 'audio-resources/presidents/pres8.mp3',
        'President9': 'audio-resources/presidents/pres9.mp3',
        'President10': 'audio-resources/presidents/pres10.mp3'
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
        'vp1': 'audio-resources/vice-presidents/vp1.mp3',
        'vp2': 'audio-resources/vice-presidents/vp2.mp3',
        'vp3': 'audio-resources/vice-presidents/vp3.mp3',
        'vp4': 'audio-resources/vice-presidents/vp4.mp3',
        'vp5': 'audio-resources/vice-presidents/vp5.mp3',
        'vp6': 'audio-resources/vice-presidents/vp6.mp3',
        'vp7': 'audio-resources/vice-presidents/vp7.mp3',
        'vp8': 'audio-resources/vice-presidents/vp8.mp3',
        'vp9': 'audio-resources/vice-presidents/vp9.mp3'
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
        'sen1': 'audio-resources/senators/sen1.mp3','sen1': 'audio-resources/senators/sen1.mp3',
        'sen2': 'audio-resources/senators/sen2.mp3',
        'sen3': 'audio-resources/senators/sen3.mp3',
        'sen4': 'audio-resources/senators/sen4.mp3',
        'sen5': 'audio-resources/senators/sen5.mp3',
        'sen6': 'audio-resources/senators/sen6.mp3',
        'sen7': 'audio-resources/senators/sen7.mp3',
        'sen8': 'audio-resources/senators/sen8.mp3',
        'sen9': 'audio-resources/senators/sen9.mp3',
        'sen10': 'audio-resources/senators/sen10.mp3',
        'sen11': 'audio-resources/senators/sen11.mp3',
        'sen12': 'audio-resources/senators/sen12.mp3',
        'sen13': 'audio-resources/senators/sen13.mp3',
        'sen14': 'audio-resources/senators/sen14.mp3',
        'sen15': 'audio-resources/senators/sen15.mp3',
        'sen16': 'audio-resources/senators/sen16.mp3',
        'sen17': 'audio-resources/senators/sen17.mp3',
        'sen18': 'audio-resources/senators/sen18.mp3',
        'sen19': 'audio-resources/senators/sen19.mp3',
        'sen20': 'audio-resources/senators/sen20.mp3',
        'sen21': 'audio-resources/senators/sen21.mp3',
        'sen22': 'audio-resources/senators/sen22.mp3',
        'sen23': 'audio-resources/senators/sen23.mp3',
        'sen24': 'audio-resources/senators/sen24.mp3',
        'sen25': 'audio-resources/senators/sen25.mp3',
        'sen26': 'audio-resources/senators/sen26.mp3',
        'sen27': 'audio-resources/senators/sen27.mp3',
        'sen28': 'audio-resources/senators/sen28.mp3',
        'sen29': 'audio-resources/senators/sen29.mp3',
        'sen30': 'audio-resources/senators/sen30.mp3',
        'sen31': 'audio-resources/senators/sen31.mp3',
        'sen32': 'audio-resources/senators/sen32.mp3',
        'sen33': 'audio-resources/senators/sen33.mp3',
        'sen34': 'audio-resources/senators/sen34.mp3',
        'sen35': 'audio-resources/senators/sen35.mp3',
        'sen36': 'audio-resources/senators/sen36.mp3',
        'sen37': 'audio-resources/senators/sen37.mp3',
        'sen38': 'audio-resources/senators/sen38.mp3',
        'sen39': 'audio-resources/senators/sen39.mp3',
        'sen40': 'audio-resources/senators/sen40.mp3',
        'sen41': 'audio-resources/senators/sen41.mp3',
        'sen42': 'audio-resources/senators/sen42.mp3',
        'sen43': 'audio-resources/senators/sen43.mp3',
        'sen44': 'audio-resources/senators/sen44.mp3',
        'sen45': 'audio-resources/senators/sen45.mp3',
        'sen46': 'audio-resources/senators/sen46.mp3',
        'sen47': 'audio-resources/senators/sen47.mp3',
        'sen48': 'audio-resources/senators/sen48.mp3',
        'sen49': 'audio-resources/senators/sen49.mp3',
        'sen50': 'audio-resources/senators/sen50.mp3',
        'sen51': 'audio-resources/senators/sen51.mp3',
        'sen52': 'audio-resources/senators/sen52.mp3',
        'sen53': 'audio-resources/senators/sen53.mp3',
        'sen54': 'audio-resources/senators/sen54.mp3',
        'sen55': 'audio-resources/senators/sen55.mp3',
        'sen56': 'audio-resources/senators/sen56.mp3',
        'sen57': 'audio-resources/senators/sen57.mp3',
        'sen58': 'audio-resources/senators/sen58.mp3',
        'sen59': 'audio-resources/senators/sen59.mp3',
        'sen60': 'audio-resources/senators/sen60.mp3'
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
    'pDiv': 'audio-resources/instructions/instruction-president.mp3',
    'vpDiv': 'audio-resources/instructions/instruction-vp.mp3',
    'senDiv': 'audio-resources/instructions/instruction-sen.mp3'
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
  'instructions': 'audio-resources/instructions.mp3'
};

  audio.src = audioFiles[btnName];
  audio.playbackRate = audioSpeedRate;
  stopAudio();
  audio.play();
}
// Reread instruction function
document.addEventListener('keydown', function(event) {
  if (event.key === 'e') {
      selectIcon('instructions');
  }
});

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
  }, 8400));
  timeouts.push(setTimeout(() => {
    selectedVP.forEach((radio) => {
      const vp = radio.value;
      selectVP(vp);
    });
  }, 12550));
  timeouts.push(setTimeout(() => {
    announceSen(audio);
  }, 17500));
  timeouts.push(setTimeout(() => {
  selectedSen.forEach((radio, index) => {
    const sen = radio.value;
    timeouts.push(setTimeout(() => {
      selectSen(sen);
    }, index * 5000)); 
  });
  }, 21000));
  
});

// Function to play pre-announcement audio
function announcePres(audio) {
  audio.src = 'audio-resources/validation/validate-1.mp3';
  audio.playbackRate = audioSpeedRate;
  audio.play();
}

function announceVP(audio) {
  audio.src = 'audio-resources/validation/validate-2.mp3';
  audio.playbackRate = audioSpeedRate;
  audio.play();
}

function announceSen(audio) {
  audio.src = 'audio-resources/validation/validate-3.mp3';
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