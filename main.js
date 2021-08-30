var name_array = [];
var length_name_array;

function submit(){
    var display_student_array = [];

    for (var j = 1; j <= 4; j++){
        var student_name = document.getElementById("name_of_the_student_" +j).value;
        console.log(student_name);
        name_array.push(student_name);
    }
    console.log(name_array);
    
    console.log(length_name_array);
    length_name_array = name_array.length;

    for (var k = 0; k < length_name_array; k++){
        display_student_array.push("<h4> NAME-"+name_array[k]+"</h4>");
        console.log(display_student_array);
    }

    document.getElementById("display_name_with_commas").innerHTML = display_student_array

    var remove_commas = display_student_array.join(" ")
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline";
}

function sorting(){
    name_array.sort();
    console.log(name_array);
    console.log(length_name_array);
    var sorted_array = []
    length_name_array = name_array.length;

    for (var k = 0; k < length_name_array; k++){
        sorted_array.push("<h4> NAME-"+name_array[k]+"</h4>");
        console.log(sorted_array);
    }
    var remove_commas = sorted_array.join(" ")
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}