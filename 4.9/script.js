function changeStyle() {
    let p = document.getElementById('h1');
    p.style.fontSize = "12px";
    p.style.color = "blue";
    p.style.background = "white";
}

function changeStyleBack() {
    let back = document.getElementById('h1');
    back.style.fontSize = "32px";
    back.style.color = "black";
}

function changeImage() {
    let image_switch = document.getElementById("myImage");
    if (image_switch.src.match("cat")) {
        image_switch.src = "kitik.png";
    } else {
        image_switch.src = "cat.png";
    }
}
function secondclick() {
    let p = document.getElementById('h2');
    p.style.color = 'blue';
}