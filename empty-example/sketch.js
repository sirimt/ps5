<html>
  <head>
    <title>PS5 Homework</title>
  </head>
  <body>
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
  <script type="text/javaScript">
  function setup() {
    createCanvas(640, 480);
    background(85, 192, 217);
  }
  function draw() {
    stroke("black");
    fill(158, 154, 160);
    rect(-1, 405, 641, 75);
    fill("black");
    ellipse(100, 400, 8, 8);
    ellipse(150, 400, 8, 8);
    fill(196, 61, 37);
    stroke(196, 61, 37);
    beginShape();
    vertex(85, 394);
    vertex(85, 380);
    vertex(100, 380);
    vertex(100, 364);
    vertex(150, 364);
    vertex(150, 380);
    vertex(165, 380);
    vertex(165, 394);
    endShape(CLOSE);
    }
  </script>
</html>
