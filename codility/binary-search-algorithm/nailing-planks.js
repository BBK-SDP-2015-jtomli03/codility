function solution(A, B, C) {
  let nails = 0;
  let lowestPlankNotNailed = 0;

  for(let i=0; i<C.length; i++) {
    if(lowestPlankNotNailed === A.length) {
      return nails;
    }

    const nailPosition = C[i];

    while(A[lowestPlankNotNailed] <= nailPosition) {
      nails += 1;
      lowestPlankNotNailed += 1;
    }
  }

  return lowestPlankNotNailed === A.length ? nails : -1;
}
