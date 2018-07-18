function solution(S, P, Q) {
  var result = [];
  var lastA = [];
  var lastC = [];
  var lastG = [];

  for(var i=0; i<S.length; i++) {
    if(i===0) {
      lastA.push(-1);
      lastC.push(-1);
      lastG.push(-1);
    } else {
      lastA.push(lastA[i-1]);
      lastC.push(lastC[i-1]);
      lastG.push(lastG[i-1]);
    }

    if(S[i] == 'A') {
      lastA[i] = i;
    } else if(S[i] == 'C') {
      lastC[i] = i;
    } else if(S[i] == 'G') {
      lastG[i] = i;
    }
  }

  for(var i=0; i<P.length; i++) {
    if(lastA[Q[i]] >= P[i]) {
      result.push(1);
    } else if(lastC[Q[i]] >= P[i]) {
      result.push(2);
    } else if(lastG[Q[i]] >= P[i]) {
      result.push(3);
    } else {
      result.push(4);
    }
  }

  return result;
}