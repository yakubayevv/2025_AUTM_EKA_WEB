

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// https://polyhaven.com/
// https://www.fr.de/panorama/geschichte-vom-louvre-passwort-bis-zu-den-atom-codes-die-schlimmsten-security-fails-der-94028611.html
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const DEG = Math.PI/180;

let drx = 0;
let dry = 0
let drz = 0;
let move = 0;
let dx = 0;
let dy = 0;
let dz = 0
let mySquares = []

let pressForward = 0
let pressBack = 0
let pressRight = 0
let pressLeft = 0;
let mouseX = 0
let mouseY = 0;
let mouseSensitivity = 0.5
let lock = false 

// 3x3 2d Rotation
var world = document.getElementById("world");
let container = document.getElementById("container")



// Konstruktor
function player(x,
     y,
     z,
     rx,
     ry,
     vx,
     vy,
     vz
){
    this.x = x;
    this.y = y;
    this.z = z;
    this.rx = rx;
    this.ry = ry;
    this.vx = vx;
    this.vy = vy;
    this.vz = vz;
}

function update(){
    // original
    dz = +(pressRight - pressLeft) * Math.sin(pawn.ry * DEG) - (pressForward - pressBack) * Math.cos(pawn.ry * DEG)
    dx = +(pressRight - pressLeft) * Math.cos(pawn.ry * DEG) + (pressForward - pressBack) * Math.sin(pawn.ry * DEG)

    let drx = mouseY * mouseSensitivity;
    let dry = mouseX * mouseSensitivity;

    collision(
        myRoom, 
        pawn
    )
    mouseX = 0
    mouseY = 0;

    pawn.z += dz;
    pawn.x += dx;

    if (lock) {
        pawn.rx += drx;
        if ((pawn.rx) > 57){
            pawn.rx = 57
        }  
        if ((pawn.rx) < -37){
            pawn.rx = -37
        }  
        pawn.ry += dry;
    }
    world.style.transform = 
        `translateZ(600px) 
        rotateX(${-pawn.rx}deg) 
        rotateY(${pawn.ry}deg) 
        translate3d(${-pawn.x}px,
     ${pawn.y}px,
     ${-pawn.z}px)
    `;
}



let game = setInterval(update,
     10);
var pawn = new player(0,
     0,
     0,
     0,
     0,
     5,
     5,
     5);

document.addEventListener("pointerlockchange",
     (event) => {
    lock = !lock;
})
container.onclick = function () {
    if(!lock){
        container.requestPointerLock();
    }
}




// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// draw My World
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
let squares = [
    // TranslateVal1,
    //  TranslateVal2,
    //  TranslateVal3,
    //  ,
    //  ,
    //  ,
    //  width,
    //  height,
    //  color,
    //  opacity
    [
        500,
        300,
        100,
        0,
        0,
        0,
        200,
        200,
        "blueviolet",
        0.5
    ],
    
    [
        500,
        300,
        -100,
        0,
        0,
        0,
        200,
        200,
        "yellowgreen",
        0.5
    ],
    
    [
        500,
        400,
        0,
        90,
        0,
        0,
        200,
        200,
        "black",
        0.5
    ],
    
    [
        500,
        200,
        0,
        90,
        0,
        0,
        200,
        200,
        "red",
        0.5
    ],
    
    [
        600,
        300,
        0,
        0,
        90,
        0,
        200,
        200,
        "blue",
        0.5
    ],
    
    [
        400,
        300,
        0,
        0,
        90,
        0,
        200,
        200,
        "green",
        0.5
    ]
];

let myRoom = [
    // [
    //     x,
    //     y,
    //     Z,
    //     Winkelx,
    //     Winkely,
    //     Winkelz,
    //     X,
    //     Y,
    //     color,
    //     ,
    //     Image
    // ]

    // Floor
    [
        0,
        100,
        0,
        90,
        0,
        0,
        2000,
        2000,
        "brown",
        1,
        "url('textures/floor_01.jpg')"
    ],
    
    
    // Wall 1 - vorne
    [
        0,
        0,
        -1000,
        0,
        0,
        0,
        2000,
        200,
        "brown",
        1,
        "url('textures/sandy_wall.jpg')"
    ],
    
    
    
    // Wall 2 - hinten
    [
        0,
        0,
        1000,
        0,
        0,
        0,
        2000,
        200,
        "brown",
        1,
        "url('textures/sandy_wall.jpg')"
    ],
    
    
    // Wall 3 = rechts
    [
        1000,
        0,
        0,
        0,
        90,
        0,
        2000,
        200,
        "brown",
        1,
        "url('textures/sandy_wall.jpg')"
    ],
    
    
    // Wall 4 = Links
    [
        -1000,
        0,
        0,
        0,
        90,
        0,
        2000,
        200,
        "brown",
        1,
        "url('textures/sandy_wall.jpg')"
    ],
    
    
    // Decke
    [
        0,
        -100,
        0,
        90,
        0,
        0,
        2000,
        2000,
        "brown",
        1,
        "url('textures/wood_ceiling.jpg')"
    ],    
];



function drawMyWorld(squares,name) {
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
        mySquare1.style.transform = `translate3d(${600 + squares[i][0] - squares[i][6] / 2}px,
     ${400 + squares[i][1] - squares[i][7] / 2}px,
     ${squares[i][2]}px) rotateX(${squares[i][3]}deg) rotateY(${squares[i][4]}deg) rotateZ(${squares[i][5]}deg)`;
        mySquare1.style.opacity = squares[i][9];
        world.appendChild(mySquare1);
    }
}
drawMyWorld(myRoom, "wall")
// Würfel 
// drawMyWorld(squares, "MMM");





// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// movement
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

document.addEventListener("keydown", (event) => {
    if(event.key == "w"){
        pressForward = pawn.vz;
    }
    if(event.key == "s"){
        pressBack = pawn.vz;
    }
    if(event.key == "d"){
        pressRight = pawn.vx;
    }
    if(event.key == "a"){
        pressLeft = pawn.vx;
    }
})

document.addEventListener("keyup", (event) => {
if(event.key == "w"){
        pressForward = 0;
    }
    if(event.key == "s"){
        pressBack = 0;
    }
    if(event.key == "d"){
        pressRight = 0;
    }
    if(event.key == "a"){
        pressLeft = 0;
    }
})

document.addEventListener("mousemove",(event) => {
    mouseX = event.movementX;
    mouseY = event.movementY;
})