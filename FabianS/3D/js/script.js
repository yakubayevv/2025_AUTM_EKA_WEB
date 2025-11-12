

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
    // ,    ,       Length, Winkelx,Winkely,Winkelz,    X,      Y,      color,      ,        
    
    // Floor
    [0,     100,    0,      90,     0,      0,          2000,   2000,   "brown",    1,  "url('textures/floor_01.jpg')"],
    
    // Wall 1
    [0,     100,    -1000,  0,      0,      0,          2000,   400,    "brown",    1,  "url('textures/sandy_wall.jpg')"],
    
    
    // Wall 2
    [0,     100,    1000,   0,      0,      0,          2000,   400,    "brown",    1,  "url('textures/sandy_wall.jpg')"],
    
    // Wall 3 = rechts
    [1000,  100,      0,      0,      90,     0,          2000,   400,    "brown",    1,  "url('textures/sandy_wall.jpg')"],
    
    // Wall 4 = Links
    [-1000, 100,     0,      0,       90,      0,         2000,   400,    "brown",    1,  "url('textures/sandy_wall.jpg')"],

];
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// 
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

function drawWorld(){

    let mySquare
    for(let counter = 0; counter < squares.length; counter++){
        mySquare = document.createElement("div")
        mySquare.id = `square${counter}`
        mySquare.style.position = "absolute"
        mySquare.style.width = `${squares[counter][6]} px`
        mySquare.style.height = `${squares[counter][7]} px`
        mySquare.style.background = `${squares[counter][8]} px`
        mySquare.style.opacity = `${squares[counter][9]} px`
        mySquare.style.transform = `
            translate3d(${squares[counter][0]} px, ${squares[counter][1]} px, ${squares[counter][2]} px) 
            rotateX(${squares[counter][3]} deg)
            rotateY(${squares[counter][4]} deg)
            rotateZ(${squares[counter][5]} deg)
        `
        world.appendChild(mySquare)
        mySquares.push(mySquare)
    }

}

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


// drawMyWorld(squares, "MMM");
// drawWorld()


drawMyWorld(myRoom, "wall")

// function update(){
// }

// let game = setInterval(update, 10);


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

})

