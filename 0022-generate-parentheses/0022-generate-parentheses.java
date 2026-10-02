class Solution {

    public List<String> generateParenthesis(int n) {
        List<String> result = new ArrayList<>();

        backtrack(result, "", 0, 0, n);

        return result;
    }

    private void backtrack(List<String> result,
                           String current,
                           int open,
                           int close,
                           int n) {

        // Base case:
        // We used all n opening and n closing brackets
        if (open == n && close == n) {
            result.add(current);
            return;
        }

        // We can add '(' as long as we haven't used all n
        if (open < n) {
            backtrack(result, current + "(", open + 1, close, n);
        }

        // We can add ')' only if there is an unmatched '('
        if (close < open) {
            backtrack(result, current + ")", open, close + 1, n);
        }
    }
}