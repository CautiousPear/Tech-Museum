import { museumObjects } from './data.js';

const mainFloor = document.getElementById('museum-floor');


function renderMuseum() {

  mainFloor.innerHTML = '';

  let itemsPerShelf;
  if (window.innerWidth < 600) {
    itemsPerShelf = 3; // Fewer items for small phones
  } else if (window.innerWidth < 1000) {
    itemsPerShelf = 4; // Mid-size for smaller devices
  } else {
    itemsPerShelf = 6; // Standard for desktop
  }

  // Group objects into shelves and create HTML for each shelf
  for (let i = 0; i < museumObjects.length; i += itemsPerShelf) {
    // Create a new shelf div
    const shelfDiv = document.createElement('div');
    shelfDiv.className = 'shelf';

    const shelfItems = museumObjects.slice(i, i + itemsPerShelf);

    // Create the HTML for each object
    shelfItems.forEach(obj => {
      const anchor = document.createElement('a');
      anchor.href = `template.html?id=${obj.id}`;

      const img = document.createElement('img');
      img.src = obj.img;
      img.alt = obj.alt;
      img.className = 'object';

      anchor.appendChild(img);
      shelfDiv.appendChild(anchor);
    });

    // Add the completed shelf to the page
    mainFloor.appendChild(shelfDiv);
  }
}

renderMuseum();

window.addEventListener('resize', renderMuseum);