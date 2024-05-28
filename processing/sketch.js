function setup() {
  createCanvas(400, 400, document.getElementById('defaultCanvas'))
}

function draw() {
  if(mouseIsPressed){
    fill(0)
    line(mouseX, mouseY, pmouseX, pmouseY)
  } else {
    fill(255)
  }
}
