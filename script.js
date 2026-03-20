import { museumObjects } from './data.js';

const mainFloor = document.getElementById('museum-floor');


function renderMuseum() {

  mainFloor.innerHTML = '';

  // Calculate how many items can fit on a shelf based on the window width
  // 1080p horizontal resolution is 1920px, target is 6 items per shelf 1080p
  // 1920px / 6 items = 320px per item (including margins) 
  let itemsPerShelf = Math.max(3, Math.round(window.innerWidth / 320));

  // Group objects into shelves and create HTML for each shelf
  for (let i = 0; i < museumObjects.length; i += itemsPerShelf) {
    // Create a new shelf div
    const shelfDiv = document.createElement('div');
    shelfDiv.className = 'shelf';

    const shelfItems = museumObjects.slice(i, i + itemsPerShelf);

    // Create the HTML for each object
    shelfItems.forEach(obj => {
      const anchor = document.createElement('a');

      anchor.href = `template.html?id=${obj.id}`; // Create page using template.html and pass the id as a query parameter

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
