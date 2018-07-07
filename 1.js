let selection = 0;

function setup(){
  createCanvas(500, 500);
  frameRate(3);
  //noLoop();
}

function draw()
{
  background(255);
  for(let i=0; i<200; i++){
    //push();
    //translate(random(width), random(height));

    strokeWeight(random(10));

    if(mouseX<width/2 && mouseY<height/2)
    {stroke(255, 102, 0, random(255));}

    if(mouseX<width/2 && mouseY>height/2)
    {stroke(3, 255, 0, random(255));}

    if(mouseX>width/2 && mouseY<height/2)
    {stroke(0, 70, 255, random(255));}

    if(mouseX>width/2 && mouseY>height/2)
    {stroke(255,0,170, random(255));}


    if(key === "c") selection =0;//keyCode use three ===
    if(key === "t") selection =1;//  use"", rather ''
    if(key === "r") selection =2;

    if(selection ==0) c();
    if(selection ==1) t();
    if(selection ==2) r();

    //pop();

    //ellipse(random(width),random(height), 50, 50);
  }
}
function c()
{ellipse(random(width),random(height), 50, 50);}

function r()
{rect(random(width),random(height), 50, 50);}
