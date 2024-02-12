// Removes Grid
function createGrid(gridOrder) {
    // Create 256 divs inside #container div
    for (let i = 1; i <= gridOrder ** 2; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        container.appendChild(gridSquare);

        // Resize gridSquare width and height proportional to gridOrder
        gridSquare.style.width = `calc(100% / ${gridOrder}`;
        gridSquare.style.height = `calc(100% / ${gridOrder}`;
    }
}

// Removes Grid
function removeGrid(gridOrder) {
    for (let i = 1; i <= gridOrder ** 2; i++) {
        const gridSquare = document.querySelector('.grid-square');
        container.removeChild(gridSquare);
    }
}

// Function that activates pen to sketch
function sketchPen() {
    // For each square in grid
    document.querySelectorAll('.grid-square').forEach((square) => {
    // Fill black color in square div when mouse cursor passes over it.
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "black";
        });
    });
}

// Reset Grid button event
document.getElementById('grid-reset').addEventListener('click', () => {
    // Prompt user new grid size
    let newGridOrder = parseInt(prompt("Enter New Grid Size (16 - 100): "));

    // If true, reset grid
    if (!isNaN(newGridOrder) && (newGridOrder >= 16 && newGridOrder <= 100)) 
    {
        // Remove existing grid
        removeGrid(gridOrder);

        gridOrder = newGridOrder;
        // New grid
        createGrid(gridOrder);

        sketchPen();
    }
    else 
    {
        alert("Invalid Input!");
    }
});


// <-------Main code------->

const container = document.getElementById('container');
// Default gridOrder value
let gridOrder = 16;
// Initial grid
createGrid(gridOrder);

sketchPen();
