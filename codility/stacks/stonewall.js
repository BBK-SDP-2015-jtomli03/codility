function solution(H) {
  let blocks = 1;
  let stack = [H[0]];

  for(let i=1; i<H.length; i++){
    if(H[i] > stack[stack.length - 1]){
      blocks += 1;
      stack.push(H[i]);
    }
    if(H[i] < stack[stack.length - 1]){
      while(stack.length > 0 && stack[stack.length - 1] > H[i]){
        stack.pop();
      }
      if(stack.length === 0 || stack[stack.length - 1] < H[i]){
        blocks += 1;
        stack.push(H[i]);
      }
    }
  }

  return blocks;
}
