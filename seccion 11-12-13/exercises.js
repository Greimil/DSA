function sortSelection(arr){

    let min = Infinity;
    let minPosition 



    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j]
                minPosition = j

            }
        }
        
        arr[minPosition] = arr[i]
        arr[i] = min
        min = Infinity
        
    }


    return arr


}


function insertSelection(arr){

    let temp


    for (let i = 0; i < arr.length; i++) {
        for (let z = i + 1; z < arr.length; z++) {
            
            if (arr[z] < arr[i]) {
            
                temp = arr[i]

                arr[i] = arr[z]
                arr[z] = temp



            }

            
        }
        
    }


    return arr

}

console.log(insertSelection([1,1,6,2,7,0,41]));

