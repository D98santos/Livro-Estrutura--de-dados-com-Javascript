export default class Set {
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

  size() {
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        count++;
      }
    }
    return count;
  }

  values() {
    let values = [];
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) {
        values.push(key);
      }
    }
    return values;
  }
  ////////////////// UNIÃO
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }

  /////////////////// INTERSECÇÃO
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }

  /////////////////// DIFERENÇA
  diference(otherSet) {
    const diferenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        diferenceSet.add(value);
      }
    });
    return diferenceSet;
  }

  ////////////////////SUBCONJUNTOS
  isSubsetOf(otherSet){
    if(this.size() > otherSet.size()) {
      return false;
    }
    let isSubSet = true;
    this.values().every(value => {
      if(!otherSet.has(value)){
        isSubSet = false;
        return false;
      }
      return true;
    });
    return isSubSet;

  }
}

const setA = new Set();
setA.add(1);
setA.add(2);

const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

console.log(setA.isSubsetOf(setB))
console.log(setA.isSubsetOf(setC))


// const unionAB = setA.union(setB);
// console.log(unionAB);

// const intersectionAB = setA.intersection(setB);
// console.log(intersectionAB);

// const diferenceAB = setB.diference(setA);
// console.log(diferenceAB);
