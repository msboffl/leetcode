class Solution {
    public int scoreOfParentheses(String s) {
        Stack<Integer> stack = new Stack<>();
        int score = 0;

        for (char ch : s.toCharArray()) {
            if (ch == '(') {
                // Save the score before entering a new pair
                stack.push(score);
                score = 0;
            } else {
                // If inside score is 0, this is "()"
                // Otherwise it is "(A)" => 2 * A
                int innerScore = (score == 0) ? 1 : 2 * score;

                // Add it to the previous level
                score = stack.pop() + innerScore;
            }
        }

        return score;
    }
}