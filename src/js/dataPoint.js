class DataPoint {
  constructor(value) {
    this.value = value;
    this.isHighlighted = false;
  }

  draw(x, y, width, height) {
    stroke(0);
    strokeWeight(0.5);

    if (this.isHighlighted) {
      fill(0, 255, 0);
    } else {
      fill(255);
    }

    rect(x, y, width, height);
  }
}
