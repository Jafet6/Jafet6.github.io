class Pen {
  constructor(point, color, ink = 100) {
    this.point = point;
    this.color = color;
    this.ink = ink;
  }

  loseInk(quant) {
    this.ink -= quant;
  }

  sign() {
    this.loseInk(10);
    return `'I've signed a text with a ${this.color} pen. charge: ${this.ink}%'`;
  }

  wroteText(string) {
    this.loseInk(string.length);
    return string;
  }

}

const bluePenLargePoint = new Pen (2.1, 'blue', 95);
console.log(bluePenLargePoint.wroteText('kkkk'));
console.log(bluePenLargePoint.ink)
