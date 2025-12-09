
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
                structures[4]
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
                structures[4]
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
                structures[4]
            ],
        ];

        allSteps.push(...add_wall);
    }
    step = [
        [
            895 + faktor_x * x_abstand,
            -140 - faktor_y * y_abstand,
            - width_room / 2 + 1000 + faktor_z * z_abstand,
            90,
            0,
            0,
            200,
            1560,
            "black",
            1,
            structures[4]
        ],
        [
            895 + faktor_x * x_abstand,
            -105 - faktor_y * y_abstand,
            - width_room / 2 + 1000 + faktor_z * z_abstand,
            90,
            0,
            0,
            200,
            1560,
            "black",
            1,
            structures[4]
        ],
        [
            795 + faktor_x * x_abstand,
            -122.5 - faktor_y * y_abstand,
            - width_room / 2 + 1000 + faktor_z * z_abstand,
            90,
            90,
            0,
            35,
            1560,
            "#4169E1",
            1,
            structures[0]
        ],
    ]
    allSteps.push(...step);
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
                structures[4]
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
                structures[4]
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
            structures[4]
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
            structures[4]
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
            structures[4]
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
            structures[4]
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