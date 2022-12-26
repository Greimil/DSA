// Escribe una función llamada sameFrequency que dado dos números enteros (positivos) determina si los dos números tienen la misma frecuencia de dígitos
// la solución debe tener un time complexity de O(N).

// Ejemplo de salida:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false+

function sameFrequency(num1, num2) {
  let numStr1 = String(num1);
  let numStr2 = String(num2);

  let result = true;

  if (numStr1.length !== numStr2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (const number of numStr1) {
    obj1[number] = (obj1[number] || 0) + 1;
  }

  for (const number of numStr2) {
    obj2[number] = (obj2[number] || 0) + 1;
  }

  for (const number of numStr1) {
    obj1[number] !== obj2[number] ? (result = false) : "";
  }

  return result;
}

console.log(sameFrequency(3589578, 5879385));
