function solution(N) {
  const binary = N.toString(2);
  let currentGap = 0;
  let longestGap = 0;
  let startOfPossGap = false;
  for(let i=0; i<binary.length; i++) {
    if(!startOfPossGap && binary[i] === '1') {
      startOfPossGap = true;
    }
    if(startOfPossGap && binary[i] === '0') {
      currentGap += 1;
    }
    if(startOfPossGap && binary[i] === '1') {
      longestGap = Math.max(longestGap, currentGap);
      currentGap = 0;
    }

  }
  return longestGap;
}