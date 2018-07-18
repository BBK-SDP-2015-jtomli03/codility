function solution(A) {
  const sortedArray = A.sort();
  for(let i=0; i<sortedArray.length; i+=2) {
    const value = sortedArray[i];
    const next = sortedArray[i+1];
    if(value !== next) {
      return value;
    }
  }
}