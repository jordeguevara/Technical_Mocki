/**
 * @param {number[]} arr
 * @return {number[]}
 * O(N) time , O(1) space , Med.
 * Leetcode: Find All Duplicates in an Array , # 442
 */
const findDuplicates = arr => {
  let duplicates = [];
  //loop through array once
  for (let i = 0; i < arr.length; i++) {
    let key = Math.abs(arr[i]); //take absolute value of integer inside array[i]
    if (arr[key] >= 0 || arr[key] === undefined) {
      //if that value is greater or equal to 0 or undefine(edge case) => mark it visited by converting to negative counterpart( value  * -1)
      arr[key] = -arr[key];
    } else {
      // it has been marked, so it a duplicate, add it to result array which consist of all duplicate values
      duplicates.push(key);
    }
  }
  return duplicates;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
