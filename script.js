console.log("Script loaded"); // Confirms JS is connected

function createGrid(size) {
    const container = document.getElementById("container");

    // Clear existing squares if any
    container.innerHTML = "";

    console.log(`Creating a ${size}x${size} grid`);

    const totalSquares = size * size;
    const squareSize = 512 / size; // Each square's size (assuming container is 512px wide)

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");

        // Set square size dynamically
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        // Add drawing effect
        square.addEventListener("mouseover", function () {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(square);

        // Optional logging per square
        console.log(`Square ${i + 1} created`);
    }
}

// Create the initial 16x16 grid
createGrid(16);

// Listen for button click
document.getElementById("resizeBtn").addEventListener("click", function () {
    let newSize = prompt("Enter grid size (1–100):");

    newSize = parseInt(newSize); // Convert to number

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a number between 1 and 100.");
        return;
    }

    createGrid(newSize); // Create new grid
});
