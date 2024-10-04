document.getElementById("RED").onclick = red_button;
function red_button() {
    document.body.style.backgroundColor = "red";
    document.getElementById("RED").style.backgroundColor="red";
}

document.getElementById("BLUE").onclick = blue;
function blue() {
    document.body.style.backgroundColor = "blue";
    document.getElementById("BLUE").style.backgroundColor="blue";
}

document.getElementById("GREEN").onclick = green;
function green() {
    document.body.style.backgroundColor = "green";
    document.getElementById("GREEN").style.backgroundColor="green";
}

document.getElementById("RESET").onclick = reset_button;
function reset_button() {
    document.body.style.backgroundColor = "white";
    document.getElementById("RESET").style.backgroundColor="white";
    document.getElementById("GREEN").style.backgroundColor="white";
    document.getElementById("BLUE").style.backgroundColor="white";
    document.getElementById("RED").style.backgroundColor="white";

}
