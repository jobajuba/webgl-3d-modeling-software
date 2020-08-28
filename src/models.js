class Surface {
  constructor() {
    this.tempVertexArray = [];
    this.tempColorArray = [];
  }

  pushVertex = (x, y, z) => {
    this.tempVertexArray.push(x);
    this.tempVertexArray.push(y);
    this.tempVertexArray.push(z);

    // console.log(`\tNew Vertex > (${x},${y},${z})`);
  };

  pushColor = (r, g, b) => {
    this.tempColorArray.push(r);
    this.tempColorArray.push(g);
    this.tempColorArray.push(b);

    // console.log(`\t New Color > (${r},${g},${b})`);
  };

  getVertices = () => {
    return new Float32Array(this.tempVertexArray);
  };

  getColors = () => {
    return new Float32Array(this.tempColorArray);
  };
}

class Model {
  constructor() {
    this.surfaceArray = [];
  }

  pushSurface = (surface) => {
    this.surfaceArray.push(surface);
  };

  getSurfaces = () => {
    return this.surfaceArray;
  };
}
