const museumObjects = [ //List of objects with their links, images, and alt text

    { link: "pages/underwood_typewriter.html", img: "images/underwood_typewriter.png", alt: "Underwood Typewriter" },
    { link: "pages/ibm_disk_drives.html", img: "images/ibm_disk_drives.png", alt: "IBM Disk Drives" },
    { link: "pages/balopticon.html", img: "images/balopticon.png", alt: "Balopticon" },
    { link: "pages/mechanical_adding_machine.html", img: "images/mechanical_adding_machine.png", alt: "Mechanical Adding Machine" },
    { link: "pages/dead_reckoning_computer.html", img: "images/dead_reckoning_computer.png", alt: "Dead-reckoning Computer" },
    { link: "pages/sony_mavica_fd100.html", img: "images/sony_mavica_fd100.png", alt: "Sony Mavica FD100" },
    { link: "pages/sony_mavica_fd97.html", img: "images/sony_mavica_fd97.png", alt: "Sony Mavica FD97" },
    { link: "pages/ibm_calculator_tool.html", img: "images/ibm_machine_load_computer_slide_rule.png", alt: "IBM Calculator Tool" },
    { link: "pages/ibm_port_a_punch.html", img: "images/ibm_port_a_punch.png", alt: "IBM Port-a-Punch" },
    { link: "pages/watson_film_loader.html", img: "images/watson_film_loader.png", alt: "Watson Film Loader" },
    { link: "pages/sony_mavica_fd73.html", img: "images/sony_mavica_fd73.png", alt: "Sony Mavica FD-73" },
    { link: "pages/sony_mavica_fd7.html", img: "images/sony_mavica_fd7.png", alt: "Sony Mavica FD-7" },
    { link: "pages/cassette_recorder_player.html", img: "images/cassette_recorder_player.png", alt: "General Electric Tape Recorder & Player" },
  ];

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
  }

renderMuseum();

window.addEventListener('resize', renderMuseum);