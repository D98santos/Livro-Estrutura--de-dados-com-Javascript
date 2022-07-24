import {defaultEquals} from '../util.mjs'
import LinkedList from './lista-ligada.mjs'
import {Node} from './models/linked-list-models.mjs'

export default class CircularLinkedList extends LinkedList {
    constructor(equalsFn = defaultEquals){
        super(equalsFn);
    }

    push(element) {
        const node = new Node(element);
        let current;
        if (this.head == null) {
          this.head = node;
        } else {
          current = this.getElementAt(this.size() - 1);
          current.next = node;
        }
        // set node.next to head - to have circular list
        node.next = this.head;
        this.count++;
      }

    insert(element, index){
        if(index >= 0 && index <= this.count){
            const node = new Node(element);
            let current = this.head;
            if(index === 0){
                if(this.head == null){
                    this.head = node; // 1
                    node.next = this.head; //2 NOVO
                } else {
                    node.next = current;//3
                    current = this.getElementAt(size()); //4
                    // atualiza o último elemento
                    this.head = node; // 5
                    current.next = this.head; // 6 NOVO*-+
                }
            } else {//sem alteração neste cenário
                const previous = this.getElementAt(index -1);
                node.next = previous.next;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index){
        if(index >= 0 && index <= this.count){
            let current = this.head;
            if(index === 0){
                if(this.size() === 1){
                    this.head = undefined;
                } else {
                    const removed = this.head; // 1
                    current = this.getElementAt(this.size()); // 2 NOVO
                    this.head = this.head.next;// 3
                    current.next = this.head; // 4
                    current = removed; // 5
                }
            } else {
                // não há necessidade de atualizar o último elemento da lista circular
                const previous = this.getElementAt(index -1);
            }
            this.count--;
            return current.element; // 6
        }
        return undefined;
    }
}
