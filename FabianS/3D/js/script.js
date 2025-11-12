

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// % Change between Klick or autmatic run %
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let automatic_run= false

var world = document.getElementById("world");


let mySquares = []

let squares = [
    // TranslateVal1, TranslateVal2, TranslateVal3, , , , width, height, color, opacity
    [500, 300, 100, 0, 0, 0, 200, 200, "blueviolet", 0.5],
    
    [500, 300, -100, 0, 0, 0, 200, 200, "yellowgreen", 0.5],
    
    [500, 300, -100, 0, 0, 0, 200, 200, "black", 0.5],
]


function drawWorld(){

    let mySquare1
    for(let counter = 0; counter < squares.length; counter++){
        mySquare1 = document.createElement("div")
        mySquare1.id = `square${counter}`
        mySquare1.style.position = "absolute"
        mySquare1.style.width = `${squares[counter][6]} px`
        mySquare1.style.height = `${squares[counter][7]} px`
        mySquare1.style.background = `${squares[counter][8]} px`
        mySquare1.style.opacity = `${squares[counter][9]} px`
        mySquare1.style.transform = `
            translate3d(${squares[counter][0]} px, ${squares[counter][1]} px, ${squares[counter][2]} px) 
            rotateX(${squares[counter][3]} deg)
            rotateY(${squares[counter][4]} deg)
            rotateZ(${squares[counter][5]} deg)
        `
        world.appendChild(mySquare1)
        mySquares.push(mySquare1)
    }

}
let drx = 0;
let dry = 0
let drz = 0;



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Functions logical
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
document.addEventListener("keydown", (event) =>{
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

    if(
        event.key == "Space"
    ){
        // world.style.transform = `rotateY(${dry}deg)`
        drz++
    }
    // world.style.transform = `rotateX(${drx}deg) rotateY(${dry}deg)`;
    world.style.transform = `rotateX(${drx}deg) rotateY(${dry}deg) rotateZ(${drz}deg)`;
    console.log("dry = " + dry, "drx = " + drx, "drz = " + drz)
    console.log("dry_ist = " + world.style.transform)
})

