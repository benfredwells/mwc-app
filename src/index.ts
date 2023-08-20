import '@material/web/select/outlined-select';
import { MdOutlinedSelect } from '@material/web/select/outlined-select.js';
import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';
import './drawing.js';
import { MwcAppDrawing } from './drawing.js';

var colourSelect:MdOutlinedSelect = <MdOutlinedSelect>document.getElementById("select-colour");
var shapeSelect:MdOutlinedSelect = <MdOutlinedSelect>document.getElementById("select-shape");
var drawing: MwcAppDrawing = <MwcAppDrawing>document.getElementById("drawing");

function updateDrawing() {
  drawing.colour = colourSelect.value;
  drawing.shape = shapeSelect.value;
}

colourSelect.onchange = updateDrawing;
shapeSelect.onchange = updateDrawing;
window.onload = updateDrawing;
