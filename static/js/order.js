function getOrdering() {

    // getting an input from user
    var numbers = document.getElementById('idname').value;
    var numbers = numbers + ",";

    // putting the each number inputs into a list
    var array_for_numbers = [];
    var each_number = ""
    for (var i=0; i<numbers.length; i++) {
        if (numbers[i] != ",") {
            each_number += numbers[i];
        }
        else if (numbers[i] == ",") {

            // eval is to evaluate an argument, push is to append values to the list
            array_for_numbers.push(eval(each_number));
            each_number = "";
        }
    }


    array_for_numbers.sort(function(a, b){return a-b});
    // showing the output
    document.getElementById("orderParagraph").innerHTML = array_for_numbers;
}
