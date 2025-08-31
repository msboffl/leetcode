function solveSudoku(board: string[][]): void {
    const rows: number[][] = Array.from({ length: 9 }, () => Array(10).fill(0));
    const cols: number[][] = Array.from({ length: 9 }, () => Array(10).fill(0));
    const boxes: number[][] = Array.from({ length: 9 }, () => Array(10).fill(0));
    const emptyCells: [number, number][] = [];

    // Initialize the bitmasks and collect empty cells
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];
            if (num === '.') {
                emptyCells.push([r, c]);
            } else {
                const n = parseInt(num);
                rows[r][n] = 1;
                cols[c][n] = 1;
                boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)][n] = 1;
            }
        }
    }

    function isValid(r: number, c: number, n: number): boolean {
        const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
        return rows[r][n] === 0 && cols[c][n] === 0 && boxes[boxIndex][n] === 0;
    }

    function placeNumber(r: number, c: number, n: number): void {
        rows[r][n] = 1;
        cols[c][n] = 1;
        boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)][n] = 1;
        board[r][c] = n.toString();
    }

    function removeNumber(r: number, c: number, n: number): void {
        rows[r][n] = 0;
        cols[c][n] = 0;
        boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)][n] = 0;
        board[r][c] = '.';
    }

    function backtrack(index: number): boolean {
        if (index === emptyCells.length) return true;

        const [r, c] = emptyCells[index];
        for (let n = 1; n <= 9; n++) {
            if (isValid(r, c, n)) {
                placeNumber(r, c, n);
                if (backtrack(index + 1)) return true;
                removeNumber(r, c, n);
            }
        }
        return false;
    }

    backtrack(0);
}