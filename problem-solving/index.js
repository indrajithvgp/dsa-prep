const countUniqueValues = (array) => {
  // using two pointers approach
  let i = 0;
  j = array.length - 1;
  let count = 2;
  lastSum = array[i] + array[j];
  if (array[i] === array[j]) {
    j--;
    count--;
    lastSum = 0;
  }
  while (i < j) {
    let sum = array[i] + array[j];
    if (sum !== lastSum) {
      lastSum = sum;
      count++;
    }
    j--;
  }
  return count;
  // using two pointers approach - Colt Approach (works only on sorted array)
  // let i = 0;
  // for (let j = 1; j < array.length; j++) {
  //   if (array[i] !== array[j]) {
  //     i++;
  //     array[i] = array[j];
  //   }
  // }
  // console.log(i + 1);
};

countUniqueValues([1, 2, 2, 5, 7, 7, 99, 99, 100]);
