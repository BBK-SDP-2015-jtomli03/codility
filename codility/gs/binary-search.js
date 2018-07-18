function binarySearch(array, value) {
  const search = (lowIndex, highIndex) => {
    if(lowIndex > highIndex) {
      return null;
    }
    if(value === array[lowIndex]) {
      return lowIndex;
    }
    if(value === array[highIndex]) {
      return highIndex;
    }
    const midIndex = Math.floor((lowIndex + highIndex) / 2);
    if(value === array[midIndex]) {
      return midIndex;
    }
    if(value < array[midIndex]){
      return search(lowIndex + 1, midIndex - 1);
    } else {
      return search(midIndex + 1, highIndex -1);
    }
  };
  return search(0, array.length - 1);
}

const array = [2,4,6,8,9,10,22,33,44,55,66,77];

console.log("result ==> ", binarySearch(array, 100));