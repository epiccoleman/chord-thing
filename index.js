function set_scale_degrees(scale_array){
    document.getElementById("chord-name-1").innerHTML = scale_array[0];
    document.getElementById("chord-name-2").innerHTML = scale_array[1] + "m";
    document.getElementById("chord-name-3").innerHTML = scale_array[2] + "m";
    document.getElementById("chord-name-4").innerHTML = scale_array[3];
    document.getElementById("chord-name-5").innerHTML = scale_array[4];
    document.getElementById("chord-name-6").innerHTML = scale_array[5] + "m";
    document.getElementById("chord-name-7").innerHTML = scale_array[6] + "dim";
}

const chromatic = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];

function rotate(arr){
    arr.push(arr.shift());
}

function chromatic_for_key(key){
    var chromatic_scale = chromatic.slice(0);

    while(chromatic_scale[0] != key){
        rotate(chromatic_scale);
    }

    return chromatic_scale;
}

function major_scale_for_key(key){
    var chromatic_scale = chromatic_for_key(key);
    //WWHWWWH
    return [
        chromatic_scale[0],
        chromatic_scale[2],
        chromatic_scale[4],
        chromatic_scale[5],
        chromatic_scale[7],
        chromatic_scale[9],
        chromatic_scale[11]
    ];
}

var key_select = document.getElementById("key-select");
for (var note in chromatic){
    var opt = document.createElement("option");
    opt.value = chromatic[note];
    opt.innerHTML = chromatic[note];

    key_select.appendChild(opt);
}

key_select.onchange = function(){
    set_scale_degrees(major_scale_for_key(key_select.value));
};
