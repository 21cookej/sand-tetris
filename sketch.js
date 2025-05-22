const mapTemplate = [
  "x                  x",
  "x                  x",
  "x                  x",
  "x                  x",
  "x                  x",
  "x                  x",
  "xxxxxxxxxxxxxxxxxxxx"
];

let pf;

function setup() {
  let canvas = createCanvas(600, 900);
  canvas.parent('canvasBox'); // Attach canvas to div
  pf = new Playfield(20, 30);
  pf.loadCustomMap(mapTemplate, "#00FFCC");
}

function draw() {
  background(0);
  pf.show();
}
