const vidElement = document.getElementById('game-vid');
const infoElement = document.querySelector('.project-info');
let currentProject = 1;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Play the video when it becomes visible
      entry.target.play();
    } else {
      // Pause the video when it is not visible
      entry.target.pause();
    }
  });
});

// Observe the video element
observer.observe(vidElement);

function changeProject() {
  if (currentProject === 1) {
    vidElement.src = 'JointProjectShowcase.mp4';
    infoElement.innerHTML = `
      <h2>Game Title 1</h2>
      <p>Description of Super awesome game</p>
    `;
    currentProject = 2;
  } else if (currentProject === 2) {
    vidElement.src = 'Ui_Showcase.mp4';
    infoElement.innerHTML = `
      <h2>Game Title 2</h2>
      <p>Description of my next best game</p>
    `;
    currentProject = 3;
  } else if (currentProject === 3) {
    vidElement.src = 'test3.gif';
    infoElement.innerHTML = `
      <h2>Game Title 3</h2>
      <p>Description of the absolute best game</p>
    `;
    currentProject = 1;
  }
}

//Call once to keep gif behaviour from not doing anything on first click.
changeProject();
