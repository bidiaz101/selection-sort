function selectionSort(arr) {
  // type your code here
  const sorted = []

  while(arr.length > 0) {
    const min = Math.min(...arr)
    const index = arr.indexOf(min)

    sorted.push(min)
    arr.splice(index, 1)
  }

  return sorted
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("Expecting: [-3, -1, 3, 4, 4, 6, 7, 10]");
  console.log("=>", selectionSort([4, 7, -3, -1, 6, 3, 4, 10]))

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

  const startTime = new Date()

  for(let i = 0; i < 1000; i++) {
    selectionSort([3,2,1])
    selectionSort(longInput)
  }

  const averageRuntime = (new Date() - startTime) / 2000
  console.log(averageRuntime)
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
