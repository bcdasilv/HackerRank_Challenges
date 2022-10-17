//https://leetcode.com/problems/implement-trie-prefix-tree
class TrieNode {

    // private TrieNode[] links;
    private HashMap<Character, TrieNode> linksMap;
    // private final int R = 26;
    
    private boolean isEnd;

    public TrieNode() {
        linksMap = new HashMap<Character, TrieNode>();
    }

    public boolean containsKey(Character ch) {
        // return links[ch -'a'] != null;
        return (linksMap.containsKey(ch));
    }

    public TrieNode get(Character ch) {
        return linksMap.get(ch);
        // return links[ch -'a'];
    }

    public void put(Character ch, TrieNode node) {
        linksMap.put(ch, node);
        // links[ch -'a'] = node;
    }

    public void setEnd() {
        isEnd = true;
    }

    public void setEnd(boolean isEnd) {
        this.isEnd = isEnd;
    }

    public boolean isEnd() {
        return isEnd;
    }

}

class Trie {

    private TrieNode root;

    public Trie() {
        root = new TrieNode(); 
    }
    
    public void insert(String word) {
        TrieNode node = root;
        for (char ch: word.toCharArray()) {
            if (!node.containsKey(new Character(ch))) {
                node.put(new Character(ch), new TrieNode());
            }
            node = node.get(new Character(ch));
        }
        node.setEnd();
    }
    
    public boolean search(String word) {
        TrieNode node = root;
        for (char ch: word.toCharArray()) {
            if (!node.containsKey(new Character(ch))) {
                return false;
            }
            node = node.get(ch);
        }  
        return (node.isEnd());
    }
    
    public boolean startsWith(String prefix) {
        TrieNode node = root;
        for (char ch: prefix.toCharArray()) {
            if (!node.containsKey(new Character(ch))) {
                return false;
            }
            node = node.get(ch);
        }  
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */