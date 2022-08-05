import { defaultEquals } from "../util.mjs";
import { Node } from "../models/linked-list-models.mjs"; //1

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0; //2
    this.head = undefined; //3
    this.equalsFn = equalsFn; //4
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      // 1
      let node = this.head; // 2
      for (let i = 0; i < index && node != null; i++) {
        // 3
        node = node.next;
      }
      return node; //4
    }
    return undefined; // 5
  }

  removeAt(index) {
    //verifica valores fora do intervalo
    if (index >= 0 && index < this.count) {
      // 1
      let current = this.head; //2
      //remove o primeiro item
      if (index == 0) {
        //3
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1); // 4 REFATORADO
        current = previous.next;
        previous.next = current.next;
      }
      this.count--; //9
      return current.element;
    }
    return undefined; //10
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      //1
      const node = new Node(element);
      if (index === 0) {
        // adiciona na primeira posição
        const current = this.head;
        node.next = current; //2
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1); // 3
        const current = previous.next; //4
        node.next = current; //5
        previous.next = node; //6.
      }
      this.count++; // atualiza o tamanho da lista
      return true;
    }
    return false; //7
  }

  indexOf(element) {
    let current = this.head; // 1
    for (let i = 0; i < this.count && current != null; i++) {
      // 2
      if (this.equalsFn(element, current.element)) {
        // 3
        return i; // 4
      }
      current = current.next; // 5
    }
    return -1; //6
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  clear() {
    this.head = undefined;
    this.count = 0;
  }

  toString() {
    if (this.head == null) {
      //1
      return "";
    }
    let objString = `${this.head.element}`; // 2
    let current = this.head.next; // 3
    for (let i = 1; i < this.size() && current != null; i++) {
      //4
      objString = `${objString},${current.element}`;
      current = current.next;
    }
    return objString; //5
  }
}

// const list = new LinkedList();
// list.push(15);
// list.push(10);
// list.push("daniel");

// console.log(list);
// //list.removeAt(0);
// //console.log(list);
// //list.insert(55, 0)
// console.log(list);

// console.log(list.indexOf('daniel'));
// console.log(list.toString());
