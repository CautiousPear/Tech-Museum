const museumObjects = [ //List of objects with their links, images, and alt text

    { link: "pages/object-1.html", img: "images/VictrolaMiniBoombox.png", alt: "Victrola Mini Boombox" },
    { link: "pages/underwood_typewriter.html", img: "images/underwood_typewriter.png", alt: "Underwood Typewriter" },
    { link: "pages/ibm_disk_drives.html", img: "images/ibm_disk_drives.png", alt: "IBM Disk Drives" },
    { link: "pages/balopticon.html", img: "images/balopticon.png", alt: "Balopticon" },
    { link: "pages/mechanical_adding_machine.html", img: "images/mechanical_adding_machine.png", alt: "Mechanical Adding Machine" },
    { link: "pages/dead_reckoning_computer.html", img: "images/dead_reckoning_computer.png", alt: "Dead-reckoning Computer" },
    { link: "pages/sony_mavica_fd100.html", img: "images/sony_mavica_fd100.png", alt: "Sony Mavica FD100" },
    { link: "pages/sony_mavica_fd97.html", img: "images/sony_mavica_fd97.png", alt: "Sony Mavica FD97" },
    { link: "pages/ibm_calculator_tool.html", img: "images/ibm_machine_load_computer_slide_rule.png", alt: "IBM Calculator Tool" }
  ];

const ITEMS_PER_SHELF = window.innerWidth < 600 ? 3 : 6; 

  const mainFloor = document.getElementById('museum-floor');

  // Group objects into shelves and create HTML for each shelf
  for (let i = 0; i < museumObjects.length; i += ITEMS_PER_SHELF) {
    // Create a new shelf div
    const shelfDiv = document.createElement('div');
    shelfDiv.className = 'shelf';

    const shelfItems = museumObjects.slice(i, i + ITEMS_PER_SHELF);

    // Create the HTML for each object
    shelfItems.forEach(obj => {
      const anchor = document.createElement('a');
      anchor.href = obj.link;
      
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