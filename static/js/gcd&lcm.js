function getGCD() {

    function gcd_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number'))
            return false;
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }

    var number = "";
    var numbers = [];
    var str = document.getElementById('gcdLcmInput').value;
    str += ",";
    var n = str.length;
    
    for (var i=0; i<n; i++) {
        if (str[i] != ",") {
            number += str[i];
            var j = i;
        }
        else if (str[i] == " ") {
            continue
        }
        else if (str[i] == ",") {
            numbers.push(parseInt(number, 10));
            number = "";
        }
    }
    
    console.log(numbers);

    if (numbers.length == 1) {
        if (numbers[0] == 0) {
            document.getElementById("glParagraph").innerHTML = "Value shouldn't be zero.";
        }
        else {
            document.getElementById("glParagraph").innerHTML = numbers[0];
        }
    }

    else if (numbers.length == 2) {
        if (numbers[0] == 0 || numbers[1] == 0) {
            document.getElementById("glParagraph").innerHTML = "Value shouldn't be zero.";
        }
        else {
            var a = gcd_two_numbers(numbers[0], numbers[1]);
            document.getElementById("glParagraph").innerHTML = a; 
        }
    }

    else if (numbers.length > 2) {
        if (numbers[0] == 0 || numbers[1] == 0) {
            document.getElementById("glParagraph").innerHTML = "Value shouldn't be zero.";
        }
        else {
            var a = gcd_two_numbers(numbers[0], numbers[1]);
        }

        for (var index_of_numbers=2; index_of_numbers<numbers.length; index_of_numbers++) {
            if (numbers[index_of_numbers] == 0) {
                document.getElementById("glParagraph").innerHTML = "Value shouldn't be zero.";
                break
            }
            else {
                var cd = gcd_two_numbers(a, numbers[index_of_numbers]);
                a = cd;
            }
        }

        document.getElementById("glParagraph").innerHTML = cd;                    
    }
}


function getLCM() {

    function lcm_two_numbers(x, y) {
        if ((typeof x !== 'number') || (typeof y !== 'number')) 
            return false;
        return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
        }

        function gcd_two_numbers(x, y) {
        x = Math.abs(x);
        y = Math.abs(y);
        while(y) {
            var t = y;
            y = x % y;
            x = t;
        }
        return x;
    }

    var number = "";
    var numbers = [];
    var str = document.getElementById('gcdLcmInput').value;
    str += ",";
    var n = str.length;

    for (var i=0; i<n; i++) {
        if (str[i] != ",") {
            number += str[i];
            var j = i;
        }
        else if (str[i] == " ") {
            continue
        }
        else if (str[i] == ",") {
            numbers.push(parseInt(number, 10));
            number = "";
        }
    }

    console.log(numbers);

    if (numbers.length == 1) {
        if (numbers[0] == 0) {
            document.getElementById("demo").innerHTML = "Value shouldn't be zero.";
        }
        else {
            document.getElementById("glParagraph").innerHTML = numbers[0];
        }
    }

    else if (numbers.length == 2) {
        if (numbers[0] == 0 || numbers[1] == 0) {
            document.getElementById("demo").innerHTML = "Value shouldn't be zero.";
        }
        else {
            var a = lcm_two_numbers(numbers[0], numbers[1]);
            document.getElementById("glParagraph").innerHTML = a; 
        }
    }

    else if (numbers.length > 2) {
        if (numbers[0] == 0 || numbers[1] == 0) {
            document.getElementById("glParagraph").innerHTML = "Value shouldn't be zero.";
        }
        else {
            var a = lcm_two_numbers(numbers[0], numbers[1]);
        }

        for (var index_of_numbers=2; index_of_numbers<numbers.length; index_of_numbers++) {
            if (numbers[index_of_numbers] == 0) {
                document.getElementById("glParagraph").innerHTML = "Value shouldn't be zero.";
                break
            }
            else {
                var cd = lcm_two_numbers(a, numbers[index_of_numbers]);
                a = cd;
            }
        }

        document.getElementById("glParagraph").innerHTML = cd;                    
    }
}
