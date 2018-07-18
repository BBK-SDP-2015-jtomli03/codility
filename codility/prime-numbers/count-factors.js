function solution(N) {
  let numberOfFactors = 0;

  for(let i=1; i*i<=N; i++) {
    if(N%i === 0) {
      if(i*i === N) {
        numberOfFactors +=1;
      } else {
        numberOfFactors +=2;
      }
    }
  }

  return numberOfFactors;
}
