
function buildSteps() {
    allSteps = [];
    let temp = 120
    let abstaende = [
        {
            x: 1,
            z: 0,
            y: 0
        },
        {
            x: 1,
            z: -0.7,
            y: 0.5
        },
        {
            x: 1,
            z: 0.7,
            y: 0.5
        },
        {
            x: 1,
            z: -1.2,
            y: 1.0
        },
        {
            x: 1,
            z: -1.7,
            y: 1.5
        },
        {
            x: 1,
            z: -2.25,
            y: 2.0
        },
        {
            x: 1,
            z: 1.2,
            y: 1.0
        },
        {
            x: 1,
            z: 1.2,
            y: 1.0
        }, // identisch zu 5 – bewusst übernommen
        {
            x: 1,
            z: 1.7,
            y: 1.5
        },
        {
            x: 1,
            z: 2.25,
            y: 2.0
        }
    ];

    for (let i = 0; i < abstaende.length; i++) {
        let { x, y, z } = abstaende[i];

        let x_abstand = x;
        let y_abstand = y;
        let z_abstand = z;

        if(i >=1){
            temp = 0
        }
        let step = [
            // floor 
            [
                // 300 + faktor_x * x_abstand,
                300 + faktor_x * x_abstand,
                95.25 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                90,
                0,
                0,
                width_stair,
                height_stair + temp,
                "yellow",
                1,
                structures[4]
            ],
            // vordere Platte
            [
                // 300 + faktor_x * x_abstand,
                300 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                100 + (temp * 0.5) + faktor_z * z_abstand,
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
                400 + faktor_x * x_abstand, // 500
                77.5 - faktor_y * y_abstand,
                0 + faktor_z * z_abstand,
                0,
                90,
                0,
                width_stair + (temp),
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
                width_stair + temp,
                start_pisition_floor,
                "#ff0378",
                1,
                structures[0]
            ],


            // hintere Platte
            [
                300 + faktor_x * x_abstand,
                77.5 - faktor_y * y_abstand,
                -100 - (temp * 0.5) + faktor_z * z_abstand,
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
                height_stair + temp,
                "yellow",
                1,
                structures[4]
            ],
        ];

        allSteps.push(...step);
    }



    return allSteps;
}

function step_handgriff() {
    let abstaende = [
        {
            x: 1,
            y: 0,
            z: 0,
        },
        {
            x: 1,
            y: -0.5,
            z: 0.5,
        },
        {
            x: 1,
            y: -1.0,
            z: 1.0,
        },

        {
            x: 1.5,
            y: -0.5,
            z: 0.5,
        },
        {
            x: 1.5,
            y: -1.0,
            z: 1.0,
        },
    ];
    for (let i = 0; i < abstaende.length; i++) {
        let { x, y, z } = abstaende[i];

        let x_abstand = x;
        let y_abstand = y;
        let z_abstand = z;
        step = [
            // floor 
            [
                200 + faktor_x * x_abstand,
                -102 - faktor_y * y_abstand,
                -660 + faktor_z * z_abstand,
                0,
                90,
                0,
                200,
                95,
                "rgba(160,160,160, 1)",
                1,
                structures[4]
            ],
        ]
        allSteps.push(...step);
    }



    abstaende = [
        {
            x: 1,
            y: 0,
            z: 0,
        },
        {
            x: 1,
            y: -0.5,
            z: -0.5,
        },
        {
            x: 1,
            y: -1,
            z: -1,
        },

        {
            x: 1.5,
            y: -0.5,
            z: -0.5,
        },
        {
            x: 1.5,
            y: -1,
            z: -1,
        },
        // {
        //     x: 1.5,
        //     y: 0,
        //     z: 0,
        // },
    ];
    for (let i = 0; i < abstaende.length; i++) {
        let { x, y, z } = abstaende[i];

        let x_abstand = x;
        let y_abstand = y;
        let z_abstand = z;

        step = [
            // floor 
            [
                200 + faktor_x * x_abstand,
                -102  - faktor_y * y_abstand,
                660 + faktor_z * z_abstand,
                0,
                90,
                0,
                200,
                95,
                // "rgba(160,160,160,0.1)",
                "rgba(160,160,160,1)",
                1,
                structures[4]
            ],

        ];
        allSteps.push(...step);
    }
    abstaende = [
        {
            x: 1,
            y: 0,
            z: 0,
        },
    ]
    step = [
        [
            600 + faktor_x * x_abstand,
            20  - faktor_y * y_abstand,
            660 + faktor_z * z_abstand,
            0,
            90,
            0,
            200,
            150,
            // "rgba(160,160,160,0.1)",
            "rgba(160,160,160,1)",
            1,
            structures[3]
        ],
        [
            600 + faktor_x * x_abstand,
            45  - faktor_y * y_abstand,
            460 + faktor_z * z_abstand,
            0,
            90,
            0,
            200,
            100,
            // "rgba(160,160,160,0.1)",
            "rgba(160,160,160,1)",
            1,
            structures[3]
        ],
        [
            600 + faktor_x * x_abstand,
            70  - faktor_y * y_abstand,
            260 + faktor_z * z_abstand,
            0,
            90,
            0,
            200,
            50,
            // "rgba(160,160,160,0.1)",
            "rgba(160,160,160,1)",
            1,
            structures[3]
        ],



        [
            600 + faktor_x * x_abstand,
            20  - faktor_y * y_abstand,
            -660 + faktor_z * z_abstand,
            0,
            90,
            0,
            200,
            150,
            // "rgba(160,160,160,0.1)",
            "rgba(160,160,160,1)",
            1,
            structures[3]
        ],
        [
            600 + faktor_x * x_abstand,
            45  - faktor_y * y_abstand,
            -460 + faktor_z * z_abstand,
            0,
            90,
            0,
            200,
            100,
            // "rgba(160,160,160,0.1)",
            "rgba(160,160,160,1)",
            1,
            structures[3]
        ],
        [
            600 + faktor_x * x_abstand,
            70  - faktor_y * y_abstand,
            -260 + faktor_z * z_abstand,
            0,
            90,
            0,
            200,
            50,
            // "rgba(160,160,160,0.1)",
            "rgba(160,160,160,1)",
            1,
            structures[3]
        ],
    ],
    allSteps.push(...step);
    return allSteps
}