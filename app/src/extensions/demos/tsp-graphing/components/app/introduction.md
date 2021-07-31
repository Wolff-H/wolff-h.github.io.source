# Introduction
This is the data visualization tool for solved Travel Salesman Problem in Evolution Algorithm.
- Travel Salesman Problem  
    A problem of, given distances between cities, determine a route that costs least to travel all cities while visiting each at only once.
- Evolution Algorithm  
    Evolutionary algorithm (EA) is a subset of generic population-based metaheuristic optimization algorithm, inspired by biological evolution. Candidate solutions play the role of individuals in a population, and the fitness function determines the quality of the solutions.
## Concepts
- Experiment  
    An experiment consists of a number of trials, where each trial is an independant evolution. An experiment is to come up with a suitable solution.
- Evolution  
    An evolution is a sequence of generations. It will finally converges.
- Generation  
    Fitness distribution of a generation.
- Individual  
    The individual gene (characteristic combination/solution).
## Usage
1. Select experiment instance and algorithm.
2. Manipulate dashboard to alter parameters for figures.
3. Statistics for graphs are shown in dashboard.
## Datasets
The city map datasets those we've run experiments.
- WesternSahara (29 cities)
- Uruguay (734 cities)
- Canada (4663 cities)
It's imited by the size of solution file size to use datasets in the GUI, thus only WesternSahara one is presented. The rest can be found in the report. (And I may optimize the dataset structure to see if those can then be utilized.)