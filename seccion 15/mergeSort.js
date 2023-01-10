const merge = (arr1, arr2) => {
  const newArr = [];

  let m = 0;
  let y = 0;

  while (m < arr1.length && y < arr2.length) {
    if (arr1[m] < arr2[y]) {
      newArr.push(arr1[m]);
      m++;
    } else {
      newArr.push(arr2[y]);
      y++;
    }
  }

  while (m < arr1.length) {
    newArr.push(arr1[m]);
    m++;
  }

  while (y < arr2.length) {
    newArr.push(arr2[y]);
    y++;
  }
 
  return newArr;
};





function mergeSort (arr){
    if (arr.length <= 1) return arr
    
     let mid = Math.round(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    

    return merge(left, right)
}


console.log(mergeSort([4,3,2,1,0]))



