// const pivot = (arr,start = 0, end = arr.length - 1 ) => {

//     let pivotIndex = 0
//     let i = 1
//     let temp 
    

//     while(start < end) {


//         if (arr[0] > arr[i] ) {
//             pivotIndex++
//             temp = arr[pivotIndex]
//             arr[pivotIndex] = arr[i] 
//             arr[i] = temp
//         }

//         i++
//         start++
//     }


//     temp = arr[0]
//     arr[0] = arr[pivotIndex]
//     arr[pivotIndex] = temp


//     return pivotIndex


// }

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
  
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (pivot > arr[i]) {
        swapIdx++;
        swap(arr, swapIdx, i);
      }
    }
  
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
  }

function quickSort(arr, left = 0, right = arr.length - 1) {

    if (left < right) {
        let pivotindex = pivot(arr, left, right)
        quickSort(arr, left, pivotindex - 1)
        quickSort(arr, pivotindex + 1, right)
    }

    return arr

}


console.log(quickSort([4,6,9,1,2,5,3]));







