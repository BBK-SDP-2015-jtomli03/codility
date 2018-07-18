// Compute number of integers divisible by k in range [a..b]

function solution(A, B, K) {
  var offset = A % K === 0 ? 1 : 0;
  return parseInt(B / K) - parseInt(A / K) + offset;
}