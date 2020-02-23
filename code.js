var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b1459d01-5f58-43d2-987b-0698341869a3","48d8f1c0-8ac9-4c1f-976c-fbd11ae80825","07ad982d-cde6-408d-8fd3-7a408e96d723","4bca75e6-5986-43e2-b54c-20ee66935dfc","633946eb-9003-4c37-b2d3-abbfb1ed8310","18d30323-00ed-46cd-a45e-49f40fa9c0eb","705c4390-6767-4613-8b87-3bdadcc9cffd","539be0d9-8117-42c2-81f4-44ff4f15ca3d","c0413a9c-ed31-40d1-bea5-420acac6a58e","5b931437-72a4-4e6d-87bf-3c54f1010895","50480320-a219-4309-a5e5-ca06e33ff4d0","2120abb6-d1b9-456e-bcd9-85294509c2e5"],"propsByKey":{"b1459d01-5f58-43d2-987b-0698341869a3":{"name":"wP","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"NqmpIXL3HOLlQ3aRRhpy85eaRi.IhPPg","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/b1459d01-5f58-43d2-987b-0698341869a3.png"},"48d8f1c0-8ac9-4c1f-976c-fbd11ae80825":{"name":"bP","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"ijfRHjrKeQ2dzSfOukuSJNjphvmlMK8h","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/48d8f1c0-8ac9-4c1f-976c-fbd11ae80825.png"},"07ad982d-cde6-408d-8fd3-7a408e96d723":{"name":"wH","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rt3m3i0tOhvMJLI_MQUyWbYH7Vd0MF_r","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/07ad982d-cde6-408d-8fd3-7a408e96d723.png"},"4bca75e6-5986-43e2-b54c-20ee66935dfc":{"name":"bH","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"RfYOo_CyhybJ3ZTaH35w_FtZvOPo2mwP","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/4bca75e6-5986-43e2-b54c-20ee66935dfc.png"},"633946eb-9003-4c37-b2d3-abbfb1ed8310":{"name":"wB","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"PZoV8rQOW7WshinIKSE5AcV47WUW87q7","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/633946eb-9003-4c37-b2d3-abbfb1ed8310.png"},"18d30323-00ed-46cd-a45e-49f40fa9c0eb":{"name":"bB","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"kEdhF5LX3TYrI_H9c7h7RSHze0JrWsSj","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/18d30323-00ed-46cd-a45e-49f40fa9c0eb.png"},"705c4390-6767-4613-8b87-3bdadcc9cffd":{"name":"wR","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"eN4pwYmh8PywbxAkGdLPQ5yZ3knn_tFb","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/705c4390-6767-4613-8b87-3bdadcc9cffd.png"},"539be0d9-8117-42c2-81f4-44ff4f15ca3d":{"name":"bR","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"Gd4RaAyuT4HyOim7hi_.qA0M6UArRcI_","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/539be0d9-8117-42c2-81f4-44ff4f15ca3d.png"},"c0413a9c-ed31-40d1-bea5-420acac6a58e":{"name":"wQ","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"GL_Ecdtd1jb7VQdJ5KcZsTi04abVGkE1","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/c0413a9c-ed31-40d1-bea5-420acac6a58e.png"},"5b931437-72a4-4e6d-87bf-3c54f1010895":{"name":"bQ","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"Fqw_WaaiY3VcuPwdxon8JzAkmckcMieE","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/5b931437-72a4-4e6d-87bf-3c54f1010895.png"},"50480320-a219-4309-a5e5-ca06e33ff4d0":{"name":"wK","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"NrnxaHoPbd0urEPKE9DQ0cI3Vbw4VcV0","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/50480320-a219-4309-a5e5-ca06e33ff4d0.png"},"2120abb6-d1b9-456e-bcd9-85294509c2e5":{"name":"bK","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"qTweX5T8OIiI1b4Tg4hN.zdgk72TtLjZ","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/2120abb6-d1b9-456e-bcd9-85294509c2e5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var pieces = [];
var sprite = [];
var colorR = 255;
var colorG = 222;
var colorB = 173;
var width = 300;
var height = 300;
var x = 0;
var y = 0;
var hl = [];
var hlE = [];
var selected = '';
var mzX = 0;
var mzY = 0;

for (var i = 0; i < 8; i++){
  pieces[i]=["0","0","0","0","0","0","0","0"];
}
for (var i = 0; i < 8; i++){
  sprite[i]=["0","0","0","0","0","0","0","0"];
}

for(var i = 0; i<8;i++){
  dan(i,1);
  pieces[i][1]="wP";
  dan(i,2);
  pieces[i][2]="bP";
}

pieces[0][0]="wR";
pieces[1][0]="wH";
pieces[2][0]="wB";
pieces[3][0]="wQ";
pieces[4][0]="wK";
pieces[5][0]="wB";
pieces[6][0]="wH";
pieces[7][0]="wR";

pieces[0][3]="bR";
pieces[1][3]="bH";
pieces[2][3]="bB";
pieces[3][3]="bQ";
pieces[4][3]="bK";
pieces[5][3]="bB";
pieces[6][3]="bH";
pieces[7][3]="bR";

console.log(" is at " + pieces[0][0].x + ", " + pieces[0][0].y);



function draw() {
  background("white");
  drawCheckerBoard(colorR,colorG,colorB);
  drawSprites();
  if (mouseWentDown("leftButton")){
    checkBox();
    // for(var i = 0; i <= hlE.length; i+=2){
    //   if(hlE[i]==mzX&&hlE[i+1]==mzY){
    //     pieceAt(mzX,mzY).y+=height/8;
    //   }
    // }
    
    
    
    hlE = [];
    hl = [];
    hl[0] = mzX;
    hl[1] = mzY;
    selected=pieces[hl[0]][hl[1]].substring(1,2);
    console.log(selected);
    pawnCheck(hl[0],hl[1]);
  }
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 


function drawCheckerBoard(r,g,b){
  noStroke();
  
  //Board
  
  for(var i = y; i < height+y; i+=height/8){
    for(var j = x; j < width+x; j+=width/8){
      if(((j-x)/(width/8))%2==0^((i-y)/(height/8))%2==0){
        fill(r,g,b);
      }
      else{
        fill(r-116,g-153,b-153);
      }
      rect(j, i, width/8, height/8);
    }
  }
  
  //Possible move ellipses & highlighted squares
  
  fill("green");
  rect((hl[0]*(width/8))+x,(hl[1]*(width/8))+y,width/8,height/8);
  for(var k = 0; k <= hlE.length; k+=2){
    ellipse((hlE[k]*width/8)+width/16+x,(hlE[k+1]*height/8)+height/16+y,15,15);
  }
}


function dan(i,j){               
  if(j==1){
    sprite[i][j] = createSprite((width/8)*(i+1)-width/16+x,y+height/5.25);
    sprite[i][j].setAnimation("wP");
  }
  else{
    sprite[i][j] = createSprite((width/8)*(i+1)-width/16+x,y+height/1.225);
    sprite[i][j].setAnimation("bP");
  }
  sprite[i][j].width = width/8;
  sprite[i][j].height = height/8;
  
}


// function movePawn(x,y){

// }


function pawnCheck(x,y){
  var pawn = pieces[x][y].substring(0,1);
  if (pawn[0]=='b'){
    if(y==6){
      hlE[hlE.length]=x;
      hlE[hlE.length]=y-2;
    }
    hlE[hlE.length]=x;
    hlE[hlE.length]=y-1;
  }
  else if (pawn[0]=='w'){
    if(y==1){
      hlE[hlE.length]=x;
      hlE[hlE.length]=y+2;
    }
    hlE[hlE.length]=x;
    hlE[hlE.length]=y+1;
  }
}

// Clean up at the end


function cC(i){
  if(World.mouseY<y+(height/8)*(i+1)){
    return true;
  }
  else{
    return false;
  }
}
function cR(i){
  if(World.mouseX<x+(width/8)*(i+1)){
    return true;
  }
  else{
    return false;
  }
}

function checkBox(){
  for(var i = 0; i<8; i++){
    if(cR(i)){
      mzX = i;
      break;
    }
  }
  for(var j = 0; j<8; j++){
    if(cC(j)){
      mzY = j;
      break;
    }
  }
}


function pieceAt(xC,yC){
  for(var i = 0; i<8; i++){
    for(var j = 0; j<4; j++){
      if(((sprite[i][j].x-x)/(width/8)==xC)&&((sprite[i][j].y-y)/(width/8)==yC)){
        return sprite[i][j];
      }
    }
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
