window.onload = Start;

var cursor;

function Start() {

    cursor = document.getElementById("cursor");
    icons();

    document.getElementById('down').onclick = function(e) {
        
        document.getElementById('main2').scrollIntoView({block: "end", behavior: "smooth"});

    }

}

function icons() {

    var all = document.getElementsByClassName('icon');
    for(var i = 0; i < all.length; i++)
    {
        var icon = all[i];
        var att = icon.getAttribute('data-value');
        if(att == 'mail') all[i].onclick = () => { location.href = "mailto:mika.rottlaender@icloud.com"; }
    }

}

document.onmousemove = function(e) {

    var moveToX = (e.pageX - 25);
    var moveToY = (e.pageY - 25);

    move(moveToX, moveToY);

}

document.ontouchend = function(e) {

    var moveToX = e.originalEvent.touches[0].pageX;
    console.log(moveToX)

}

var first = true;

function move(_x,_y) {

    cursor.style.left = _x + "px";
    cursor.style.top = _y + "px";
    if(first)
        cursor.style.opacity = "1";
        first = false;

}