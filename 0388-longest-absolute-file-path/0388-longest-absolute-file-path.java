class Solution {
    public int lengthLongestPath(String input) {
        String[] paths = input.split("\n");
        int[] levelLen = new int[1000];
        int maxLen = 0;

        for (String path : paths) {
            int level = path.lastIndexOf("\t") + 1;
            String name = path.substring(level);

            if (level == 0) {
                levelLen[level] = name.length();
            } else {
                levelLen[level] = levelLen[level - 1] + name.length() + 1; // +1 for '/'
            }

            if (name.contains(".")) {  // It's a file
                maxLen = Math.max(maxLen, levelLen[level]);
            }
        }

        return maxLen;
    }
}