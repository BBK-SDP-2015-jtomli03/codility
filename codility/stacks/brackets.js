function solution(S) {
  if(S.length === 0) {
    return 1;
  }
  if(S.length % 2 !== 0){
    return 0;
  }

  let props = [];
  let matched = {"]":"[", "}":"{", ")": "("};

  for(let i=0; i<S.length; i++) {
    if(S[i] === '(' || S[i] === '{' || S[i] === '[' ){
      props.push(S[i]);
    } else {
      const popped = props.pop();
      if (matched[S[i]] != popped) {
        return 0;
      }
    }
  }
  if(props.length !== 0) {
    return 0;
  }
  return 1;
}
