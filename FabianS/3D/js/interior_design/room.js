


function room_data(){
    let my_room = [
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
    return my_room
}