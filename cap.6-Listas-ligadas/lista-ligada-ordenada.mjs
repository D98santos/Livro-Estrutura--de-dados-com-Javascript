import { Compare, defaultCompare, defaultEquals } from "../util.mjs";
import LinkedList from "./lista-ligada.mjs";

export default class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }

  push(element) {
    if (this.isEmpty()) {
      super.push(element);
    } else {
      const index = this.getIndexNextSortedElement(element);
      super.insert(element, index);
    }
  }

  insert(element, index = 0) {
    // 1
    //1
    if (this.isEmpty()) {
      return super.insert(element, 0); //2
    }
    const pos = this.getIndexNextSortedElement(element); //3
    return super.insert(element, pos); //4
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element); // 5
      if (comp === Compare.LESS_THAN) {
        //6
        return i;
      }
      current = current.next;
    }
    return i; // 7
  }
}

const ord = new SortedLinkedList();
ord.push(10);
ord.push(7);
ord.push(9);
ord.push(8);
ord.push(6);

console.log(ord);
console.log(ord.size());
