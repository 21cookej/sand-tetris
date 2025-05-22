class Playfield {

    constructor(w, h) {
        // colors
        this.foreground = 230;
        this.background = [255];

        // dimensions and grid
        this.cols = w;
        this.rows = h;
        this.grid = [];
        this.resetGrid();

        // drawing sizes
        const canvasContainer = select('#canvasBox');
        this.cellSize = canvasContainer.width / w;
        this.borderSize = 2;

        // whether or not gridlines are seen
        this.gridlines = false;
    }

    addToGrid(piece) {
        for (let row = 0; row < piece.size; row++) {
            for (let col = 0; col < piece.size; col++) {
                if (piece.cells[row][col] != null) {
                    let gridRow = piece.y + row;
                    let gridCol = piece.x + col;
                    this.grid[gridRow][gridCol] = piece.cells[row][col];
                }
            }
        }
    }

    clearLines() {
        linetest(); // your existing function
    }

    isValid(piece) {
        for (let row = 0; row < piece.size; row++) {
            for (let col = 0; col < piece.size; col++) {
                if (piece.cells[row][col] != null) {
                    let gridRow = piece.y + row;
                    let gridCol = piece.x + col;

                    if (
                        gridRow < 0 || gridRow >= this.rows ||
                        gridCol < 0 || gridCol >= this.cols ||
                        this.grid[gridRow][gridCol] != this.foreground
                    ) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    resetGrid() {
        for (let i = 0; i < this.rows; i++) {
            this.grid[i] = new Array(this.cols).fill(this.foreground);
        }
    }

    loadCustomMap(template, hexColor) {
        this.resetGrid();
        const p5Color = color(hexColor); // convert HEX string to p5.js color
        for (let row = 0; row < template.length; row++) {
            const line = template[row];
            for (let col = 0; col < line.length; col++) {
                if (line[col] === 'x') {
                    if (row < this.rows && col < this.cols) {
                        this.grid[row][col] = p5Color;
                    }
                }
            }
        }
    }

    show() {
        let bs = this.borderSize;
        let cs = this.cellSize;

        if (this.gridlines) fill(this.background);
        else fill(this.foreground);

        stroke(this.background);
        strokeWeight(bs);

        let offset = floor(bs / 2);
        rect(offset, offset, cs * this.cols + bs - 1, cs * this.rows + bs - 1);

        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[row].length; col++) {
                let offset = this.borderSize;
                let cs = this.cellSize;

                stroke(this.grid[row][col]);
                fill(this.grid[row][col]);

                rect(cs * col + offset, cs * row + offset, cs - 1, cs - 1);
            }
        }
    }
}
