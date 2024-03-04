class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class SLL {
    constructor(){
        this.head = null ;
    }
    addFront(val){
        // 1. Instantiate node
        const new_node = new Node(val);
        
        // 2. Check if data structure has a head , if not set head to the node 
        if(!this.head){
            this.head = new_node;
            return this;
        }

        // 3. 

        new_node.next = this.head;
        this.head = new_node;
        return this

    }

    RemoveFront(){
        // Check if head exists ,if not do not return this 
        if (!this.head) return null;
        // set next node to head 
          const old_head = this.head
          this.head = old_head.next

          return this 
    }

    Front(){
        // Check if head exists ,if not do not return this 
        if (!this.head) return null;
        // set next node to head 
          const head = this.head
           const headValue = head.data

            
           return headValue
    }
}

const Test = new SLL()

console.log(Test.addFront(10).addFront(52).RemoveFront().Front())


