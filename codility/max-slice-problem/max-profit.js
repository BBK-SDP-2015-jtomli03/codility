function solution(A) {
  if(A.length == 1 || A.length == 0){
    return 0;
  }

  let max_ending = 0;
  let max_profit = 0;
  let min_price = A[0];

  for(let i=1; i<A.length; i++) {
    max_ending = Math.max(0, A[i] - min_price);
    min_price = Math.min(min_price, A[i]);
    max_profit = Math.max(max_ending, max_profit);
  }

  return max_profit;
}

const answer = solution([100, 50, 150, 300, 90]);
console.log(answer);