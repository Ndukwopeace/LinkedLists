// create a Node , a node should contain data and a pointer , pointing to the next node. These are represented as attributes of our node class

class Node {
    constructor(data){
        
        this.data = data;
        // set the next to null because we do not know the node we want to attach next to it initially
        this.next = null;
    }
}


/** 
 We now build the Single Linked List class. It should contain these attributes:
 - The Head  => which is a node 
 **The SLL doesnt know where any other node is other than the head node **

Lets view a SLL as a train with cars(Nodes),with only one door at the first car.

The first Car of the train is the head node
**/

class LinkedList {
    constructor(){
        // No node set to the head yet 
        this.head = null;
    }


/** Let's create method 
  Every data structure has methods to allow us interact with that data structure in a variety of ways. 
  (that's right LLS is actually a data structure)
  for Arrays => we have push , shift ,pop ,etc methods . 
  Let's add our own functionalities 
   */

    addFront(val){
        // the value is the value you want to add to the 
        let new_node  = new Node(val);

        // check to see if the current list does not have a head node i.e if the list is empty 
        if (!this.head){
            this.head = new_node;
            /* creates a link that can be accessed */
            return this ;
        }

        new_node.next = this.head;
        // then finally assign the new_node to be the new head of the list
        this.head = new_node;
        return this;
    }
}