//Linear Search Exercise
//Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.

//Don't use indexOf to implement this function!

//Examples:

//linearSearch([10, 15, 20, 25, 30], 15) // 1
///linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4) // 5
//linearSearch([100], 100) // 0
//linearSearch([1,2,3,4,5], 6) // -1
//linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10) // -1
//linearSearch([100], 200) // -1

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }

  return -1;
}



// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.

// This algorithm should be more efficient than linearSearch - you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 10) // 2
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 95) // 16
// binarySearch([
//   5, 6, 10, 13, 14, 18, 30, 34, 35, 37,
//   40, 44, 64, 79, 84, 86, 95, 96, 98, 99
// ], 100) // -1


function binarySearch(arr, value) {


    let left = 0
    let right = arr.length - 1
    let mid 


    while(left < right) {
        left = 0
        right = arr.length - 1
        mid = Math.round(left + (right - left) / 2) 
        if (arr[mid] === value ) {
            return mid
        } else if(value < arr[mid]) {
            right = mid - 1
            arr = arr.slice(right)
        } else if(value > arr[mid]) {
            left = mid + 1
            arr = arr.slice(left)
        }

    }

    return -1 

}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],7));