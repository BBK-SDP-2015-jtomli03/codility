function median(array1, array2) {
  const middle = Math.floor((array1.length + array2.length) / 2);
  let spliced = 0;

  while((array1.length || array2.length) && spliced < middle) {
    if(array1[0] < array2[0]) {
      array1.splice(0,1);
      spliced ++;
    } else if (array1[0] > array2[0]) {
      array2.splice(0,1);
      spliced ++;
    } else {
      array1.splice(0,1);
      array2.splice(0,1);
      spliced += 2;
    }
  }
  
  console.log(array1);
  console.log(array2);
  
}

console.log(median([1,2,3,5,9], [4,6,7,8]));