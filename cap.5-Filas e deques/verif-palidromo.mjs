import Deque from "../Filas e deques/deque.mjs";

function palidromeCheck(aString) {
  if (
    aString === undefined ||
    aString === null ||
    (aString !== null && aString.length === 0)
  ) {
    return false;
  }
  const deque = new Deque(); //2
  const lowerString = aString.toLocaleLowerCase().split(" ").join(""); //3
  let isEqual = true;
  let firstChar, lastChar;
  for (let i = 0; i < lowerString.length; i++) {
    //4
    deque.addBack(lowerString.charAt(i));
  }
  while (deque.size() > 1 && isEqual) {
    //5
    firstChar = deque.removeFront(); //6
    lastChar = deque.removeBack(); //7
    if (firstChar !== lastChar) {
      isEqual = false; //8
    }
  }
  return isEqual;
}

console.log("a", palidromeCheck("a"));
console.log("aa", palidromeCheck("aa"));
console.log("kayak", palidromeCheck("kayak"));
console.log("level", palidromeCheck("level"));
console.log(
  "Was it a car or a cat I saw",
  palidromeCheck("Was it a car or a cat I saw")
);
console.log("Step on  no pets", palidromeCheck("Step on  no pets"));
