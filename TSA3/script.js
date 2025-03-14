let output = document.getElementById("output");

function addToDisplay(value) {
    if (output.innerHTML === "0") {
        output.innerHTML = value;
    } else {
        output.innerHTML += value;
    }
}

function clearDisplay() {
    output.innerHTML = "0";
}

function backSpace() {
    output.innerHTML = output.innerHTML.slice(0, -1);
    if (output.innerHTML === "") {
        output.innerHTML = "0";
    }
}

function computeResult() {
    try {
        output.innerHTML = eval(output.innerHTML);
    } catch (error) {
        output.innerHTML = "SyntaxError";
    }
}
