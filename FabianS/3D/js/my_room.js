// js/my_room.js

// import { interior_design } from "./interior_design/stair_one.js";

// let world = document.getElementById("world");

let step_temp
let allSteps = [];
let addition_walls = []
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
let structure

let height_room = 2000
let width_room = 2000
let height_wall_floor = 400

let height_stair = 200 
let width_stair = 200

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
        width_room,
        width_room,
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
        width_room,
        height_wall_floor,
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
        width_room,
        height_wall_floor,
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
        width_room,
        height_wall_floor,
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
        width_room,
        height_wall_floor,
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
        width_room,
        width_room,
        "brown",
        1,
        structures[4]
    ],
];
let steps = buildSteps();
myRoom = [...myRoom, ...steps];

let add_walls = second_floor_front_and_behind()
myRoom = [...myRoom, ...add_walls];

add_walls = interrior_walls()
myRoom = [...myRoom, ...add_walls];


add_walls = second_floor_left_and_right()
myRoom = [...myRoom, ...add_walls];



drawMyWorld(myRoom, "wall");




function buildSteps() { 
    allSteps = [];
    let abstaende =  [
        { 
            x: 1, 
            z: 0, 
            y: 0 
        },
        { 
            x: 1, 
            z: -0.65, 
            y: 0.5 
        },
        { 
            x: 1, 
            z: 0.65, 
            y: 0.5 
        },
        { 
            x: 1, 
            z: -1.15, 
            y: 1.0 
        },
        { 
            x: 1, 
            z: -1.65,
             y: 1.5 
        },
        { 
            x: 1, 
            z: -2.2,  
            y: 2.0 
        },
        { 
            x: 1, 
            z:  1.15, 
            y: 1.0 
        },
        { 
            x: 1, 
            z:  1.15, 
            y: 1.0 
        }, // identisch zu 5 – bewusst übernommen
        { 
            x: 1, 
            z:  1.65, 
            y: 1.5 
        },
        { 
            x: 1, 
            z:  2.2,  
            y: 2.0 
        }
    ];
    for (let i = 0; i < abstaende.length; i++) {
        let { x, y, z } = abstaende[i];

        let x_abstand = x;
        let y_abstand = y;
        let z_abstand = z;

        let step = [
            // floor 
            [
                300 + faktor_x * x_abstand,
                95.25 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                0,
                0,
                width_stair,
                height_stair,
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
                width_stair,
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
                width_stair,
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
                width_stair,
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
                width_stair,
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
                width_stair,
                height_stair,
                "yellow",
                1,
                structures[0]
            ],
        ];

        allSteps.push(...step);
    }
    let x_abstand = 1;
    let y_abstand = 0;
    let z_abstand = 0;
    step = [
        [
            495 + faktor_x * x_abstand,
            -140 - faktor_y * y_abstand,
            - width_room / 2 + 120 + faktor_z * z_abstand,
            90,
            0,
            0,
            200,
            200,
            "orange",
            1,
            structures[0]
        ], 
        [
            495 + faktor_x * x_abstand,
            -105 - faktor_y * y_abstand,
            - width_room / 2 + 120 + faktor_z * z_abstand,
            90,
            0,
            0,
            200,
            200,
            "orange",
            1,
            structures[0]
        ], 
        [
            495 + faktor_x * x_abstand,
            -122.5 - faktor_y * y_abstand,
            - width_room / 2 + 221 + faktor_z * z_abstand,
            0,
            0,
            0,
            200,
            34.5,
            "green",
            1,
            structures[0]
        ],
        [
            495 + faktor_x * x_abstand,
            -140 - faktor_y * y_abstand,
            width_room / 2 - 120 + faktor_z * z_abstand,
            90,
            0,
            0,
            200,
            200,
            "orange",
            1,
            structures[0]
        ],
        [
            495 + faktor_x * x_abstand,
            -105 - faktor_y * y_abstand,
            width_room / 2 - 120 + faktor_z * z_abstand,
            90,
            0,
            0,
            200,
            200,
            "orange",
            1,
            structures[0]
        ], 
        [
            495 + faktor_x * x_abstand,
            -123 - faktor_y * y_abstand,
            width_room / 2 - 221 + faktor_z * z_abstand,
            0,
            0,
            0,
            200,
            34,
            "green",
            1,
            structures[0]
        ], 
    ]

    allSteps.push(...step);
    return allSteps;
}

function second_floor_front_and_behind(){
    let height_second_floor_side_one = 200
    let width_second_floor_side_one = width_room - width_stair - 200

    let height_second_floor_side_two = 200
    let width_second_floor_side_two = 200
    let abstaende = [
        {
            x : 0,
            y : 2.0,
            z : 2.2
        },
        {
            x : 0,
            y : 2.0,
            z : -2.2
        },
    ]
    for(let c = 0; c < abstaende.length; c++){
        let { x, y, z } = abstaende[c];

        let x_abstand = x;
        let y_abstand = y;
        let z_abstand = z;
        console.log(x, y, z, abstaende.length)
        let add_wall = [
            // floor 
            [
                -198.5 + faktor_x * x_abstand,
                95.25 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                0,
                0,
                width_second_floor_side_one,
                height_stair,
                "brown",
                1,
                structures[0]
            ],    
            // vordere Platte
            [
                -198.5 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                100 + faktor_z * z_abstand,
                0,
                0,
                0,
                width_second_floor_side_one,
                start_pisition_floor,
                "#666",
                1,
                structures[0]
            ],

            // // rechte Platte
            [
                -198.5 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                0,
                90,
                0,
                width_stair,
                start_pisition_floor,
                "brown",
                1,
                structures[0]
            ],

            // // linke Platte 
            [
                -198.5 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                0,
                90,
                0,
                width_stair,
                start_pisition_floor,
                "#ff0378",
                1,
                structures[0]
            ],
               

            // // hintere Platte
            [
                -198.5 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                -100 + faktor_z * z_abstand,
                0,
                0,
                0,
                width_second_floor_side_one,
                start_pisition_floor,
                "#0FFF50",
                1,
                structures[0]
            ],
               

            // // obere Platte
            [
                -198.5 + faktor_x * x_abstand,
                60 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                0,
                0,
                width_second_floor_side_one,
                height_stair,
                "orange",
                1,
                structures[0]
            ],
        ];

        allSteps.push(...add_wall);
    }
    return allSteps;
}
function interrior_walls(){
allSteps = [];
    let abstaende =  [
        { 
            x: 1, 
            z: 0, 
            y: 0 
        },
    ];
    for (let i = 0; i < abstaende.length; i++) {
        let { x, y, z } = abstaende[i];

        let x_abstand = x;
        let y_abstand = y;
        let z_abstand = z;

        let step = [
            // floor 
            [
                -500 + faktor_x * x_abstand,
                -20 - faktor_y * y_abstand,
                width_room / 2 - 220 + faktor_z * z_abstand,
                0,
                0,
                0,
                1400,
                240,
                "#a0a0a0",
                1,
                structures[0]
            ],    
            [
                -500 + faktor_x * x_abstand,
                -20 - faktor_y * y_abstand,
                - width_room / 2 + 220 + faktor_z * z_abstand,
                0,
                0,
                0,
                1400,
                240,
                "#a0a0a0",
                1,
                structures[0]
            ],  
            // 
            // [
            //     495 + faktor_x * x_abstand,
            //     -140 - faktor_y * y_abstand,
            //     - width_room / 2 + 120 + faktor_z * z_abstand,
            //     90,
            //     0,
            //     0,
            //     200,
            //     200,
            //     "orange",
            //     1,
            //     structures[0]
            // ], 
            // [
            //     495 + faktor_x * x_abstand,
            //     -140 - faktor_y * y_abstand,
            //     width_room / 2 - 120 + faktor_z * z_abstand,
            //     90,
            //     0,
            //     0,
            //     200,
            //     200,
            //     "orange",
            //     1,
            //     structures[0]
            // ],
        ];

        allSteps.push(...step);
    }


    return allSteps;
}

function second_floor_left_and_right(){

    let height_second_floor_side_one = 200
    let width_second_floor_side_one = width_room - width_stair - 200

    let height_second_floor_side_two = height_room - 440
    let width_second_floor_side_two = 200
    let abstaende = [
        {
            x : 0,
            y : 2.0,
            z : 0
        },
        // {
        //     x : 0,
        //     y : 2.0,
        //     z : -2.2
        // },
    ]
    for(let c = 0; c < abstaende.length; c++){
        let { x, y, z } = abstaende[c];

        let x_abstand = x;
        let y_abstand = y;
        let z_abstand = z;
        console.log(x, y, z, abstaende.length)
        let add_wall = [
            // floor 
            [
                - (width_room / 2) + 100 + faktor_x * x_abstand,
                95.25 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                0,
                0,
                width_second_floor_side_two,
                height_second_floor_side_two,
                "purple",
                1,
                structures[0]
            ],    
            // Decke
            [
                - (width_room / 2) + 100 + faktor_x * x_abstand,
                60 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                0,
                90,
                height_second_floor_side_two,
                width_second_floor_side_two,
                "#666",
                1,
                structures[0]
            ],

            // rechte Platte
            [
                - (width_room / 2) + 100 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                // 0 + faktor_z * z_abstand,
                height_room / 2 - 220,
                0,
                0,
                0,
                width_second_floor_side_two,
                35,
                "yellow",
                1,
                structures[0]
            ],

            // // // linke Platte 
            [
                - (width_room / 2) + 100 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                // 0 + faktor_z * z_abstand,
                - height_room / 2 + 220,
                0,
                0,
                0,
                width_second_floor_side_two,
                35,
                "yellow",
                1,
                structures[0]
            ],
  

            // // // hintere Platte
            [
                - (width_room / 2) + 200 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                90,
                0,
                35,
                height_second_floor_side_two,
                "#0FFF50",
                1,
                structures[0]
            ],
               

            // // // obere Platte
            [
                - (width_room / 2) + 0 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                90,
                0,
                35,
                height_second_floor_side_two,
                "#0FFF50",
                1,
                structures[0]
            ],
            
        ];

        allSteps.push(...add_wall);
    }
    return allSteps;
}
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
//   return Math.floor(Math.random() * max);
}