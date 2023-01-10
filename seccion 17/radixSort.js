// const getDigit = (num, place) => {
//     let str = String(num)
//     if (str.length === 1) return Number(  str)
//     return place === str.length ? Number(str[ str.length - (place)]) : Number(str[ str.length - (place + 1)])
// }



function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }
  





const digitCount = (num) => {
    if (num ==0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1

}


const mostDigits = (arr) => {

    let maxDigit = 0 

    for (let i = 0; i < arr.length; i++) {
        maxDigit = Math.max(maxDigit, digitCount(arr[i]))
          
    }

    return maxDigit

}

console.log(mostDigits([1,2,6,10,]) );




const radixSort = (arr) => {

    let maxDigit = mostDigits(arr)
    let digitBuckets = [[], [],[], [],[], [],[], [],[], [], ]

    for (let k = 0; k < maxDigit; k++) {
        let digitBuckets = Array.from({length: 10}, () => []);
        for (let x = 0; x < arr.length; x++) {
            let digit = getDigit(arr[x], k)
            digitBuckets[digit].push(arr[x])    
        }

        
        arr = [].concat(...digitBuckets)
    }


    

    return arr

}


// function radixSort(nums){
//     let maxDigitCount = mostDigits(nums);
//     for(let k = 0; k < maxDigitCount; k++){
//         let digitBuckets = Array.from({length: 10}, () => []);
//         for(let i = 0; i < nums.length; i++){
//             let digit = getDigit(nums[i],k);
//             digitBuckets[digit].push(nums[i]);
//         }
//         nums = [].concat(...digitBuckets);
//     }
//     return nums;
// }



console.log(radixSort([9,8,7,6,5,4,3,0,1,10]));

