

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
            [
                200 + faktor_x * x_abstand,
                -20 - faktor_y * y_abstand,
                670 + faktor_z * z_abstand,
                0,
                90,
                0,
                220,
                240,
                "black",
                1,
                structures[0]
            ],  
            [
                200 + faktor_x * x_abstand,
                -20 - faktor_y * y_abstand,
                -670 + faktor_z * z_abstand,
                0,
                90,
                0,
                220,
                240,
                "black",
                1,
                structures[0]
            ],  
            // 
        ];
        allSteps.push(...step);
    }
    return allSteps;
}