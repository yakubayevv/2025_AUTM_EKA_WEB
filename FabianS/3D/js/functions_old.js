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