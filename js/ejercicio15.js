function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  x = 4;
  y = 6;

  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return x || y;
  }
}
console.log(obtenerMayor());

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  // Tu código:

  edad = 19;

  if (edad > 17) {
    return "Allowed";
  } else {
    return "Not Allowed";
  }
}
console.log(mayoriaDeEdad());

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  // Tu código:

  status = 1;

  if (status == 1) {
    return "Online";
  } else if (status == 2) {
    return "Away";
  } else {
    return "Offline";
  }
}
console.log(conection());

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:

  idioma = "mandarin";

  if (idioma == "aleman") {
    return "Guten Tag!";
  } else if (idioma == "mandarin") {
    return "NI Hao!";
  } else if (idioma == "ingles") {
    return "Hello!";
  } else {
    return "Hola";
  }
}
console.log(saludo());

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  // Tu código:

  color = "green";

  switch (color) {
    case "blue":
      return "This is blue";
      break;

    case "red":
      return "This is red";
      break;

    case "green":
      return "This is green";
      break;

    case "orange":
      return "This is orange";
      break;

    default:
      return "Color not found";
  }
}
console.log(colors());

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:

  if (numero === 10 || numero === 5) {
    return true;
  } else {
    return false;
  }
}
console.log(esDiezOCinco());

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:

  numero = 46;

  if (numero <= 50 && numero >= 20) {
    return true;
  } else {
    return false;
  }
}
console.log(estaEnRango());

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  let numString = numero.toString();

  let vectorNum = numString.split(".");

  let parteEntera = parseInt(vectorNum[0]);
  let parteDecimal = parseInt(vectorNum[1]);

  if ((parteEntera !== 0 && parteDecimal) || parteEntera === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(`con 2 es ${esEntero(2)}`);
console.log(`con 2.56 es ${esEntero(2.56)}`);
console.log(`con -5.6 es ${esEntero(-5.3)}`);
console.log(`con 0.6 es ${esEntero(0.6)}`);

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  // Tu código:

  numero = 120;

  if (numero % 3 == 0 && numero % 5 == 0) {
    return "Fizzbuzz";
  } else if (numero % 3 == 0) {
    return "fizz";
  } else if (numero % 5 == 0) {
    return "buzz";
  } else {
    return "false";
  }
}
console.log(fizzBuzz());

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.

  num1 = 2;
  num2 = 2;
  num3 = 6;

  if (num1 < 0 || num2 < 0 || num3 < 0) {
    return "Hay negativos";
  } else if (num1 === 0 || num2 === 0 || num3 === 0) {
    return "Error";
  } else if (num1 > num2 && num1 > num3) {
    return "Numero 1 es mayor y positivo";
  } else if (num3 > num1 && num3 > num2) {
    return num3 + 1;
  } else {
    return "false";
  }
}
console.log(operadoresLogicos());

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  let contadorDivisibles = 0;

  for (let i = numero; i > 0; i--) {
    if (numero % i == 0) {
      contadorDivisibles++;
    }
  }
  if (contadorDivisibles > 2 || numero == 0 || numero == 1) {
    return false;
  } else {
    return true;
  }
}

console.log(`El 7 es primo ? - Rta: ${esPrimo(7)}`);
console.log(`El 4 es primo ? - Rta: ${esPrimo(4)}`);
console.log(`El 47 es primo ? - Rta: ${esPrimo(47)}`);
console.log(`El 48 es primo ? - Rta: ${esPrimo(48)}`);
console.log(`El 0 es primo ? - Rta: ${esPrimo(0)}`);
console.log(`El 1 es primo ? - Rta: ${esPrimo(1)}`);

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if (valor === true) {
    return "Soy verdadero";
  } else {
    return "Soy falso";
  }
}

console.log(esVerdadero(true));
console.log(esVerdadero(false));

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí

  let vectorDelSeis = [];

  for (let i = 0; i < 11; i++) {
    vectorDelSeis.push(i * 6);
  }

  return vectorDelSeis;
}

console.log(tablaDelSeis());

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  let numString = numero.toString();

  numLength = numString.length;

  if (numLength === 3) {
    return true;
  } else {
    return false;
  }
}

console.log(`El 45 tiene 3 digitos ? - Rta: ${tieneTresDigitos(45)}`);
console.log(`El 580 tiene 3 digitos ? - Rta: ${tieneTresDigitos(580)}`);
console.log(`El 45555 tiene 3 digitos ? - Rta: ${tieneTresDigitos(45555)}`);

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  // Tu código:

  let i = 1

  do {
    numero = numero + 5
    i++
  } while (i < 9)
}

console.log(doWhile(1))