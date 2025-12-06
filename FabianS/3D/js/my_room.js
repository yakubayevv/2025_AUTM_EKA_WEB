// js/my_room.js

// import { interior_design } from "./interior_design/stair_one.js";

// let world = document.getElementById("world");

function drawMyWorld(squares, name) {
    for (let i = 0; i < squares.length; i++) {
        let mySquare1 = document.createElement("div");
        mySquare1.id = `${name}${i}`;
        mySquare1.style.position = "absolute";
        mySquare1.style.width = `${squares[i][6]}px`;
        mySquare1.style.height = `${squares[i][7]}px`;

        if (squares[i][10]) {
            mySquare1.style.backgroundImage = squares[i][10];
        } else {
            mySquare1.style.backgroundColor = squares[i][8];
        }

        mySquare1.style.transform =
            `translate3d(${600 + squares[i][0] - squares[i][6] / 2}px,
                         ${400 + squares[i][1] - squares[i][7] / 2}px,
                         ${squares[i][2]}px)
             rotateX(${squares[i][3]}deg)
             rotateY(${squares[i][4]}deg)
             rotateZ(${squares[i][5]}deg)`;

        mySquare1.style.opacity = squares[i][9];
        world.appendChild(mySquare1);
    }
}

myRoom = [
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
        -100,
        -1000,
        0,
        0,
        0,
        2000,
        400,
        "brown",
        1,
        "url('textures/sandy_wall.jpg')"
    ],

    // Wall 2 - hinten
    [
        0,
        -100,
        1000,
        0,
        0,
        0,
        2000,
        400,
        "brown",
        1,
        "url('textures/sandy_wall.jpg')"
    ],

    // Wall 3 - rechts
    [
        1000,
        -100,
        0,
        0,
        90,
        0,
        2000,
        400,
        "brown",
        1,
        "url('textures/sandy_wall.jpg')"
    ],

    // Wall 4 - links
    [
        -1000,
        -100,
        0,
        0,
        90,
        0,
        2000,
        400,
        "brown",
        1,
        "url('textures/sandy_wall.jpg')"
    ],

    // Decke
    [
        0,
        -300,
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

let step_one = [
    [
        0,
        77.5,
        100,
        0,
        0,
        0,
        200,
        35,
        "#4169E1",
        1,
    ],
    [
        100,
        77.5,
        0,
        0,
        90,
        0,
        200,
        35,
        "brown",
        1,
    ],
    [
        -100,
        77.5,
        0,
        0,
        90,
        0,
        200,
        35,
        "#ff0378",
        1,
    ],
    [
        0,
        77.5,
        -100,
        0,
        0,
        0,
        200,
        35,
        "#0FFF50",
        1,
    ],
    [
        0,
        60,
        0,
        90,
        0,
        0,
        200,
        200,
        "yellow",
        1,
    ],
];

let step_two = [
    [
        0,
        60,
        0,
        90,
        0,
        0,
        200,
        200,
        "yellow",
        1,
    ],
]
// hier Innenausstattung anhängen
myRoom = [...myRoom, ...step_one];

drawMyWorld(myRoom, "wall");
