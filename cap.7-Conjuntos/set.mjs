/*export default*/ class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {};
  }

  sizeLegacy() {
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  valuesLegacy() {
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }
    return values;
  }

}
const set = new Set();
set.add(1);
set.add(2)

console.log(set.valuesLegacy());
console.log(set.has(1));
console.log(set.sizeLegacy());
set.delete(1)
console.log(set.valuesLegacy());
console.log(set.has(1));
console.log(set.sizeLegacy());
set.delete(2)
console.log(set.valuesLegacy());
console.log(set.has(1));
console.log(set.sizeLegacy());