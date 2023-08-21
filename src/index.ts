import '@material/web/select/outlined-select';
import '@material/web/select/filled-select.js';
import '@material/web/select/select-option.js';
import './drawing.js';
import './app.js';

import { MwcApp } from './app.js';

var app:MwcApp = <MwcApp>document.getElementById("app");

window.onload = () => {app.updateDrawing(); app.paint()};
