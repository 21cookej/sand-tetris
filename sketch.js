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
    createCanvas(600, 900);
    pf = new Playfield(20, 30); // cols x rows
    pf.loadCustomMap(mapTemplate, "#00FFCC");
}

function draw() {
    background(0);
    pf.show();
}
