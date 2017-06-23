## EBNF Visualization

Client Code to visualize EBNF metasyntax language

1. Parse EBNF metasyntax (not done)
2. Construct a graph (not done)
3. Visualize the graph (below)

This code takes a graph whose nodes are JSON objects with the following structure:

node ={
 name: ['button 1','button 2', ... 'button n'],
 classname: 'meta-data', // Unnecessary
 children: children_node, // Another Node JSON object that resides one level below
 sibling: sibling_node } // Another JSON object that resides on the same level
}

Note that the pointer to children_node and sibling_node are directed, as opposed to undirected.

For example, if we have the following graph: (each oval is a node, the words inside are its name, the label on top is the name of the object inside the code)

![Alt text](https://github.com/danrugeles/EBNF_visualization/blob/master/EBNF.png "aql graph")

We can navigate through the graph by clicking on the buttons. The text would then be generated on top of the webpage.
Using this graph, we can create valid sentences such:

 - Where males walk in Singapore
 - How many places 
 - Top 10 activities walk at hours= (because of the directionality of the siblings)

Notice that 'How many places time= hour' is not a valid sentence, because of the directionality of the siblings

Cycles can be done as illustrated on levels 4,5. In fact one can go as 'infinitely deep' by recalling this levels

One of sentence is illustrated below:

![Alt text](https://github.com/danrugeles/EBNF_visualization/blob/master/sentence.png "aql sentence")

