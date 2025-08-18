
function judgePoint24(cards: number[]): boolean {
  for (let i = 0; i < 4; ++i) {
    const a = cards[i];
    for (let j = 0; j < 4; ++j) {
      if (j === i) continue;
      const b = cards[j];
      for (let k = 0; k < 4; ++k) {
        if (k === i || k === j) continue;
        const c = cards[k];
        const d = cards[6 - i - j - k];

        // x, y, z are operators.
        for (let x = 0; x < 4; ++x) {
          for (let y = 0; y < 4; ++y) {
            for (let z = 0; z < 4; ++z) {
              // ((a x b) y c) z d
              if (is24(calc(calc(calc(a, b, x), c, y), d, z))) return true;
              // (a x (b y c)) z d
              if (is24(calc(calc(a, calc(b, c, y), x), d, z))) return true;
              // a x (b y (c z d))
              if (is24(calc(a, calc(b, calc(c, d, z), y), z))) return true;
              // a x ((b y c) z d)
              if (is24(calc(a, calc(calc(b, c, y), d, z), x))) return true;
              // (a x b) y (c z d)
              if (is24(calc(calc(a, b, x), calc(c, d, z), y))) return true;
            }
          }
        }
      }
    }
  }
  return false;
}

function calc(a: number, b: number, op: number): number {
  switch (op) {
    case 0:
      return a + b;
    case 1:
      return a - b;
    case 2:
      return a * b;
    default:
      return a / b;
  }
}

function is24(x: number): boolean {
  return Math.abs(x - 24) <= 1e-5;
}