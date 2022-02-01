function findMissingNumber(array, maxSum) {
    var arraySum = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var num = array_1[_i];
        arraySum += num;
    }
    return maxSum - arraySum;
}
var array1 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
var array2 = [10, 20, 40, 50];
console.log(findMissingNumber(array1, 55));
console.log(findMissingNumber(array2, 150));
