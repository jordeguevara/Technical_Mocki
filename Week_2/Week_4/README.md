- Each object is identified by a key value

- fundamental data structure
- typically used to search
- performs a comparison of some sort while searching
- implementation of an abstract structure called a dictionary
- core functionality: find, insert, delete, store

a type of tree:

Binary Tree, -a tree whose elements have at most two children
Trie - a special data structure used to store strings that can be visualized like a graph
Binary Search Tree, (BST) - self-balancing BST
-AVL, B-trees, Red-black trees

if given a tree, perform some traversal :
fundamental traversals:
dfs:
-Pre Order Traversal - Root Left Right
`1. Traverse the left subtree, i.e., call Inorder(left-subtree) 2. Visit the root. 3. Traverse the right subtree, i.e., call Inorder(right-subtree)`

- In Order Traversal - Left Root Right
  `1. Visit the root. 2. Traverse the left subtree, i.e., call Preorder(left-subtree) 3. Traverse the right subtree, i.e., call Preorder(right-subtree)`

  - Post Order Traversal - Left Right Root
    `

  1.  Traverse the left subtree, i.e., call Postorder(left-subtree)
  2.  Traverse the right subtree, i.e., call Postorder(right-subtree)
  3.  Visit the root.
      `
