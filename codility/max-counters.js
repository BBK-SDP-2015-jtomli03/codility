function solution(N, A) {
  let counters = Array(N).fill(0);
  let max = 0;
  let fillAll = 0;

  for(let i=0; i<A.length; i++) {
    const num = A[i];
    if(num > 0 && num <= N) {
      if(counters[num-1] < fillAll) {
        counters[num-1] = fillAll;
      }
      counters[num-1] = counters[num-1] + 1;
      max = counters[num-1] > max ? counters[num-1] : max;
    }
    if(num === N+1) {
      fillAll = max;
    }
  }

  for(let i=0; i<A.length; i++) {
    const num = A[i];
    if (num < fillAll) {
      counters[num-1] = fillAll;
    }
  }

  return counters;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  let counters = Array(N).fill(0);
  let max = 0;
  let fillAll = 0;

  for(let i=0; i<A.length; i++) {
    const num = A[i];
    if(num > 0 && num <= N) {
      if(counters[num-1] < fillAll) {
        counters[num-1] = fillAll;
      }
      counters[num-1] = counters[num-1] + 1;
      max = counters[num-1] > max ? counters[num-1] : max;
    }
    if(num === N+1) {
      fillAll = max;
    }
  }

  for(let j=0; j<counters.length; j++) {
    if (counters[j] < fillAll) {
      counters[j] = fillAll;
    }
  }

  return counters;
}