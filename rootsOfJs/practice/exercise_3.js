function randMax(max) {
  return Math.trunc(1e9 * Math.random()) % max;
}

var reel = {
  symbols: ["♠", "♥", "♦", "♣", "☺", "★", "☾", "☀"],
  spin() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    this.position = (this.position + 100 + randMax(100)) % this.symbols.length;
  },
  display() {
    if (this.position == null) {
      this.position = randMax(this.symbols.length - 1);
    }
    return this.symbols[this.position];
  },
};

var slotMachine = {
  reels: [Object.create(reel), Object.create(reel), Object.create(reel)],
  spin() {
    this.reels.forEach(function spinReel(reel) {
      reel.spin();
    });
  },
  display() {
    const lines = [];
    this.reels.forEach((reel, idx) => {
      const len = reel.symbols.length;
      const indexAfter = (reel.position + 1) % len;
      const indexBefore = (len + (reel.position - 1)) % len;
      lines.push([
        reel.symbols[indexBefore],
        reel.display(),
        reel.symbols[indexAfter],
      ]);
    });
    return lines.join("\n");
  },
  transpose(array) {
    let transposedMatrix = [];
    for (let col = 0; col < array[0].length; col++) {
      const line = array.map((_, idx) => {
        return array[idx][col];
      });
      transposedMatrix.push(line);
    }
    return transposedMatrix;
  },
};
