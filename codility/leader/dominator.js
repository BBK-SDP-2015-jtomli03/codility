function solution(A) {
  let stack = [];

  for(let i=0; i<A.length; i++) {
    if(stack.length === 0 || A[i] === stack[stack.length - 1]) {
      stack.push(A[i]);
    } else {
      stack.pop();
    }
  }

  if(stack.length === 0) {
    return -1;
  }

  const possibleDominator = stack.pop();
  let index = -1;
  let count = 0;

  for(let i=0; i<A.length; i++) {
    if(A[i] === possibleDominator) {
      count += 1;
      if(index < 0) {
        index = i;
      }
    }
  }

  if(count > A.length/2) {
    return index;
  }

  return -1;
}
