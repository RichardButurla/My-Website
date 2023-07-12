const gifElement = document.querySelector('.project-gif img');
const infoElement = document.querySelector('.project-info');
let currentProject = 1;

function changeProject() {
  if (currentProject === 1) {
    gifElement.src = 'test.gif';
    infoElement.innerHTML = `
      <h2>Game Title 1</h2>
      <p>Description of Super awesome game</p>
    `;
    currentProject = 2;
  } else if (currentProject === 2) {
    gifElement.src = 'test2.gif';
    infoElement.innerHTML = `
      <h2>Game Title 2</h2>
      <p>Description of my next best game</p>
    `;
    currentProject = 3;
  } else if (currentProject === 3) {
    gifElement.src = 'test3.gif';
    infoElement.innerHTML = `
      <h2>Game Title 3</h2>
      <p>Description of the absolute best game</p>
    `;
    currentProject = 1;
  }
}

//Call once to keep gif behaviour from not doing anything on first click.
changeProject();
