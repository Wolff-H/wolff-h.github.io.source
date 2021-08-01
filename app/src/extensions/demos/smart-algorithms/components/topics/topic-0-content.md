# Content

This demo includes several smart algorithms those I did in university.  
The basic framework was given in class for an algorithm and I implemented the algorithms in code from scratch.

1. A-star Pathfinding

    A-star (A*) is a graph traversal and path search algorithm, due to its completeness, optimality, and optimal efficiency, it's widely used in computer science. The visualization app provides 10 different maps and plenty options for search operation.
    For optimization, I store a preprocessed sector map before the search starts, therefore my code runs ten times faster than the solution algorithm. However it can still take some time to run the preprocessing before you enter a new map.

2. JPS Pathfinding

    Jump point search (JPS) is an optimization to the A* search algorithm for uniform-cost grids. It reduces symmetries in the search procedure by means of graph pruning, eliminating certain nodes in the grid based on assumptions.
    This work inherits the framework from A-star's.

3. Alpha-Beta Method

    Alpha–beta pruning is a search algorithm that seeks to decrease the number of nodes that are evaluated by the minimax algorithm in its search tree.
    Connect Four is a two-player connection board game in which the players first choose a color and then take turns dropping one colored disc from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.

More will be posted as I set them up...