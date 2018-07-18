function solution(A) {
  const length = A.length;

  if(length === 0) {
    return 0;
  }

  const sortedArray = A.sort((a,b) => {
    return a - b;
  });

  let distinctVals = 1;

  for(let i=0; i<length; i++) {
    if(i+1 < length && sortedArray[i] !== sortedArray[i+1]) {
      distinctVals += 1;
    }
  }

  return distinctVals;
}
