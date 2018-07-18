function solution(A) {
  let smallest = 0;
  const sortedArray = A.sort((a, b) => a - b);

  for (let i=0; i < A.length; i++) {
    const num = A[i];
    if (num > 0 && (num === smallest + 1 || num === smallest)) {
      smallest = num;
    } else if (num > 0) {
      return smallest + 1;
    }
  }

  return smallest + 1;
}