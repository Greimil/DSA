// patron de multiple pointer o punteros, usa dos punteros, que se mueven en hacia una dirección basado en una condición en especifica
//  para comparar valores dentro de un array. evitando asi la necesidad de usar loops anidados o incluso usar un solo loop. 



function countUniqueValues(array){

    let pointer1 = 0
    let pointer2 = 1
    let totalUniqueNumbers = 0
   
    for (let i = 0; i < array.length; i++) {
       if (array[pointer1] !== array[pointer2]   ) {
           totalUniqueNumbers++    
       } 
   
       pointer1++
       pointer2++
   
    }
   
    return totalUniqueNumbers
   
   }
   
   console.log(countUniqueValues([-2,-1,-1,0,1]));