window.onresize = screen;
window.onload = screen;

function screen() {
    myWight = window.innerWidth;

    document.getElementById('size').innerHTML = "Width : " + myWight + "px";
}