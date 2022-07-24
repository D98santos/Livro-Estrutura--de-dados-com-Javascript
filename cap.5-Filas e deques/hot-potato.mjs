import Queue from "./filas-Queues.mjs";

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const eliminatedList = [];
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    eliminatedList.push(queue.dequeue());
  }
  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}

const names = ["Jhon", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);
result.eliminated.forEach((name) => {
  console.log(`${name} was elimunated from the Hot Potato game`);
});
console.log(`The winner is: ${result.winner}`);
