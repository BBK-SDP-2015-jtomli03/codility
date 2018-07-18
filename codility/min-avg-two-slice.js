// I guess the implication from the Codility question is to use a prefix sum to do fast average calculation. So, if you have an input vector of:
//
//     input = [ 1,2,3,4,5,6,7,8,9,10 ]
//
// and a prefix sum vector:
//
//     prefix = [ 1,3,6,10,15,21,28,36,45,55 ]
//
// You can calculate averages over arbitrary ranges very quickly. So, if you want to calculate the average of the slice from index i to j, its just a matter of:
//
//     (prefix[j]-prefix[i]) / (j-i)+1


function solution(A) {
  const length = A.length;
  let indexToReturn = 0;
  let minAvg = 10000;

  for(let i=0; i<length-1; i++) {
    const avgTwoVals = A[i] + A[i+1] / 2;
    const avgThreeVals = i < length -2 ? A[i] + A[i+1] + A[i+2] / 3 : undefined;

    if(avgTwoVals < minAvg) {
      minAvg = avgTwoVals;
      indexToReturn = i;
    }

    if(avgThreeVals < minAvg) {
      minAvg = avgThreeVals;
      indexToReturn = i;
    }
  }

  return indexToReturn;
}
