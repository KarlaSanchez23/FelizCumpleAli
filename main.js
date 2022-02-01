var piezas=document.getElementsByClassName('movil')

var tamWidth=[134,134,134,134,134,134,134,134,134]
var tamHeight=[134,134,134,134,134,134,134,134,134]

for(var i=0; i<piezas.length; i++){
    piezas[i].setAttribute("width", tamWidth[i]);
    piezas[i].setAttribute("height", tamHeight[i]);
    piezas[i].setAttribute("x", Math.floor((Math.random()*10)+1));
    piezas[i].setAttribute("y", Math.floor((Math.random()*409)+1));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementSelect=0;
var currentX=0;
var currentY=0;
var currentPosX=0;
var currentPosY=0;

function seleccionarElemento(evt){
    elementSelect=evt.target;
    currentX=evt.clientX;
    currentY=evt.clientY;
    currentPosX=parseFloat(elementSelect.getAttribute("x"));
    currentPosY=parseFloat(elementSelect.getAttribute("y"));
    elementSelect.setAttribute("onmousemove", "moverElemento(evt)");
}

function moverElemento(evt){
    var dx= evt.clientX-currentX;
    var dy=evt.clientY-currentY;
    currentPosX=currentPosX+dx;
    currentPosY=currentPosY+dy;
    elementSelect.setAttribute("x", currentPosX);
    elementSelect.setAttribute("y", currentPosY);
    currentX=evt.clientX;
    currentY=evt.clientY;
    elementSelect.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementSelect.setAttribute("onmouseup", "deseleccionarElemento(evt)");
    iman();
}

function deseleccionarElemento(evt){
    if(elementSelect !=0){
        elementSelect.removeAttribute("onmousemove");
        elementSelect.removeAttribute("onmouseout");
        elementSelect.removeAttribute("onmouseup");
        elementSelect=0;
    }
}

var entorno= document.getElementById('entorno');

function reordenar(evt){
    var padre= evt.target.parseNode;
    var clone= padre.cloneNode(true);
    var id= padre.getAttribute("id")
    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);
    return entorno.lastChild.firstChild;
}




