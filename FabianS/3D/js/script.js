

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// https://polyhaven.com/
// https://www.fr.de/panorama/geschichte-vom-louvre-passwort-bis-zu-den-atom-codes-die-schlimmsten-security-fails-der-94028611.html
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let drx = 0;
let dry = 0
let drz = 0;
let move = 0;
let mySquares = []
var world = document.getElementById("world");


// Konstruktor
function player(x = 0, y = 0, z = 0, vx = 0, vy = 0, vz = 0){
    this.x = x 
    this.y = y 
    this.z = z
    this.vx = x
    this.vy = y
    this.vz = z
    console.log(x, y, z)
}
function update(){
    world.style.transform = `translate3d(${pawn.x}px, ${pawn.y}px, ${pawn.z}px)`
}


let game = setInterval(update, 10);
console.log("new player")
var pawn = new player(0, 0, 0, 0, 0, 0)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let squares = [
    // TranslateVal1, TranslateVal2, TranslateVal3, , , , width, height, color, opacity
    [500, 300, 100, 0, 0, 0, 200, 200, "blueviolet", 0.5],
    [500, 300, -100, 0, 0, 0, 200, 200, "yellowgreen", 0.5],
    [500, 400, 0, 90, 0, 0, 200, 200, "black", 0.5],
    [500, 200, 0, 90, 0, 0, 200, 200, "red", 0.5],
    [600, 300, 0, 0, 90, 0, 200, 200, "blue", 0.5],
    [400, 300, 0, 0, 90, 0, 200, 200, "green", 0.5]
];

let myRoom = [
    // x,    y,     Z, Winkelx,Winkely,Winkelz,         X,      Y,      color,      ,        
    
    // Floor
    [0,     100,    0,      90,     0,      0,          2000,   2000,   "brown",    1,  "url('textures/floor_01.jpg')"],
    
    // Wall 1 - vorne
    [0,     0,    -1000,  0,      0,      0,            2000,   200,    "brown",    1,  "url('textures/sandy_wall.jpg')"],
    
    
    // Wall 2 - hinten
    [0,     0,    1000,   0,      0,      0,          2000,   200,    "brown",    1,  "url('textures/sandy_wall.jpg')"],
    
    // Wall 3 = rechts
    [1000,  0,    0,      0,      90,     0,          2000,   200,    "brown",    1,  "url('textures/sandy_wall.jpg')"],
    
    // Wall 4 = Links
    [-1000, 0,    0,      0,       90,      0,         2000,  200,    "brown",    1,  "url('textures/sandy_wall.jpg')"],

    // Decke
    [0, -100, 0, 90, 0, 0, 2000, 2000, "brown", 1, "url('textures/wood_ceiling.jpg')"],
];
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%





function drawMyWorld(squares, name) {
    for (let i = 0; i < squares.length; i++) {
        let mySquare1 = document.createElement("div");
        mySquare1.id = `${name}${i}`;
        mySquare1.style.position = "absolute";
        mySquare1.style.width = `${squares[i][6]}px`;
        mySquare1.style.height = `${squares[i][7]}px`;
        if (squares[i][10]){
            mySquare1.style.backgroundImage = squares[i][10];
        } 
        else{
            mySquare1.style.backgroundColor = squares[i][8];
        }
        mySquare1.style.transform = `translate3d(${600 + squares[i][0] - squares[i][6] / 2}px, ${400 + squares[i][1] - squares[i][7] / 2}px, ${squares[i][2]}px) rotateX(${squares[i][3]}deg) rotateY(${squares[i][4]}deg) rotateZ(${squares[i][5]}deg)`;
        mySquare1.style.opacity = squares[i][9];
        world.appendChild(mySquare1);
    }
}

// Mauern und Wände 
drawMyWorld(myRoom, "wall")
// Würfel 
// drawMyWorld(squares, "MMM");





// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Functions logical
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
document.addEventListener("keydown", (event) =>{
    // console.log("Key: " + event.key)
    if(
        event.key == "ArrowUp"
        || 
        event.key == "w"
    ){
        drx++;
        // world.style.transform = `rotateX(${drx}deg)`
        console.log("up")
    }
    
    if(
        event.key == "ArrowDown"
        || 
        event.key == "s"
    ){
        drx--;
        // world.style.transform = `rotateX(${drx}deg)`
        console.log("up")
    }

    if(
        event.key == "ArrowLeft"
        || 
        event.key == "a"
    ){
        dry--;
        // world.style.transform = `rotateY(${dry}deg)`
    }

    if(
        event.key == "ArrowRight"
        || 
        event.key == "d"
    ){
        dry++;
        // world.style.transform = `rotateY(${dry}deg)`
        console.log("up")
    }

    if(event.key == "c"){
        // world.style.transform = `rotateY(${dry}deg)`
        move++
    }
    if(event.key == "v"){
        // world.style.transform = `rotateY(${dry}deg)`
        move--
    }
    
    // Question_ Axis-Anordnung ist mega komisch?
    world.style.transform = `
        rotateX(${drx}deg) 
        rotateY(${dry}deg) 
        rotateZ(${drz}deg)

        translateX(${move}px)
        translateZ(${move}px)
    `;
        // translateY(${move}px)
    // IF-Abfrage inwieweit

})

