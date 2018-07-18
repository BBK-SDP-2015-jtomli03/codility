function reduce(array){
  return array.reduce((a,b) => {
    return a.concat(Array.isArray(b)? reduce(b) : b)
  },[])
}

console.log(reduce([1, 5, 8, 9, 10, [24, 20, [39, 48], 89], 105, 99, [24, 20, [39, [9999, 101010], 48], 89]]));
