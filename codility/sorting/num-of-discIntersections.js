/******** 12%!!!!!!!!!!!! ********/


function solution(A) {
  let intersections = 0;

  const tuples = A.map((radius, index) => {
    const startIndex = index-radius;
    const endIndex = index + radius;
    return {startIndex, endIndex}
  });

  tuples.sort((a, b) => {
    return a.startIndex - b.startIndex;
  });

  for(let i=0; i<tuples.length; i++) {
    const tuple = tuples[i];
    const end = tuple.endIndex;

    let j=i+1;
    if(tuples[j] && tuples[j].startIndex < end) {
      do {
        intersections ++;
        j++;
      } while (tuples[j] && tuples[j].startIndex < end);
    }

    if(intersections > 10000000) {
      return -1;
    }
  }

  return intersections;
}
