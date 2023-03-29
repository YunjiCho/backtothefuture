let SArray = new Array(6);
let XArray = new Array(6);
let YArray = new Array(6);

let saying1 = "Lightning will strike at 10:05";
// let saying2 = "at 10:05.";
let saying3 = "Then, I can finally go back!";

let len1, len2, len3, len4;
let clock, c;
let p0, p1, p2, p3, p4, dark, light, bgdark, bglight, fog, logo, logo1;
let picArray = new Array(6);
let font;
let ah = 0.0;
let am = 0.0;
let as = 0.0;
let i = 0;
let si = 0;
let ssi = 0;
let h = 8;
let m = 20;
let s = 60;
let speeds=0;
let speeds1=0;
let o = 255;
let xpos = -273 - 600 / 2;
let ypos = -83 - (840 / 6) * 5;
let bw = 0 - 600 / 2;
let bh = 0 - (840 / 5) * 4;
let sah = -50;
let sam = -90;
let sas = -95;

picArray[0] = p0; //시작
picArray[1] = p0;
picArray[2] = p1;
picArray[3] = p2;
picArray[4] = p3;
picArray[5] = p4;

let label1 = "There's still a lot of time left";
let label2 = "We have to wait a little longer";
let label3 = "We're almost there.";
let label4 = "There's really a little bit left.";
let label5 = " ";

SArray[0] = label5;
SArray[1] = label1;
SArray[2] = label2;
SArray[3] = label3;
SArray[4] = label4;
SArray[5] = label5;

XArray[0] = 0;
XArray[1] = -80;
XArray[2] = 80;
XArray[3] = -100;
XArray[4] = 100;
XArray[5] = 0;

YArray[0] = 0;
YArray[1] = -240;
YArray[2] = -20;
YArray[3] = -280;
YArray[4] = 0;
YArray[5] = 0;

function preload() {
  p0 = loadImage("75.png");
  p1 = loadImage("100.png");
  p2 = loadImage("150.png");
  p3 = loadImage("h.png");
  p4 = loadImage("afterbg.png");
  bglight = loadImage("afterbgmousepd.png");
  logo1 = loadImage("logo1.png");

  bgdark = loadImage("afterbg.png");
  dark = loadImage("light.png");
  light = loadImage("afterbglight.png");

  fog = loadImage("fog.png");
  logo = loadImage("logo.png");

  clock = loadImage("clock.png");
}

function setup() {
  frameRate(20);
  textFont("Georgia");
  canvas = createCanvas(600, 840);
  canvas.position(windowWidth/2-600/2,windowHeight/2-840/2);
  background("#000015");
  picArray[0] = p0; // 시작
  picArray[1] = p0;
  picArray[2] = p1;
  picArray[3] = p2;
  picArray[4] = p3;
  picArray[5] = p4;

  let label1 = "There's still a lot of time left";
  let label2 = "We have to wait a little longer";
  let label3 = "We're almost there.";
  let label4 = "There's really a little bit left.";
  let label5 = " ";
  SArray[0] = label5;
  SArray[1] = label1;
  SArray[2] = label2;
  SArray[3] = label3;
  SArray[4] = label4;
  SArray[5] = label5;

  XArray[0] = 0;
  XArray[1] = -80;
  XArray[2] = 80;
  XArray[3] = -100;
  XArray[4] = 100;
  XArray[5] = 0;

  YArray[0] = 0;
  YArray[1] = -240;
  YArray[2] = -20;
  YArray[3] = -280;
  YArray[4] = 0;
  YArray[5] = 0;

  //textFont(font);
  //shape(beforebg,0-width/2, 0-height / 6 *5, width+139, height+10);
}
function draw() {
  translate(width / 2, (height / 6) * 5);
  if (ah == 360) {
    ah = 0;
  }
  if (am == 360) {
    am = 0;
  }

  image(
    picArray[i],
    -65 - width / 2,
    -8 - (height / 6) * 5,
    width + 139,
    height + 193
  );

  fill(255);
  text(SArray[si], -170 + XArray[si], 388 - (height / 6) * 5 + YArray[si]);
  if (i == 5) {
    image(
      logo,
      71 - width / 2,
      146 - (height / 6) * 5,
      width + -133,
      height + -624
    );
    
    //안개
    //image(fog, xpos, ypos - speed + 380, width + 410, height + 83);
    image(fog, xpos, ypos - speeds + 450, width + 410, height + 83);
    console.log(ypos);
    ypos = -83 - (height / 6) * 5;
    speeds += 3.8;
    ssi += 1;
    if ((ssi - (ssi % 2)) / 2 == 1) {
      image(
        bglight,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
      image(
        logo1,
        71 - width / 2,
        146 - (height / 6) * 5,
        width + -133,
        height + -624
      );
      image(
        light,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
    }
    if ((ssi - (ssi % 1.8)) / 1.8 == 3) {
      image(
        bglight,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
      image(
        logo1,
        71 - width / 2,
        146 - (height / 6) * 5,
        width + -133,
        height + -624
      );
      image(
        light,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
    }
    if ((ssi - (ssi % 2.6)) / 2.6 == 5) {
      image(
        bglight,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
      image(
        logo1,
        71 - width / 2,
        146 - (height / 6) * 5,
        width + -133,
        height + -624
      );
      image(
        light,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
    }
    if ((ssi - (ssi % 3)) / 3 == 7) {
      image(
        bglight,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
      image(
        logo1,
        71 - width / 2,
        146 - (height / 6) * 5,
        width + -133,
        height + -624
      );
      image(
        light,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
    }

    if ((ssi - (ssi % 2.6)) / 2.6 == 9) {
      image(
        bglight,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
      image(
        logo1,
        71 - width / 2,
        146 - (height / 6) * 5,
        width + -133,
        height + -624
      );
      image(
        light,
        -65 - width / 2,
        -8 - (height / 6) * 5,
        width + 139,
        height + 193
      );
    }
  }
  if (ssi > 125 && ssi < 131) {
    image(
      picArray[4],
      -65 - width / 2,
      -8 - (height / 6) * 5,
      width + 139,
      height + 193
    );
    image(
      logo,
      71 - width / 2 + ((width + -133) * (ssi - 130)) / 20,
      146 - (height / 6) * 5 + ((height + -624) * (ssi - 130)) / 20,
      ((width + -133) * (140 - ssi)) / 10,
      ((height + -624) * (140 - ssi)) / 10
    );
  }
  if (ssi > 130 && ssi < 136) {
    image(
      picArray[3],
      -65 - width / 2,
      -8 - (height / 6) * 5,
      width + 139,
      height + 193
    );
    image(
      logo,
      71 - width / 2 + ((width + -133) * (ssi - 130)) / 20,
      146 - (height / 6) * 5 + ((height + -624) * (ssi - 130)) / 20,
      ((width + -133) * (140 - ssi)) / 10,
      ((height + -624) * (140 - ssi)) / 10
    );
  }
  if (ssi > 135 && ssi < 140) {
    image(
      picArray[2],
      -65 - width / 2,
      -8 - (height / 6) * 5,
      width + 139,
      height + 193
    );
    image(
      logo,
      71 - width / 2 + ((width + -133) * (ssi - 130)) / 20,
      146 - (height / 6) * 5 + ((height + -624) * (ssi - 130)) / 20,
      ((width + -133) * (140 - ssi)) / 10,
      ((height + -624) * (140 - ssi)) / 10
    );
  }
  if (ssi == 140) {
    ah = 0.0;
    am = 0.0;
    as = 0.0;
    i = 0;
    si = 0;
    ssi = 0;
    h = 8;
    m = 20;
    s = 60;
    o = 255;
    xpos = -273 - width / 2;
    ypos = -83 - (height / 6) * 5;
    bw = 0 - width / 2;
    bh = 0 - (height / 5) * 4;
    sah = -50;
    sam = -90;
    sas = -95;
    speeds1 = 0;
  }
  //시작문구
  if (i == 0) {
    fill(255, o);
    o += -1;
    textSize(26);
    text(saying1, 134 - width / 2, 355 - (height / 6) * 5);
    // text(saying2, 379 - width / 2, 365 - (height / 6) * 5);
    text(saying3, 143 - width / 2, 390 - (height / 6) * 5);
  }
  image(clock, -299 - 20, -699 + 48);
  strokeCap(PROJECT);
  stroke(0);

  push();
  rotate(radians(ah));
  //시침
  strokeWeight(12);
  line(0, -12, 0, sah);
  //if (ah)
  pop();
  ah += h;

  push();
  rotate(radians(am));
  //분침
  strokeWeight(9);
  line(0, -12, 0, sam);
  pop();
  am += m;

  push();
  rotate(radians(as));
  //초침
  strokeWeight(4);
  line(0, -12, 0, sas);
  pop();
  as += s;

  //시계가운데 고정핀
  noStroke();
  fill(0);
  circle(0, 0, 20);
}
function keyPressed() {
  // if (key == 'ENTER') {
    if (ah > 0 && ah < 75) {
      i = 1;
      si = 1;
    } else if (ah > 105 && ah < 150) {
      i = 2;
      si = 2;
    } else if (ah > 151 && ah < 225) {
      i = 3;
      si = 3;
    } else if (ah > 226 && ah < 300) {
      i = 4;
      si = 4;
    } else if (ah > 301 && ah < 360 && i != 5) {
      ah = 305;
      am = 27;
      h = 0;
      m = 0;
      s = 0;
      i = 5;
      si = 5;
      image(bglight, xpos, ypos - speeds1 + 400, width + 410, height + 83);
      fill(0, 0, 0, 0);
    }
    //print(i);
  // }
}
class Typo {
  constructor(_txt, _x, _y, _size) {
    this.txt = _txt;
    this.px = _x;
    this.py = _y;
    this.size = _size;
  }

  update() {
    fill("#FFD70D");
    textSize(this.size);
    text(this.txt, this.px, this.py);
  }
}
