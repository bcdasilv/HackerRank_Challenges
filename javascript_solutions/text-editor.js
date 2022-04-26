//https://www.hackerrank.com/challenges/simple-text-editor/problem
function processData(input) {
    //Enter your code here
    const mementoStack = []; //memento stack
    let text = "";
    input.split(/\n/).slice(1).forEach(line => {
       const [op, arg] = line.split(" "); 
    //    console.log(`${op} ${str}`);
        if (op === "1") {
            mementoStack.push(text);
            text += arg;
        } else if (op === "2") {
            mementoStack.push(text);
            text = text.slice(0, text.length - parseInt(arg));
        } else if (op === "3") {
            console.log(text.charAt(arg-1));
        } else if (op === "4") {
            text = mementoStack.pop();
        }
    });
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
