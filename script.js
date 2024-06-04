// Get the draggable container
const container = document.getElementById("container");

// Initialize variables to store mouse position
let offsetX, offsetY;

// Function to handle mouse down event
function handleMouseDown(event) {
    // Store initial mouse position
    offsetX = event.clientX - container.offsetLeft;
    offsetY = event.clientY - container.offsetTop;

    // Add event listeners for mouse move and mouse up events
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
}

// Function to handle mouse move event
function handleMouseMove(event) {
    // Calculate new position of the container based on mouse position
    const newX = event.clientX - offsetX;
    const newY = event.clientY - offsetY;

    // Update container position
    container.style.left = newX + "px";
    container.style.top = newY + "px";
}

// Function to handle mouse up event
function handleMouseUp() {
    // Remove event listeners for mouse move and mouse up events
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
}

// Add event listener for mouse down event on the container
container.addEventListener("mousedown", handleMouseDown);

