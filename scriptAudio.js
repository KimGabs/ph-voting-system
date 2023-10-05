console.log("scriptAudio.js is working!");

// President audio
const presidentRadios = document.querySelectorAll('input[name="radio-group"]');

presidentRadios.forEach((radio) => {
  radio.addEventListener('focus', () => {
      const SelectedPresident = radio.value;
      selectPresident(SelectedPresident);
  });
});


function selectPresident(presidentName) {
    const audio = document.getElementById('character-audio');
    
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
    const audio = document.getElementById('character-audio');
    
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


function selectSen(vpName) {
    const audio = document.getElementById('character-audio');
    
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
        'sen10': 'audio-resources/sen10.mp3'
    };
    
    // Set the audio source and play it
    audio.src = audioFiles[vpName];
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
  const audio = document.getElementById('character-audio');
  
  const audioFiles = {
    'pDiv': 'audio-resources/instruction-president.mp3',
    'vpDiv': 'audio-resources/instruction-vp.mp3',
    'senDiv': 'audio-resources/instruction-sen.mp3'
  };
  
  audio.src = audioFiles[divName];
  audio.play();
}


// Audio for Buttons
const Buttons = document.querySelectorAll('.btn');

Buttons.forEach((btn) => {
    btn.addEventListener('focus', () => {
    const selectedBtn = btn.getAttribute('value');
    selectBtn(selectedBtn);
  });
});

function selectBtn(btnName) {
  const audio = document.getElementById('character-audio');
  
  const audioFiles = {
    'submit': 'audio-resources/finish.mp3'
  };
  
  audio.src = audioFiles[btnName];
  audio.play();
}

