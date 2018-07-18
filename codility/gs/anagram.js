function isAnagram(string1, string2) {
  if(string1.length !== string2.length) {
    return false;
  }

  let map = new Map();

  for(let i=0; i<string1.length; i++) {
    if(map.has(string1[i])) {
      if(map.get(string1[i]) === -1) {
        map.delete(string1[i]);
      } else {
        map.set(string1[i], map.get(string1[i]) + 1);
      }
    } else {
      map.set(string1[i], 1);
    }

    if(map.has(string2[i])) {
      if(map.get(string2[i]) === 1) {
        map.delete(string2[i]);
      } else {
        map.set(string2[i], map.get(string2[i]) - 1);
      }
    } else {
      map.set(string2[i], -1);
    }
  }

  if(map.size === 0) {
    return true;
  }
  return false;
}

console.log(isAnagram('blah', 'talb'));

const array = ['cat', 'good', 'tac', 'act', 'hat'];

function findAnagrams(word, array) {
  const anagrams = array.filter(x => x !== word && isAnagram(x, word));
  return anagrams;
}

console.log(findAnagrams('act', array));