// js/my_room.js

// import { interior_design } from "./interior_design/stair_one.js";

// let world = document.getElementById("world");
let floor_width = 2000
let step_temp

let faktor_y = 100
let faktor_x = 400
let faktor_z = 400
let structures = [
        "",
        "url('textures/floor_01.jpg')",
        "url('textures/sandy_wall.jpg')",
        "url('textures/stone_wall.jpg')",
        "url('textures/wood_ceiling.jpg')"
    ]
let x_abstand = 0
let y_abstand = 0
let z_abstand = 0
let z
let c 
let structure
let height = 200 
let width = 200
let start_pisition_floor = 35



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
            `translate3d(
                ${600 + squares[i][0] - squares[i][6] / 2}px,
                ${400 + squares[i][1] - squares[i][7] / 2}px,
                ${squares[i][2]}px
            )
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
        structures[1]
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
        structures[2]
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
        structures[2]
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
        structures[2]
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
        structures[2]
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
        structures[4]
    ],
];
let steps = buildSteps(10);
myRoom = [...myRoom, ...steps];

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
//   return Math.floor(Math.random() * max);
}
drawMyWorld(myRoom, "wall");

function buildSteps(count) {
    
    let allSteps = [];

    for (let i = 0; i < count; i++) {
        c = getRandomInt(-3, 2)
        console.log(c)
        z_abstand = i;

        if(i == (0)){
            x_abstand = 1
            z_abstand = 0
            y_abstand = 0
        }
        if(i == (1)){
            x_abstand = 1
            z_abstand = 1
            y_abstand = 1
        }
        if(i == 2){
            x_abstand = 1
            z_abstand = 2
            y_abstand = 2
        }

        // 
        if(i == 3){
            x_abstand = 1
            z_abstand = -0.65
            y_abstand = 0.5
        }
        if(i == 4){
            x_abstand = 1
            z_abstand = -1.15
            y_abstand = 1.0
        }
        if(i == 5){
            x_abstand = 1
            z_abstand = -1.65
            y_abstand = 1.5
        }
        if(i == 6){
            x_abstand = 1
            z_abstand = -2.2
            y_abstand = 2.0
        }
        // if(i == 7){
        //     x_abstand = 1
        //     z_abstand = -2.5
        //     y_abstand = 2.5
        // }
        let step = [
            // floor 
            [
                300 + faktor_x * x_abstand,
                95.25 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                0,
                0,
                width,
                height,
                "yellow",
                1,
                structures[0]
            ],    
            // vordere Platte
            [
                300 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                100 + faktor_z * z_abstand,
                0,
                0,
                0,
                width,
                start_pisition_floor,
                "#4169E1",
                1,
                structures[0]
            ],

            // rechte Platte
            [
                400 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                0,
                90,
                0,
                width,
                start_pisition_floor,
                "brown",
                1,
                structures[0]
            ],

            // linke Platte 
            [
                (200) + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                0,
                90,
                0,
                width,
                start_pisition_floor,
                "#ff0378",
                1,
                structures[0]
            ],
               

            // hintere Platte
            [
                300 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                -100 + faktor_z * z_abstand,
                0,
                0,
                0,
                width,
                start_pisition_floor,
                "#0FFF50",
                1,
                structures[0]
            ],
               

            // obere Platte
            [
                300 + faktor_x * x_abstand,
                60 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                0,
                0,
                width,
                height,
                "yellow",
                1,
                structures[0]
            ],
        ];

        allSteps.push(...step);
    }

    return allSteps;
}