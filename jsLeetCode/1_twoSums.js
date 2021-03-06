// brute force approach

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let k = i + 1; k < nums.length; k++) {
      if (nums[i] + nums[k] === target) {
        return [i, k];
      }
    }
  }
};

// two pass hash table

var twoSumsHashMap = function (nums, target) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    let left = target - nums[i];
    if (hashMap.has(left) && hashMap.get(left) !== i) {
      return [i, hashMap.get(left)];
    }
  }
};

var twoSumsOnePass = function (nums, target) {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i];
    }
    hashMap.set(nums[i], i);
  }
};
