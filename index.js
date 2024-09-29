var twoSum = function (nums, target) {
  // create a map for storage
  let map = new Map();

  // Loop through the array
  for (let i = 0; i < nums.length; i++) {
    // Check if the complement exists in the map
    if (map.has(nums[i])) {
      // Return the indices
      return [map.get(nums[i]), i];
    }
    // Store in the map
    map.set(target - nums[i], i);
  }
};
