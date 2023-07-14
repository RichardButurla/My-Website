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
      <h2>Endless Dungeon</h2>
      <p>My second year final project which was an endless shooter/fighter.
       This project was programmed using C++ and the SFML library, featuring Melee/Ranged Enemy AI, Breadth-first search algorithim and pathfinding,
       enemy collision avoidance, different weapon types and behaviours, particle effects and more. This project was lots of fun to make especially
       implementing the collision avoidance and path finding algorithim. </p>
    `;
    currentProject = 2;
  } else if (currentProject === 2) {
    vidElement.src = 'Ui_Showcase.mp4';
    infoElement.innerHTML = `
      <h2>Mystery Game</h2>
      <p>My second year project for User Interface Programming. 
      A mystery themed game where you have to pick up clues and talk to suspects to try solve the crime.
      Support for Keyboard on Desktop and playable with a Joystick and buttons on mobile.
      Programmed in Javascript and downloadable as a Progressive Web App, I also made use of HTML, CSS and Local Storage to save progress. 
      It was fun to make a game in a website within a canvas, connecting HTML, CSS and Javascript and implementing joystick controls.
       </p>
    `;
    currentProject = 3;
  } else if (currentProject === 3) {
    vidElement.src = 'Erootica.mp4';
    infoElement.innerHTML = `
      <h2>Plant Dating Simulator</h2>
      <p>A game me and other students worked on in a game jam. A dating simulator type game where you are a crazy farmer who talks and can develop
      different types of relationships with his plants with what you say and how you keep them healthy with water and fertiliser.
      This was developed in GoDot game engine and programmed using GdScript. This was my first time using the engine and it was an awesome experience
      to learn a new language, use new tools, and develop something very unique. </p>
    `;
    currentProject = 1;
  }
}

//Call once to keep gif behaviour from not doing anything on first click.
changeProject();
