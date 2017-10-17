/**
 * two sum
 *
 * @param {Array} nums
 * @param {Number} target
 */
var twoSum = function (nums, target) {
    var temp, i, map = {};
    for (i = 0; i < nums.length; i++) {
        temp = target - nums[i];
        if (map[temp] !== undefined) {
            return [map[temp], i];
        }

        map[temp] = i;
    }
}

// indexOf
var twoSum1 = function (nums, target) {
    var temp, tempInd, i;
	for (i = 0; i < nums.length; i++) {
        temp = target - nums[i];
        tempInd = nums.indexOf(temp);

        if (tempInd > -1 && tempInd !== i) {
            return [i, tempInd]
        }
    }
}
