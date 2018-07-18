function solution(A, K) {
  if(A.length === K || A.length <= 1){
    return A;
  }
  for(let i=0; i<K; i++) {
    const end = A.pop();
    A = [end].concat(A);
  }
  return A;
}