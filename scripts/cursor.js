var cursor;

window.onload = init()

function init(){
    cursor = document.getElementById('cursor')
    cursor.style.left = "0px";
}

function replaceNewline(str){ return str.replace(/\n/g, ''); }

function typeToLine(source , e){
    e = e || window.event;
    var textBox = source.value;
    var inputLine = document.getElementById('input');
    inputLine.innerHTML = replaceNewline(textBox);
}

function moveCursor(len, e){
    e = e || window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == 37 && parseInt(cursor.style.left) >= (0 - ((len - 1) * 10))) { cursor.style.left = parseInt(cursor.style.left) - 10 + "px"; } 
    else if (keyCode == 39 && (parseInt(cursor.style.left) + 10) <= 0) { cursor.style.left = parseInt(cursor.style.left) + 10 + "px"; }
}