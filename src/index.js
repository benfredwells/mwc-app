import '@material/web/select/outlined-select';
import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';
import './drawing.js'; 

var colourSelect = document.getElementById("select-colour");
var shapeSelect = document.getElementById("select-shape");
var drawing = document.getElementById("drawing");

function updateDrawing() {
    drawing.colour = colourSelect.value;
    drawing.shape = shapeSelect.value;
}

colourSelect.onchange = updateDrawing;
shapeSelect.onchange = updateDrawing;
window.onload = updateDrawing;