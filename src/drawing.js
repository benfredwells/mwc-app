import { LitElement, html } from "lit";

const canvasWidth = 100;
const canvasHeight = 100;
const margin = 10;
const outlineColour = "black";
const outlineWidth = 1;

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
    return html`<canvas id="canvas" width=${canvasWidth} height=${canvasHeight}></canvas>`;
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
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.strokeStyle = outlineColour;
    ctx.lineWidth = outlineWidth;
    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);

    if (this.colour != "" && this.shape != "") {
      ctx.fillStyle = this.colour;
      var shapeWidth = canvasWidth - (2 * margin);
      var shapeHeight = canvasHeight - (2 * margin);
      switch (this.shape) {
        case "square":
          ctx.fillRect(margin, margin, shapeWidth, shapeHeight);
          break;
        case "circle":
          ctx.beginPath();
          var radius;
          if (shapeHeight < shapeWidth) {
            radius = shapeHeight / 2;
          } else {
            radius = shapeWidth / 2;
          }
          ctx.arc(canvasWidth / 2, canvasHeight / 2, radius, 0, Math.PI * 2, true);
          ctx.fill();
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(margin, canvasHeight - margin);
          ctx.lineTo(canvasWidth / 2, margin);
          ctx.lineTo(canvasWidth - margin, canvasHeight - margin);
          ctx.closePath();
          ctx.fill();
          break;
      }
    }

    ctx.restore();
  }
}

customElements.define("mwc-app-drawing", MwcAppDrawing);
