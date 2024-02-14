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

// Generate a random RGB color
function generateRGBColor() {
    // Assign seperate random value between 0 to 255 to each parameters of RGB
    const RED_COLOR_LEVEL = Math.floor(Math.random() * 256);
    const GREEN_COLOR_LEVEL = Math.floor(Math.random() * 256);
    const BLUE_COLOR_LEVEL = Math.floor(Math.random() * 256);

    const RGB_COLOR =  `rgb(${RED_COLOR_LEVEL}, ${BLUE_COLOR_LEVEL}, ${GREEN_COLOR_LEVEL})`;
    return RGB_COLOR;
}

// Function that activates pen to sketch
function sketchPen() {
    // For each square in grid
    document.querySelectorAll('.grid-square').forEach((square) => {
    // Fill black color in square div when mouse cursor passes over it.
        square.addEventListener('mouseover', () => {
            const computedStyle = window.getComputedStyle(square);
            // Check if div square is already colored to avoid to recoloring.
            // rgb(211, 211, 211) is the equivalent of #D3D3D3 color.
            if (computedStyle.getPropertyValue("background-color") === "rgb(211, 211, 211)") {
                square.style.backgroundColor = generateRGBColor();
            }               
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
