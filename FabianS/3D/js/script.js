

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// % Change between Klick or autmatic run %
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let automatic_run= false

var world = document.getElementById("world");

let drx = 0;
let dry = 0




// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Functions logical
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
document.addEventListener("keydown", (event) =>{
    if(event.key == "ArrowUp"){
        drx++;
        world.style.transform = `rotateX(${drx}deg)`
        console.log("up")
    }
    
    if(event.key == "ArrowDown"){
        drx--;
        world.style.transform = `rotateX(${drx}deg)`
        console.log("up")
    }

    if(event.key == "ArrowLeft"){
        dry--;
        world.style.transform = `rotateY(${dry}deg)`
    }

    if(event.key == "ArrowRight"){
        dry++;
        world.style.transform = `rotateY(${dry}deg)`
        console.log("up")
    }
})

