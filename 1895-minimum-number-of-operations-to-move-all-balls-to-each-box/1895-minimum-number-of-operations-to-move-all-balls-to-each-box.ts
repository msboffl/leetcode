function minOperations(boxes) {
  const n = boxes.length;
  const result = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (boxes[i] === '1') {
      for (let j = 0; j < n; j++) {
        result[j] += Math.abs(i - j);
      }
    }
  }

  return result;
}
