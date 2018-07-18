function solution(N) {
  let width = 1;

  for(let i=0; i*i<=N; i++) {
    if(N%i === 0){
      width = i;
    }
  }

  const length = N/width;
  return 2 * (width + length)
}
