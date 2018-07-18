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
  let count = 0;

  for(let i=0; i<A.length; i++) {
    if(A[i] === possibleDominator) {
      count += 1;
    }
  }

  if(!count > A.length/2) {
    return -1;
  }

  let numOfEquiLeaders = 0;
  let numOfLeadersSoFar = 0;

  for(let i=0; i<A.length; i++) {
    if(A[i] === possibleDominator) {
      numOfLeadersSoFar += 1;
    }
    if((numOfLeadersSoFar > (i+1)/2) && (count - numOfLeadersSoFar > (A.length - i-1)/2 )){
      numOfEquiLeaders += 1;
    }

  }

  return numOfEquiLeaders;

}
