function strVali(str) {
    str = str.replace(/\s+/g, "");
    var parts = str.match(/[+\-]?[^+\-]+/g);
    return parts.reduce(function(res, part) {
        var coef = parseFloat(part) || +(part[0] + "1") || 1;
        var x = part.indexOf('x');
        var power = x === -1 ?
            0:
            part[x + 1] === "^" ?
                +part.slice(x + 2) :
                1;
        res[power] = (res[power] || 0) + coef;
        return res;
    }, {});
}

function getCoeff(coeff) {
    var powers = Object.keys(strVali(coeff));
    var max = Math.max.apply(null, powers);
    var result = [];
    for(var i = max; i >= 0; i--) {
        result.push(strVali(coeff)[i] || 0);
    }
    return result;
}

function format(str) {
    str = ' ' + str;
    str = str.replace(/-/g,'+-').replace(/x(?!\^)/g,'x^1').replace(/([+\/*)(])(\d+)([+\/*)(])/g,'$1$2x^0$3').replace(/([^\d])(x\^-?\d+)/g,'$11$2').replace(/(-?\d+x\^\d+)(?=\()/g,'($1)').replace(/(\))(-?\d+x\^\d+)/g,'$1($2)').replace(/([^\)\/])(\()([^\*\/\(\)]+?)(\))(?![(^\/])/g,'$1$3');
    str = str.replace(/(\([^\(\)]+?\))\/(\d+x\^-?\d+)/g,'$1/($2)').replace(/(\d+x\^-?\d+)\/(\d+x\^-?\d+)/g,'($1)/($2)').replace(/(\d+x\^-?\d+)\/(\(\d+x\^-?\d+\))/g,'($1)/$2');
    return str;
}

function expBrackets(str) {
    var repeats = str.match(/\([^\(\)]+?\)\^\d+/g);
    if ( repeats === null ) {
        return str;
    }
    else {
        var totalRepeat = '';
        for ( var t = 0; t < repeats.length; t++ ) { 
            var repeat = repeats[t].match(/\d+$/); 
            for ( var u = 0; u < Number(repeat); u++ ) { 
                totalRepeat += repeats[t].replace(/\^\d+$/,'');
            }
            str = str.replace(/\([^\(\)]+?\)\^\d+/, totalRepeat); 
            totalRepeat = ''; 
        }
    return str; 
    }
}

function multiply(str) {
    var pairs = str.match(/\([^\(\)]+?\)\([^\(\)]+?\)/g);
    if ( pairs !== null ) { while ( pairs !== null ) { var output = '';
        for (var i = 0; i < pairs.length; i++) { var pair = pairs[i].slice(1).slice(0, -1).split(')('); var firstCoeff = getCoeff(pair[0]); var secondCoeff = getCoeff(pair[1]);
            for (var j = 0; j < firstCoeff.length; j++) {
                for (var k = 0; k < secondCoeff.length; k++) { output += firstCoeff[j] * secondCoeff[k] + 'x^' + Number(firstCoeff.length - 1 - j + secondCoeff.length - 1 - k) + '+'; } }
            var regexp = new RegExp(pairs[i].replace(/\(/g,'\\(').replace(/\+/g,'\\+').replace(/\)/g,'\\)').replace(/\^/g,'\\^').replace(/\-/g,'\\-'));
            str = str.replace(regexp, '(' + (output.slice(0, -1).replace(/[^\d]0x\^\d+/g,'')) + ')');
            output = ''; }
        pairs = str.match(/\([^\(\)]+?\)\([^\(\)]+?\)/g); } }
        else { }
    str = str.replace(/\+/g,' + ');
    return str;
}

function divide(str) {
    if ( str.match(/\/(\(-?\d+x\^-?\d+.+?\))/g) === null && str.match(/\//g) !== null ) {
        while ( pairs !== null ) {
        var pairs = str.match(/\([^\(\)]+?\)\/\([^\(\)]+?\)/g);
        var output = '';
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].slice(1).slice(0, -1).split(')/(');
            var firstCoeff = getCoeff(pair[0]);
            var secondCoeff = getCoeff(pair[1]);
            for (var j = 0; j < firstCoeff.length; j++) {
                for (var k = 0; k < secondCoeff.length; k++) {
                    output += firstCoeff[j] / secondCoeff[k] + 'x^' + Number(firstCoeff.length - 1 - j - secondCoeff.length + 1 + k) + '+';
                    output = output.replace(/([+-])Infinityx\^\-?\d+/g,'').replace(/([+-])NaNx\^\-?\d+/g,'');
                } }
            var regexp = new RegExp(pairs[i].replace(/\(/g,'\\(').replace(/\+/g,'\\+').replace(/\)/g,'\\)').replace(/\^/g,'\\^').replace(/\-/g,'\\-'));
            str = str.replace(regexp, '(' + (output.slice(0, -1).replace(/[^\d]0x\^-?\d+/g,'')) + ')');

            output = ''; }
        pairs = str.match(/\([^\(\)]+?\)\/\([^\(\)]+?\)/g); } }
    else { }
    return str;
}

function evaluate(str) {
    var result = format(divide(format(multiply(expBrackets(format(str))))));
    var resultCollect = '';

    // replace(/\s+/g, "") means to remove all the spaces
    // replace(/[^\d]0x\^-?\d+/g,'') means to replace all the chartacters typed to ''
    // replace(/\+/g,' + ') means to trim a space before and after ' + '
    result = result.replace(/\s+/g, "").replace(/[^\d]0x\^-?\d+/g,'').replace(/\+/g,' + ');

    // when input is empty
    if (result === '') {
        // str + ' = 0 ' will be displayed on the document which the id's called 'result'
        document.getElementById('result').innerHTML = str + ' = 0 ';
        // ?
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById('result')]);
    }

    // when input has no symbols
    else if ( result.match(/-?\d+x\^-\d+/g) === null && str.match(/\/(\(-?\d+x\^-?\d+.+?\))/g) === null) {
        // dealing with coefficient
        for ( var i = 0; i < getCoeff(result).length; i++ ) {
        resultCollect += getCoeff(result)[i] + 'x^' + Number(getCoeff(result).length - 1 - i) + '+' ; }
        // when coefficient dealt well then getting 
        if ( resultCollect !== '') {
            resultCollect = ' = ' + resultCollect.slice(0,-1).replace(/[^\d]0x\^-?\d+/g,'').replace(/\+/g,' + ').replace(/x\^0/g,'').replace(/x\^1(?!\d+)/g,'x').replace(/\^(-?\d+)/g,'\^\{$1\}').replace(/\+ -/g,' - ');
        }
        // error when resultCollect is empty
        else {
            resultCollect = 'Error: Trying to divide by a polynomial ';
        }
        // display the output
        document.getElementById('result').innerHTML = str.replace(/\^(-?\d+)/g,'\^\{$1\}') + resultCollect;
        // MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById('result')]);
    }

    else {
        resultCollect = ' = ' + result.replace(/\^(-?\d+)/g,'\^\{$1\}');
        document.getElementById('result').innerHTML = str.replace(/\^(-?\d+)/g,'\^\{$1\}').replace(/\+ -/g,' - ') + resultCollect;
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById('result')]);
    }
}

function caller() {
    // to get the input from document
    var input = document.getElementById('input').value;
    // running the function evaluate for input
    evaluate(input);
}
