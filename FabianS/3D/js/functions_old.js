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