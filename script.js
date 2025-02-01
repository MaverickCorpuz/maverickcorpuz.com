// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Get elements
  const openingScreen = document.getElementById('opening-screen');
  const pictureScreen = document.getElementById('picture-screen');
  const proposalScreen = document.getElementById('proposal-screen');
  const celebrationScreen = document.getElementById('celebration-screen');
  const yesButton = document.getElementById('yes-button');
  const noButton = document.getElementById('no-button');
  const nextButton = document.querySelector('.next-button');
  const backgroundMusic = document.getElementById('background-music');

  // Unlock audio on user interaction
  document.addEventListener('click', () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    }
  });

  // Move from Opening Screen to Picture Screen
  nextButton.addEventListener('click', () => {
    openingScreen.classList.add('hidden');
    pictureScreen.classList.remove('hidden');
    // Automatically move to Proposal Screen after 3 seconds
    setTimeout(() => {
      pictureScreen.classList.add('hidden');
      proposalScreen.classList.remove('hidden');
    }, 3000); // 3 seconds delay
  });

  // Handle 'Yes' button click
  yesButton.addEventListener('click', () => {
    proposalScreen.classList.add('hidden');
    celebrationScreen.classList.remove('hidden');
    triggerConfetti();
  });

  // Handle 'No' button click
  noButton.addEventListener('click', () => {
    alert('Try again! You know you want to say yes!');
  });

  // Confetti effect
  function triggerConfetti() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }
});