<!DOCTYPE html>
<html>
  <head>
    <script src="../p5.min.js"></script>
    <script src="../addons/p5.dom.min.js"></script>
    <script src="../addons/p5.sound.min.js"></script>
    <script>
     var n = 0;
var c = 4;



function setup()
{
    createCanvas(400,400);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);
}

function draw()
{
    var a = n * 37.5;
    var r = c * sqrt(n);
    
    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;
    
    
    fill((a-r)%256,255,255);
    
    ellipse(x,y,4,4);
    
    n++;
    
}
    </script>
    <style> body {padding: 0; margin: 0;} </style>
  </head>
  <body>
  </body>
  </html>
