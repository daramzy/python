const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    console.log(start, end);
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch([0, 1, 2, 3, 4, 5, 6], 6));
