// this file is gonna be totally in english cuz i'm too lazy to translate the problems xd

// 1 - Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(str){

    let arr = [...str]

        function reverseInside(arr) {
            if(arr.length === 0) return arr;
            
            return arr.concat(reverse(arr.splice(1)))
        }
        

    reverseInside(arr)

    return arr
}

console.log(reverse("hola"));