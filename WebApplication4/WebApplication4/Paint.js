function onClickButton2() {
    var canvas = document.getElementById('canv');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(1, 1);
    ctx.lineTo(100, 100);
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "blue";
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = 'blue';
    ctx.textBaseline = "top";
    ctx.fillText("TEXT", 20, 20);
}

function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try { xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); }
        catch (E) { xmlhttp = false; }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function onClickAJAX() {
    var xmlhttp = getXmlHttp();
    xmlhttp.open('GET', 'TextFile.txt', true);// false - синхронно
    xmlhttp.send(null);
    //-------------------------------
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 404) {
            return;
        }
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var Textout = xmlhttp.responseText;
            PaintText(Textout);
        }// ==4 ==200
    }//onreadystatechange 
    //---------------------------------
}

function PaintText(txt) {
    var canvas = document.getElementById('canv1');
    var ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(1, 1);
    ctx.lineTo(100, 100);
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = "blue";
    ctx.font = 'bold 14px sans-serif';
    ctx.fillStyle = 'blue';
    ctx.textBaseline = "top";
    ctx.fillText(txt, 20, 20);
}
