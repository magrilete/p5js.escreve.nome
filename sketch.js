function setup() {
    createCanvas(600,600);
    background("purple");
  }
  
  function draw() {
   
    
    stroke("blue");
    fill("red");
    
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed){
    rect(mouseX, mouseY,20, 25);
    } 
  }