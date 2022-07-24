import DoublyLinkedList from "./lista-duplamente-ligada.mjs";

class StackLinkedList {
    constructor(){
        this.items = new DoublyLinkedList(); //1 
    
    }
    
    push(element){
        this.push(element);//2
    }
    
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.remove(this.size() - 1); // 3
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items.getElementAt(this.size() - 1).element;
    }

    isEmpty(){
        return this.isEmpty();
    }

    size(){
        return this.size();
    }

    clear(){
        return this.items.clear();
    }

    toString(){
        return this.items.toString();
    }
}