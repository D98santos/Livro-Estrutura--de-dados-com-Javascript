import { defaultEquals } from "../util.mjs";
import LinkedList from "./lista-ligada.mjs";
import { DoublyNode } from "../models/linked-list-models.mjs";

export default class DoublyLinkedList extends LinkedList {
  //4
  constructor(equalsFn = defaultEquals) {
    super(equalsFn); //5
    this.tail = undefined; //6
  }

  push(element) {
    const node = new DoublyNode(element);
    if (this.head == null) {
      this.head = node;
      this.tail = node; // NEW
    } else {
      // attach to the tail node // NEW
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.count++;
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          //1 NOVO
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head; // 2
          current.prev = node; // 3 NOVO
          this.head = node; // 4
        }
      } else if (index === this.count) {
        // útimo item - NOVO
        this.tail = this.getElementAt(this.size() - 1); //MINHA CORREÇÃO ALTERNATIVA
        current = this.tail; // 5
        current.next = node; // 6
        node.prev = current; // 7
        this.tail = node; //8
      } else {
        const previous = this.getElementAt(index - 1); // 9
        current = previous.next; // 10
        node.next = current; // 11
        previous.next = node; // 12
        current.prev = node; // 13 NOVO
        node.prev = previous; // 14 NOVO
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index){
    if(index >= 0 && index < this.count) {
      let current = this.head;
      if(index === 0){
        this.head = current.next; //1
        //se houver apenas um item, atualizamos tail também - NOVO
        if(this.count === 1){  // 2
          this.tail = undefined;
        } else {
          this.head.prev = undefined; // 3
        }
      } else if(index === this.count -1){ //último item - NOVO
        current = this.tail;// 4
        this.tail =  current.prev; // 5
        this.tail.next = undefined; // 6
      } else {
        current = this.getElementAt(index);// 7
        const previous = current.prev; // 8
        // faz a ligação de previous com next de current - pula esse elemento para remove-lo
        previous.next = current.next;// 9
        current.next.prev = previous; // 10 NOVO
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }

  indexOf(element) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (this.equalsFn(element, current.element)) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  getHead() {
    return this.head;
  }
  getTail() {
    return this.tail;
  }

  clear() {
    super.clear();
    this.tail = undefined;
  }
  toString() {
    if (this.head == null) {
      return '';
    }
    let objString = `${this.head.element}`;
    let current = this.head.next;
    while (current != null) {
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString;
  }

  inverseToString() {
    if (this.tail == null) {
      return '';
    }
    let objString = `${this.tail.element}`;
    let previous = this.tail.prev;
    while (previous != null) {
      objString = `${objString},${previous.element}`;
      previous = previous.prev;
    }
    return objString;
  }
}

const doubllylist = new DoublyLinkedList();
doubllylist.push(15);
doubllylist.push(10);

//console.log(doubllylist.count);

doubllylist.insert(44, 1);

console.log(doubllylist);
console.log(-1 <= 0);
doubllylist.novo = 'kk'
console.log(doubllylist.novo)