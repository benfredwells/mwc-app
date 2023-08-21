import { LitElement, css, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';

import { MwcAppDrawing } from './drawing.js';
import { MdOutlinedSelect } from '@material/web/select/outlined-select.js';

@customElement('mwc-app')
export class MwcApp extends LitElement {
  @query('#drawing')
  drawing! : MwcAppDrawing | null;

  @query('#select-colour')
  colourSelect! : MdOutlinedSelect | null;

  @query('#select-shape')
  shapeSelect! : MdOutlinedSelect | null;

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
    if (!this.drawing || !this.colourSelect || !this.shapeSelect)
      return;

    this.drawing.colour = this.colourSelect.value;
    this.drawing.shape = this.shapeSelect.value;
  }

  paint() {
    if (!this.drawing)
      return;

    this.drawing.paint();
  }
}