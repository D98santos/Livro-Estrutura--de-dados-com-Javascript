const set = new Set();
set.add(1);

console.log(set.values());
console.log(set.has(1));
console.log(set.size);

const setA = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

const setB = new Set();
setB.add(2);
setB.add(3);
setB.add(4);

////////////////// UNIÃO /////////////////////////////////////////////////////////////////////////////
const union = (set1, set2) => {
  const unionAB = new Set();
  set1.forEach((value) => unionAB.add(value));
  set2.forEach((value) => unionAB.add(value));
  return unionAB;
};

console.logo(new Set([...setA, ...setB]))

//console.log(union(setA, setB));  // Set(4) { 1, 2, 3, 4 }


/////////////////// INTERSECÇÃO /////////////////////////////////////////////////////////////////////////////
const intersection = (set1, set2) => {
  const intersectionSet = new Set();
  set1.forEach((value) => {
    if (set2.has(value)) {
      intersectionSet.add(value);
    }
  });
  return intersectionSet;
};

console.logo(new Set([...setA].filter(x => setB.has(x))))


//console.log(intersection(setA, setB)); // Set(2) { 2, 3 }


  /////////////////// DIFERENÇA /////////////////////////////////////////////////////////////////////////////
  const difference = (set1, set2) => {
    const differenceSet = new Set();
    set1.forEach((value) => {
        if (!set2.has(value)) {
          differenceSet.add(value);
        }
      });
      return differenceSet;
    };

console.logo(new Set([...setA].filter(x => !setB.has(x))))

    
    //console.log(difference(setA, setB)); //Set(1) { 1 }
  