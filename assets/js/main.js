let menuIcon = document.querySelector('.change-bg');
let bG1 = document.querySelector('.container');
let bG2 = document.querySelector('.container');
let bG3 = document.querySelector('.container');
let bG = document.querySelector('.container');



menuIcon.oneclick = () => {
    bG1.classList.toggle('bg-2')
    bG.classList.remove('container')
}

menuIcon.onclick = () => {
  bG2.classList.toggle('bg-3')
  bG.classList.remove('container')
}

menuIcon.onclick = () => { 
    bG.classList.toggle('bg-2')
    bG.classList.toggle('bg-4')
    bG.classList.toggle('bg-3')
    
  }
  


  // script.js
const playButton = document.getElementById('playButton');
const music = document.getElementById('music');

let isPlaying = false;

playButton.addEventListener('click', () => {
  if (isPlaying) {
    music.pause();
    playButton.textContent = 'Play Music';
  } else {
    music.play();
    playButton.textContent = 'Pause Music';
  }
  
  isPlaying = !isPlaying;
});




