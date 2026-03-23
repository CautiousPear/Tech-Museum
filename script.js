import { museumObjects } from './data.js';

const mainFloor = document.getElementById('museum-floor');


function renderMuseum() {

  mainFloor.innerHTML = '';

  // Calculate how many items can fit on a shelf based on the window width
  // 1080p horizontal resolution is 1920px, target is 6 items per shelf 1080p
  // 1920px / 6 items = 320px per item (including margins) 
  let itemsPerShelf = Math.max(3, Math.round(window.innerWidth / 320));

  const filterButton = document.querySelector(".filter-btn.active");
  let filterCategory = filterButton.getAttribute('category');

  if (window.innerWidth < 800) filterCategory = 'all'; // Do not filter if in small screen mode
  

  let filteredItems;
  if (filterCategory.toLowerCase() === 'all') {
    filteredItems = museumObjects;
  } else {
    filteredItems = museumObjects.filter(obj => checkCategory(obj, filterCategory));
    console.log(filteredItems);
    
  }


  // Group objects into shelves and create HTML for each shelf
  for (let i = 0; i < filteredItems.length; i += itemsPerShelf) {
    const shelfDiv = document.createElement('div');
    shelfDiv.className = 'shelf';

    const shelfItems = filteredItems.slice(i, i + itemsPerShelf);

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

    mainFloor.appendChild(shelfDiv);
  }
}


function checkCategory(obj, filterCategory) {
  if (!obj.category) {
    return false;
  }

  const selected = filterCategory.toLowerCase();

  if (typeof obj.category === 'string') {
    return obj.category.toLowerCase() === selected;
  }

  if (Array.isArray(obj.category)) {
    let found = false;
    
    obj.category.forEach(cat => {
      if (cat.toLowerCase() === selected) {
        found = true;
      }
    });
    
    return found;
  }

  return false;
}

renderMuseum();

document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active');
    btn.classList.add('active');
    renderMuseum();
  });
});

window.addEventListener('resize', renderMuseum);
