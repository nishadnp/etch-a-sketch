const container = document.getElementById('container');

const GRID_ORDER = 16;
// Create 256 divs inside #container div
for (let i = 1; i <= GRID_ORDER ** 2; i++) {
    const gridSquare = document.createElement('div');
    gridSquare.classList.add('grid-square');
    gridSquare.id = `grid-square-${i}`;
    container.appendChild(gridSquare);
}


const gridSquares = document.querySelectorAll('.grid-square');

// For each square in grid
gridSquares.forEach((square) => {
    // Fill black color in square div when mouse cursor passes over it.
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = "black";
    })
});