function solution(S) {
  if(S.length % 2 === 1){
    return 0;
  }

  let stack = [];

  for(let i=0; i<S.length; i++){
    const char = S[i];
    if(char === '('){
      stack.push(char);
    } else if(char === ')'){
      if(stack.pop() !== '(') {
        return 0;
      }
    } else {
      return 0;
    }
  }

  if(stack.length > 1){
    return 0;
  }

  return 1;
}
