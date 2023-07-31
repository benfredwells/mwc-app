import { LitElement, html } from "lit";

class MwcAppDrawing extends LitElement {
  static properties = {
    colour: {},
    shape: {},
  };

  constructor() {
    super();
    this.colour = "";
    this.shape = "";
  }

  get _canvas() {
    return this.renderRoot?.querySelector('canvas') ?? null;
  }

  render() {
    return html`<canvas id="canvas" width=100 height=100></canvas>`;
  }

  firstUpdated() {
    this.paint();
  }

  shouldUpdate() {
    this.paint();
    return (this._canvas == null);
  }

  paint() {
    if (!this._canvas)
      return;

    var ctx = this._canvas.getContext("2d");
    ctx.save();
    ctx.clearRect(0, 0, 100, 100);

    if (this.colour != "" && this.shape != "") {
      ctx.fillStyle = this.colour;
      ctx.fillRect(0, 0, 100, 100);
    }

    ctx.restore();
  }
}

customElements.define("mwc-app-drawing", MwcAppDrawing);
