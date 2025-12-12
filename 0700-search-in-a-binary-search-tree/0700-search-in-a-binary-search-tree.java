/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private TreeNode findSubtree(TreeNode node, int key) {
        if(node == null) return null;
        if(node.val == key) return node;

        if(key < node.val) {
            return findSubtree(node.left, key);
        }

        return findSubtree(node.right, key);

    }
    public TreeNode searchBST(TreeNode root, int val) {
        return findSubtree(root, val);
    }
}