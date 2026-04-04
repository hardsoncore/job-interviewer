<h3>1. Trees</h3>

<p>
  <span class="accent">A tree</span> is a hierarchical data structure consisting of nodes. Unlike arrays or linked lists, where data is linear, data in a tree branches out.
</p>

<p>
  A tree always has one main node called the <strong>root</strong>. From the root, there are connections (edges) to other nodes called <strong>children</strong>. Nodes that do not have any children are called <strong>leaves</strong>.
</p>

<p class="info">
  An important rule of a tree: there is only one path between any two nodes, and a tree cannot have cycles (closed loops).
</p>

<h4>Key Features:</h4>

<p>
  <strong>Hierarchy</strong>: Trees are perfect for representing data with "parent-child" relationships.
</p>

<p>
  <strong>Search Direction</strong>: Thanks to the hierarchy, searching for elements in trees (especially in balanced search trees) is much faster than in linear structures. Search time is often reduced to logarithmic $O(\log n)$.
</p>

<h4>Examples</h4>

<p>
  A computer's file system is a tree, where the root directory is the root, and folders and files are nodes and leaves. Another example is the <code>DOM (Document Object Model)</code> in web development, which represents the structure of an HTML document as a tree.
</p>

<h3>
  2. Inverted Trees
</h3>

<p>
  <span class="accent">An inverted tree</span> is a concept that arises when we change the direction of connections in a tree. Instead of having the root at the top and leaves at the bottom, we can represent a tree as "inverted," where the roots are at the bottom and leaves are at the top.
</p>

<p class="info">
  This is a subset of trees, such as "trees with parent pointers" (Upward Trees).
</p>

<p>
  Usually, when people talk about inverted trees, they mean trees with parent pointers (Upward Trees / Disjoint Sets).
</p>

<p>
  In a standard tree, a parent knows its children, but the children might not know the parent. In an "inverted" representation (often used in the "Disjoint Set Union" data structure), each node only stores a reference to its parent.
</p>

<h4>Features (for upward-pointing structures):</h4>

<ul>
  <li>It is easy to find the root (and identify which set an element belongs to) simply by moving up the chain.</li>
  <li>The parent does not have a list of its children, so it is impossible to move downward.</li>
</ul>

<h3>
  3. Binary Trees
</h3>

<p>
  <span class="accent">A binary tree</span> is a specific type of tree where each node can have no more than two children. These children are usually called the "left" and "right" child.
</p>

<h4>Why were binary trees invented?</h4>
<p>
  It might seem strange: why artificially limit the structure to only two branches if a regular tree offers total freedom?
</p>

<p>
  The answer lies in algorithms and predictability. When we know for sure that there are at most two paths, we can build incredibly powerful search algorithms.
</p>

<p>
  Think about how you look up a word in a paper dictionary: you open it roughly in the middle. If the letter you need is further to the left, you discard the entire right half of the book and repeat the process for the left. This is the essence of binary search. The search complexity is $O(\log n)$, which is much faster than a linear search in regular trees.
</p>

<p class="info">
  There are many types of binary trees: balanced (AVL, Red-Black), unbalanced, full, complete, incomplete, etc. Each is optimized for specific tasks.
</p>

<h3>3.1. Binary Search Tree (BST)</h3>
<p>
  <span class="accent">A Binary Search Tree</span> is a binary tree where the following condition is met for every node: all values in the left subtree are smaller than the node's value, and all values in the right subtree are larger.
</p>

<p>
  This is the foundation for fast searching. The rule is simple: everything smaller than the parent goes to the left branch; everything larger goes to the right.
</p>

<p>
  <strong>Usage:</strong> These are the basis for database indexes (often in the form of more complex balanced trees like B-trees or Red-Black trees). They are also used to implement associative arrays (dictionaries/maps) in some programming languages.
</p>

<h3>3.2. Heap (Binary Heap)</h3>
<p>
  <span class="accent">A heap</span> is a special kind of binary tree where the parent is always larger (Max-Heap) or always smaller (Min-Heap) than its children. Additionally, the tree is always filled level by level from left to right.
</p>

<p>
  <strong>Usage:</strong> This is an ideal structure for creating priority queues. When an operating system or a task scheduler needs to quickly retrieve the highest-priority task from thousands of others, a heap allows doing this instantly: $O(1)$ for access and $O(\log n)$ for removal.
</p>

<h3>
  4. Graphs
</h3>

<p>
  <span class="accent">A graph</span> is a more general data structure consisting of nodes (vertices) and the connections between them (edges). Unlike trees, graphs can contain cycles and do not have a strict hierarchical structure.
</p>

<p>
  A graph consists of vertices and edges that connect them. Edges can have one direction or be bidirectional.
</p>

<p>
  In graphs, there are no limits on the number of connections between vertices, and they can form cycles. This makes graphs powerful tools for modeling complex systems like social networks, computer networks, and more.
</p>

<h4>Key Features:</h4>

<p>
  <strong>Cycles</strong>: Graphs can have cycles. You can leave node A, pass through B and C, and return to A.
</p>

<p>
  <strong>Weight</strong>: Edges can have a "weight" (the cost of the path). This is used in algorithms to find the shortest path (for example, GPS navigators finding a route).
</p>

<p>
  <strong>Connectivity</strong>: A graph can be divided into several independent, unconnected parts (islands).
</p>

<p>
  <strong>Practice</strong>: Graphs are used to model complex networks. A Dependency Graph is created by module bundlers (like Webpack) when they analyze which file imports which other files. Graphs are also used in designing complex State Machines or routing maps in applications.
</p>

<img src="assets/img/trees-vs-graphs.png" alt="Graphs in real life" />
