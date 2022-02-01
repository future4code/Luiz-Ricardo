function findMissingNumber(array: number[], maxSum: number): number {
    let arraySum = 0

    for (let num of array) {
        arraySum += num
    }

    return maxSum - arraySum
}

const array1 = [1, 2, 3, 4, 6, 7, 8, 9, 10] 

const array2 = [10, 20, 40, 50] 

console.log(findMissingNumber(array1, 55))
console.log(findMissingNumber(array2, 150))