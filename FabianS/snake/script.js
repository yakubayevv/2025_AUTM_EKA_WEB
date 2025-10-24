const canvas = document.getElementById("game"); //refering to the canvas element in html file
const ctx = canvas.getContext("2d"); //enables us to use some tools for drawing such like fillRect, drawImage etc. 

let myPlayground = new Image(); // create an empty Image object
myPlayground.src = "img/ground.png"; // we set the property src equal to the path to the file we want to diplay 
let myCarrot = new Image();
myCarrot.src = "img/carrot.png";

let dir = ""

function y_val(){
    y = (Math.trunc(15*Math.random())+3)
    return y;
}
function x_val(){
    y = (Math.trunc(17*Math.random())+1)
    return y;
}

let counter = 0;
let box = 32;
let food_coords = {
    //(Math.trunc(17*Math.random())+1)*box,
    x: x_val() * box,
    //(Math.trunc(15*Math.random())+3)*box, 
    y: y_val() * box,
    type: "carrot"
}

let snake = []
snake[0] = {
    x: 9 * box,
    y:  10 * box
}
let newHead = {
    x: 0,
    y:0
}


function drawGame(){ // the function for drawing the game
    ctx.drawImage(myPlayground, 0, 0);
    ctx.drawImage(myCarrot, food_coords.x, food_coords.y);
    ctx.fillStyle = "#305CDE";
    
    for(let c = 0; c < snake.length; c++){
        ctx.fillRect(snake[c].x, snake[c].y, box, box);
    }

    if(dir === "up"){

    }
    else     if(dir === "down"){

    }
    else     if(dir === "left"){

    }
    else     if(dir === "right"){

    }
}

// we create a refresh of the scene each 100 ms, 
// each 100 ms the funciton drawGame will be used
let myGame = setInterval(drawGame, 100) 

document.addEventListener('keydown', function(event){
    // Überprüfen der Taste mit event.key
    console.log(counter++)
    lastCommand = ""
    if (
        event.key === 'ArrowUp' 
        ||
        event.key === "w"
    ){
        console.log('Pfeil nach oben gedrückt');
        newHead={
            x: snake[0].x ,
            y: snake[0].y - box
        }
        dir = "up"
    } 
    
    else if (
        event.key === 'ArrowDown' 
        ||
        event.key === "s"){
        console.log('Pfeil nach unten gedrückt');
            newHead={
            x: snake[0].x ,
            y: snake[0].y + box
        }
        dir = "down"
    } 
    
    else if (
        event.key === 'ArrowLeft' 
        ||
        event.key === "a"
    ){
        console.log('Pfeil nach links gedrückt');
            newHead={
            x: snake[0].x - box,
            y: snake[0].y 
        }
        dir = "left"
    } 
  
    else if (
        event.key === 'ArrowRight' 
        ||
        event.key === "d"
    ){
        console.log('Pfeil nach rechts gedrückt');
        newHead={
            x: snake[0].x + box,
            y: snake[0].y 
        }
        dir = "right"
    }
    console.log("jgdkl")
    snake.unshift(newHead)
    
    // /////////////////////////////////////////////////////
    // Abfrage ob ein Food gefunden wurde
    // /////////////////////////////////////////////////////
    if(food_coords.x == snake[0].x && food_coords.y == snake[0].y){
        new_x = x_val() * box
        new_y = y_val() * box
        while(is_documented(new_x, new_y)){
            console.log("new Position")
            new_x = x_val() * box
            new_y = y_val() * box
        }
        food_coords = {
            //(Math.trunc(17*Math.random())+1)*box,
            x: x_val() * box,
            //(Math.trunc(15*Math.random())+3)*box, 
            y: y_val() * box,
            type: "carrot"
        }
    }
    else{
        console.log("it's unequal")
        snake.pop()
    }
});

function is_documented(new_x, new_y) {
    let found = snake.find(element =>
        element.x === new_x && element.y === new_y
    );
    is_doc = found ? true : false
    console.log("Gefunden:", found ? true : false);
    return is_doc;
}