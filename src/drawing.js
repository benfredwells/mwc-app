import { LitElement, html } from "lit";

class MwcAppDrawing extends LitElement {
  static properties = {
    colour: {},
    shape: {},
  };

  constructor() {
    super();
    this.colour = "green";
    this.shape = "square";
  }

  render() {
    return html`<p>${this.colour} ${this.shape}</p>`;
  }
}

customElements.define("mwc-app-drawing", MwcAppDrawing);
