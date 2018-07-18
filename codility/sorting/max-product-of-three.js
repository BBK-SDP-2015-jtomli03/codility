function solution(A) {
  const sortedArray = A.sort((a, b) => {
    return a-b;
  });

  const length = A.length;

  const largestNumProduct = sortedArray[length-3] * sortedArray[length-2] * sortedArray[length-1];
  const largestNegNum = sortedArray[0] * sortedArray[1] * sortedArray[length-1];

  return Math.max(largestNumProduct, largestNegNum);
}
