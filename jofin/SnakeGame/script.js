const canvas = document.getElementById("game"); 
const ctx = canvas.getContext("2d"); 

let myPlayground = new Image(); 
myPlayground.src = "img/ground.png"; 

let myCarrot = new Image();
myCarrot.src = "img/carrot.png";

let myWatermelon = new Image();
myWatermelon.src = "img/watermelon.png";

let box = 32; // Only declare once!

// Only one food object is needed for the current food item
let food_coords = {
    type: Math.random() < 0.5 ? "carrot" : "watermelon",
};

// Function to generate new, random coordinates for the food
function generateFoodPosition() {
    food_coords.x = (Math.trunc(17 * Math.random()) + 1) * box;
    food_coords.y = (Math.trunc(12 * Math.random()) + 3) * box;
}

// Set the initial position
generateFoodPosition();

function drawGame(){ 
    // 1. Draw the background
    ctx.drawImage(myPlayground, 0, 0);

    // 2. Draw the correct food item based on its type
    if (food_coords.type === "carrot") {
        ctx.drawImage(myCarrot, food_coords.x, food_coords.y);
    } else if (food_coords.type === "watermelon") {
        ctx.drawImage(myWatermelon, food_coords.x, food_coords.y);
    }
    
    // NOTE: You would typically have code here to draw your snake/player
    // and check for collisions with the food.
}

let myGame = setInterval(drawGame, 100);