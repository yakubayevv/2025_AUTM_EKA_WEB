const canvas = document.getElementById("game"); //refering to the canvas element in html file
const ctx = canvas.getContext("2d"); //enables us to use some tools for drawing such like fillRect, drawImage etc. 

let myPlayground = new Image(); // create an empty Image object
let myCarrot = new Image();
let dir = ""
let counter = 0;
let box = 32;
let snake = []
let newHead = {
    x: 0,
    y: 0
}
let automatic_run= false
let food_coords = ""
let can_move = false 
let points = 0

function y_val(){
    ber_y = (Math.trunc(15*Math.random())+3)
    return ber_y;
}
function x_val(){
    ber_x = (Math.trunc(17*Math.random())+1)
    return ber_x;
}


myPlayground.src = "img/ground.png"; // we set the property src equal to the path to the file we want to diplay 
myCarrot.src = "img/carrot.png";



food_coords = {
    //(Math.trunc(17*Math.random())+1)*box,
    x: x_val() * box,
    //(Math.trunc(15*Math.random())+3)*box, 
    y: y_val() * box,
    type: "carrot"
}

snake[0] = {
    x: 9 * box,
    y:  10 * box
}


function drawGame(){ // the function for drawing the game
    ctx.drawImage(myPlayground, 0, 0);
    ctx.drawImage(myCarrot, food_coords.x, food_coords.y);
    ctx.fillStyle = "#305CDE";

    ctx.font = "50px serif";
    ctx.fillText("Points:" + points, box, 1.5 * box)

    for(let c = 0; c < snake.length; c++){
        ctx.fillRect(snake[c].x, snake[c].y, box, box);
    }

    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    // IF you want continue walk
    // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    if(automatic_run){
        move_snake()
        check_if_its_eaten()
    }

}

// we create a refresh of the scene each 100 ms, 
// each 100 ms the funciton drawGame will be used
let myGame = setInterval(drawGame, 100) 

document.addEventListener('keydown', function(event){
    // Überprüfen der Taste mit event.key
    can_move = false
    console.log(counter++)
    if (
        (
            event.key === 'ArrowUp' 
            ||
            event.key === "w"
        )
        &&         dir != "down"
        // && snake.length > 1
    ){
        dir = "up"
        can_move = true
    } 
    
    else if (
        (
            event.key === 'ArrowDown' 
            ||
            event.key === "s"
        )
        && dir != "up"
        // && snake.length > 1
    ){
        dir = "down"
        can_move = true
    } 
    
    else if (
        (
            event.key === 'ArrowLeft' 
            ||
            event.key === "a"
        )
        &&         dir != "right"
        // && snake.length > 1
    ){
        dir = "left"
        can_move = true
    } 
  
    else if (
        (
            event.key === 'ArrowRight' 
            ||
            event.key === "d"       
        )
        &&         dir != "left"
        // && snake.length > 1
    ){
        dir = "right"
        can_move = true
    }
    
    if(!automatic_run){
        move_snake()
        check_if_its_eaten()
    }
    
});

function is_documented(new_x, new_y) {
    let found = snake.find(element =>
        element.x === new_x && element.y === new_y
    );
    is_doc = found ? true : false
    console.log("Gefunden:", is_doc);
    return is_doc;
}

function check_if_snake_is_on_boarder(newHead){
    console.log( 
         canvas.width / box,

         canvas.height
    )
    if(
        snake[0].x < 0 
        || snake[0].x >= 
        // canvas.width / box
        18 * box
        || snake[0].y < 0 
        || snake[0].y >= 
        // canvas.height / box
        18 * box
    ){
        clearInterval(myGame)
    }

    if(
        newHead.x < 0 
        || newHead.x > 18 * box
        || newHead.y < 0 
        || newHead.y > 18 * box
    ){
        clearInterval(myGame)
    }
}

function move_snake(){
    console.log(can_move, dir)
    if(
        dir == "up"
    ){
        console.log('Pfeil nach oben gedrückt');
        newHead={
            x: snake[0].x ,
            y: snake[0].y - box
        }
    }
    if(
        dir == "down"
    ){
        console.log('Pfeil nach unten gedrückt');
            newHead={
            x: snake[0].x ,
            y: snake[0].y + box
        }
    }
    if(
        dir == "left"
    ){
        console.log('Pfeil nach links gedrückt');
            newHead={
            x: snake[0].x - box,
            y: snake[0].y 
        }
            }
    if(
        dir == "right"
    ){
        console.log('Pfeil nach rechts gedrückt');
        newHead={
            x: snake[0].x + box,
            y: snake[0].y 
        }
    }
    if (can_move){
        check_if_snake_is_on_boarder(newHead)
        snake.unshift(newHead)
    }
}

function check_if_its_eaten(){
    
    if(
        // can_move && 
        food_coords.x == snake[0].x && food_coords.y == snake[0].y
    ){
        new_x = x_val() * box
        new_y = y_val() * box
        while(is_documented(new_x, new_y)){
            console.log("new Position")
            new_x = x_val() * box
            new_y = y_val() * box
        }
        points++
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
        if(can_move){
            snake.pop()
        }
    }
}