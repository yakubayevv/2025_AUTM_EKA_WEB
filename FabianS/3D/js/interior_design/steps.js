
function buildSteps() {
    allSteps = [];
    let temp = 120
    let abstaende = [
        {
            x: 1,
            y: 0,
            z: 0,
        },
        {
            x: 1,
            y: 0.5,
            z: -0.7,
        },

        {
            x: 1,
            y: 1.0,
            z: -1.22,
        },
        
        {
            x: 1,
            y: 1.5,
            z: -1.75,
        },
        {
            x: 1,
            y: 2.0,
            z: -2.25,
        },

        // 
        {
            x: 1,
            y: 0,
            z: 0,
        },
        {
            x: 1,
            y: 0.5,
            z: 0.7,
        },

        {
            x: 1,
            y: 1.0,
            z: 1.22,
        },
        
        {
            x: 1,
            y: 1.5,
            z: 1.75,
        },
        {
            x: 1,
            y: 2.0,
            z: 2.25,
        },
        
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
    let abstaende = [  ];

    abstaende = [
        {
            x: 1,
            y: 0,
            z: 0,
        },
        {
            x: 1,
            y: -0.5,
            z: -0.530,
        },
        {
            x: 1,
            y: -1,
            z: -1.05,
        },

        // hinten
        {
            x: 1.5,
            y: -0.5,
            z: -0.530,
        },
        {
            x: 1.5,
            y: -1,
            z: -1.05,
        },


        // Linkte Treppe
        {
            x: 1,
            y: 0,
            z: -3.5,
        },
        {
            x: 1,
            y: -0.5,
            z: -2.97,
        },
        {
            x: 1,
            y: -1,
            z: -2.45,
        },

        {
            x: 1.5,
            y: -0.5,
            z: -2.97,
        },
        {
            x: 1.5,
            y: -1,
            z: -2.45,
        },

        
    ];
    for (let i = 0; i < abstaende.length; i++) {
        let { x, y, z } = abstaende[i];

        let x_abstand = x;
        let y_abstand = y;
        let z_abstand = z;

        step = [
            // Geländer 
            [
                200 + faktor_x * x_abstand,
                -102  - faktor_y * y_abstand,
                700 + faktor_z * z_abstand,
                0,
                90,
                0,
                200,
                95,
                // "rgba(160,160,160,0.1)",
                "rgba(160,160,160,1)",
                1,
                structures[11]
            ],

        ];
        allSteps.push(...step);
    }

    return allSteps
}

function step_floor_adapter(){
    // Befestigung Treppe Boden
    allSteps = []
    let abstaende = [
        {
            x: 1,
            y: 0,
            z: 0.3,
        },
    ]
    for(let c = 0; c < 2; c++){
        let zz = 1
        if (c == 1){
            zz = - 1
        }
        step = [
            [
                600 + faktor_x * x_abstand,
                20  - faktor_y * y_abstand,
                700 * zz + faktor_z * z_abstand ,
                0,
                90,
                0,
                200,
                150,
                // "rgba(160,160,160,0.1)",
                "rgba(160,160,160,1)",
                1,
                structures[11]
            ],
            [
                600 + faktor_x * x_abstand,
                45  - faktor_y * y_abstand,
                488 * zz + faktor_z * z_abstand,
                0,
                90,
                0,
                200,
                100,
                // "rgba(160,160,160,0.1)",
                "rgba(160,160,160,1)",
                1,
                structures[11]
            ],
            [
                600 + faktor_x * x_abstand,
                70  - faktor_y * y_abstand,
                280 * zz + faktor_z * z_abstand,
                0,
                90,
                0,
                200,
                50,
                // "rgba(160,160,160,0.1)",
                "rgba(160,160,160,1)",
                1,
                structures[11]
            ],

        ],
        allSteps.push(...step);
    }
    return allSteps
}