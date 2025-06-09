$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 650, 90, 100)
    createPlatform(300, 10, 90, 500)
    createPlatform(1, 650, 1500, 100 )
    createPlatform(400, 450, 480, 80)
  createPlatform(1000, 300, 200, 400)
  createPlatform(970, 550, 200, 10)
  createPlatform(490, 400, 200, 20)
createPlatform(420, 300, 50, 10)
createPlatform(390, 200, 10, 5)
createPlatform(520, 180, 170, 20)
createPlatform(750, 250, 180, 20)


 
    // TODO 3 - Create Collectables
    createCollectable("diamond", 200, 170, 0.5, 0.7)
    createCollectable("diamond", 420, 100, 0.5, 0.7)
    createCollectable("diamond", 1300, 100, 0.5, 0.7)



    
    // TODO 4 - Create Cannons
    createCannon("bottom", 600, 1000)
    createCannon("right", 500, 2200)
    createCannon("bottom", 420, 600)
    createCannon("top", 200, 655)
    createCannon("left", 280, 1700)
    createCannon("right", 290, 5400)


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
