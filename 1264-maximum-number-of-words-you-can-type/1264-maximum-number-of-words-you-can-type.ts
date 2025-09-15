function canBeTypedWords(text: string, brokenLetters: string): number {
  const broken = new Set(brokenLetters.split(''));
  let count = 0;
  for (const w of text.split(' ')) {
    let ok = true;
    for (const ch of w) {
      if (broken.has(ch)) { ok = false; break; }
    }
    if (ok) count++;
  }
  return count;
}