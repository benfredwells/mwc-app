import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import { MwcAppDrawing } from './drawing.js';
import { MdOutlinedSelect } from '@material/web/select/outlined-select.js';

@customElement('mwc-app')
export class MwcApp extends LitElement {
  static styles = css`
    #content {
      display: flex;
      flex-direction: row;
    }

    #div-settings {
      display: flex;
      flex-direction: column;
      padding-right: 10px;
    }

    .div-setting {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .div-setting label {
      flex-grow: 1;
      padding-right: 10px;
    }
  `;

  render() {
    return html`
      <div id="content">
        <div id="div-settings">
          <div class="div-setting">
            <label>Colour</label>
            <md-outlined-select id="select-colour" @change=${this.updateDrawing}>
              <md-select-option value="red" headline="Red" selected></md-select-option>
              <md-select-option value="green" headline="Green"></md-select-option>
              <md-select-option value="blue" headline="Blue"></md-select-option>
            </md-outlined-select>
          </div>
          <div class="div-setting">
            <label>Shape</label>
            <md-outlined-select id="select-shape" @change=${this.updateDrawing}>
              <md-select-option value="square" headline="Square" selected></md-select-option>
              <md-select-option value="circle" headline="Circle"></md-select-option>
              <md-select-option value="triangle" headline="Triangle"></md-select-option>
            </md-outlined-select>
            </div>
        </div>
        <div>
          <mwc-app-drawing id="drawing"></mwc-app-drawing>
        </div>
      </div>`;
  }

  updateDrawing() {
    var drawing: MwcAppDrawing = <MwcAppDrawing>this.renderRoot?.querySelector('#drawing') ?? null;
    var colourSelect: MdOutlinedSelect = <MdOutlinedSelect>this.renderRoot?.querySelector('#select-colour') ?? null;
    var shapeSelect: MdOutlinedSelect = <MdOutlinedSelect>this.renderRoot?.querySelector('#select-shape') ?? null;
    if (!drawing || !colourSelect || !shapeSelect)
      return;

    drawing.colour = colourSelect.value;
    drawing.shape = shapeSelect.value;
  }

  paint() {
    var drawing: MwcAppDrawing = <MwcAppDrawing>this.renderRoot?.querySelector('#drawing') ?? null;
    if (!drawing)
      return;

    drawing.paint();
  }
}