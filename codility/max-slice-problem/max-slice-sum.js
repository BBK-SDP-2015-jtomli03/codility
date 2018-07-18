function solution(A) {
  if(A.length === 1){
    return A[0];
  }

  let max_end = A[0];
  let max_slice = A[0];

  for(let i=1; i<A.length; i++) {
    max_end = Math.max(A[i], max_end + A[i]);
    max_slice = Math.max(max_end, max_slice);
  }

  return max_slice;
}
