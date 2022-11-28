// Dado dos strings escribe una función para determinar si el segundo string
// es un anagrama del primero, una palabra es anagrama de otra cuando contiene 
// la misma letras y cantidad, sin importar el orden en que estén, 
// por ejemplo. Nepal - panel  
// la función debe devolver true si el segundo string es un anagrama del primero
// caso contrario devuelve false

// la idea de este ejercicio es resolverlo usando el patron frequency counter 

const validAnagram = (str1, str2) => {
    if (str1.length !==  str2.length ) {
        return false
    }
    let frequencyCounterStr1 = {}
    let frequencyCounterStr2 = {}
    let result = true

    for (const chart of str1) {
        frequencyCounterStr1[chart] = (frequencyCounterStr1[chart] || 0) + 1
    }

    for (const chart of str2) {
        frequencyCounterStr2[chart] = (frequencyCounterStr2[chart] || 0) + 1
    }

    for (const key in frequencyCounterStr1) {
       result = key in frequencyCounterStr2 && frequencyCounterStr1[key] === frequencyCounterStr2[key] ?  true:  false;
    }

    return result


}


console.log(validAnagram("",""));
