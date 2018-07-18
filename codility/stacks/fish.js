function solution(A, B) {
  let alive = 0;
  let downstream = [];

  for(let i=0; i<A.length; i++){
    if(B[i] === 1){
      downstream.push(A[i]);
    }
    else {
      if(downstream.length > 0){
        while (downstream.length > 0 && downstream[downstream.length - 1] < A[i]) {
          downstream.pop();
        }
        if(downstream.length === 0) {
          alive += 1;
        }

      } else {
        alive += 1;
      }
    }
  }

  alive += downstream.length;
  return alive;
}


