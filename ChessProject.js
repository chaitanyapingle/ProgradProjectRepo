function makeBoard(cols, rows) {
    Let array = new Array(cols);
    for (Let i = 0; i < array.length; i++) {
        array[i] = new Array(rows);
    }
    return array;
}
Let board w;
const cols = 8,
    rows = 8;

function setup() {
    createCanvas(800, 800);
    w = floor(width / cols);
    board = makeBoard(cols, rows);
    for (Let i = 0; i < cols; i++) {
        for (Let j = 0; j < rows; j++) {
            board[i][j] = new Cell(i, j, w, null, null);
        }
    }
}

function draw() {
    background(0);
    for (Let i = 0; i < cols; i++) {
        for (Let j = 0; j < rows; j++) {
            board[i][j].display();
        }
    }
}

function Cell(i, j, w, state, type) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.state = state;
    this.type = type;
    this.draw = () => {
        if (this.i % 2 == this.j % 2) {
            fill(225);
        }
        rect(this.x, this.y, this.w - 1, this.w - 1);
    }
}