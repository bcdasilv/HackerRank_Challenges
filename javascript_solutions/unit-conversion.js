
//DDL
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

// SI prefix. : K, M, G, T, P, E
// https://en.wikipedia.org/wiki/Metric_prefix
// binary unit prefix: Ki, Mi, Gi, Ti, Pi, Ei, ...
// https://en.wikipedia.org/wiki/Binary_prefix

// 3.5M => 3500000 (3.5 * 1000 * 1000)
// input 3.5M => 3500000
// 6Ki = (6*1024) = 6144
// input 6Ki => 6144

function convert_prefix(s) {
// 1) Parse the string
//  1.1) Take the number part
//  1.2) Take the prefix part
// 2) Based on the prefix multiple the number by 1000 or 1024

    const unit = extractUnit(s);

    if (!unit) {
        throw Error ("Invalid input");
    } else {
        const number = s.substring(0, s.length - unit.length);
        if (!Number.isNaN(Number(number))) {
            const multiplier = mapMultiplier(unit);
            const result = Number(number) * multiplier;
            return result;
        }
    }
    
}

function mapMultiplier(unit){
    
    const unitsMap = {
        "K": 1000, 
        "Ki": 1024, 
        "M": Math.pow(1000, 2), 
        "Mi": Math.pow(1024, 2), 
        "Gi": Math.pow(1024, 3), 
        "G": Math.pow(1000, 3), 
        "Ti": Math.pow(1024, 4), 
        "T": Math.pow(1000, 4), 
        "Pi": Math.pow(1024, 5), 
        "P": Math.pow(1000, 5), 
        "E": Math.pow(1000, 6),
        "Ei": Math.pow(1024, 6)
    };
    const multiplier = unitsMap[unit];
    if (multiplier) {
        return multiplier
    }
    
    return;
    
}

function extractUnit(s) {
    //take the last char and check if it's not a number
    const lastChar = s.charAt(s.length - 1);
    let letter;
    if (lastChar === "i") {
        letter = s.charAt(s.length - 2);
        if (checkIfValidLetter(letter)) {
            return letter+lastChar;
        } else {
            return null; //or throw an error
        }
    } else if (checkIfValidLetter(lastChar)) {
        return lastChar;
    } else {
        return null; //or throw an error
    }
}

function checkIfValidLetter(letter) {
    const validLetters = ["K", "M", "G", "T", "P", "E"];
    return (validLetters.includes(letter));
}

function main() {
    var a = convert_prefix(readLine());    
    console.log(a)
}