

function interrior_walls(){
    allSteps = [];
    let abstaende =  [
        { 
            x: 1, 
            z: 0, 
            y: 0 
        },
    ];
    let { x, y, z } = abstaende[0];

    let x_abstand = x;
    let y_abstand = y;
    let z_abstand = z;
    let step = 
    [
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
            structures[4]
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
            structures[4]
        ],
    ]
    // allSteps.push(...step);


    return allSteps;
}

function side_walls(){
    let abstaende =  [
        { 
            x: 1, 
            z: 0, 
            y: 0 
        },
    ];
    let temp = abstaende[0]
    x = temp.x 
    y = temp.y 
    z = temp.z

    x_abstand = x;
    y_abstand = y;
    z_abstand = z;
    step = [
        [
            -500 + faktor_x * x_abstand,
            -20 - faktor_y * y_abstand,
            100 + faktor_z * z_abstand,
            0,
            0,
            0,
            1400,
            240,
            "#a0a0a0",
            1,
            structures[4]
        ],
    ]
    allSteps.push(...step);
}