// Estos son algunos de los ejercicios de la sección 8

// 1 - Escribe una función llamada power, la cual acepta una base y un exponente, la función debería de devolver
// la potencia de la base al elevarlo al exponente.

// ejemplos de salida

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exp) {
  if (exp == 0) return 1;
  return base * power(base, exp - 1);
}

// 2 - Escribe una función factorial la cual acepta un numero y devuelve el factorial de ese numero.
// el factorial de cero siempre es 1

// ejemplos de salida.

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(num) {
  if (num === 0) return 1;

  return num * factorial(num - 1);
}

// 3 - Escribe una función productOfArray la cual toma un array de números y devuelve el producto de todos ellos.

// ejemplos de salida.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  if (arr.length == 0) return 1;
  return arr[0] * productOfArray(arr.splice(1));
}

// 4 - Escribe una función recursiveRange la cual acepta un numero y suma todos los números desde el 0 hasta el 0.
// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(num) {
    if(num === 0) return 0
    return num + recursiveRange(num - 1)
}

// 5 - Escribe una función fib la cual acepta un numero y retorna el nth en la secuencia de  Fibonacci.

function fib(num) {


    if (num <= 2) return 1

    return   fib(num - 1)  +  fib(num - 2)
}

console.log(fib(35))