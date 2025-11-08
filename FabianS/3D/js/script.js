

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// % Change between Klick or autmatic run %
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let automatic_run= false

var world = document.getElementById("world");

let drx = 0;
let dry = 0
let drz = 0;



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Functions logical
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
document.addEventListener("keydown", (event) =>{
    if(event.key == "ArrowUp"){
        drx++;
        // world.style.transform = `rotateX(${drx}deg)`
        console.log("up")
    }
    
    if(event.key == "ArrowDown"){
        drx--;
        // world.style.transform = `rotateX(${drx}deg)`
        console.log("up")
    }

    if(event.key == "ArrowLeft"){
        dry--;
        // world.style.transform = `rotateY(${dry}deg)`
    }

    if(event.key == "ArrowRight"){
        dry++;
        // world.style.transform = `rotateY(${dry}deg)`
        console.log("up")
    }

    if(event.key == "Space"){
        // world.style.transform = `rotateY(${dry}deg)`
        drz++
    }
    // world.style.transform = `rotateX(${drx}deg) rotateY(${dry}deg)`;
    world.style.transform = `rotateX(${drx}deg) rotateY(${dry}deg) rotateZ(${drz}deg)`;
    console.log("dry = " + dry, "drx = " + drx, "drz = " + drz)
    console.log("dry_ist = " + world.style.transform)
})

