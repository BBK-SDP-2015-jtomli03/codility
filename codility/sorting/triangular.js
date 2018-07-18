function solution(A) {
  const sortedArray = A.sort(function(a, b) {
    return a - b;
  });

  const length = A.length;

  for(let i=0; i<length-1; i++) {
    if (i+2 < length) {
      if (A[i] + A[i+1] > A[i+2]) {
        return 1;
      }
    }
  }

  return 0;
}