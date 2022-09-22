// No cambies los nombres de las funciones.

const { default: log } = require("simple-git/src/lib/tasks/log")

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if(x==y){
    a=Math.floor((Math.random()*(y-x)+x))
    console.log(a)} 
  else{(a=Math.max(x,y))
    console.log(a)}
}
obtenerMayor(7, 5)


function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  
  if(status==1) {
    a="online"
  }else if(status==2){
    a="away"}
    else{
      a="Offline"
    }
    console.log(a)
    return a
}
conection(1)


function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  if(idioma=="aleman") {
    a="Guten Tag!"
  }else if(idioma=="mandarin"){
    a="Ni Hao!"}
    else if(idioma=="ingles"){
      a="Hello!"
    }
    else{
      a="Hola!"
    }
    console.log(a)
    return a
}
saludo("ashaninka")



function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  if(color=="blue") {
    a="This is blue"
  }else if(color=="red"){
    a="This is red"}
    else if(color=="green"){
      a="This is green"
    }
    else if(color=="orange"){
      a="This is orange"
    }
    else{
      a="Color not found"
    }
    console.log(a)
    return a
}
colors("green")


function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  a=[10,5]
  if(a.includes(numero)){
    a=true
  }else{
    a=false
  }
  console.log(a)
  return a 
}
esDiezOCinco(5)


function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  a=numero
  if(a<50 && a>20){
    a=true
  } else{
    a=false
  }
  console.log(a)
  return a
}
estaEnRango(30)



function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:

  if(numero-Math.floor(numero)==0){
    a=true
  }else{
    a=false}
  console.log(a)
  return a
}
esEntero(0.3)

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  b=numero/3
  c=numero/5
  if(Number.isInteger(b) && Number.isInteger(c)){
    a="fizzBuzz"}
  else if(Number.isInteger(b)){
      a="fizz"
    } else if(Number.isInteger(c)){
        a="buzz"}
      else {a=numero}
  console.log(a)
  return a
}
fizzBuzz(6)


function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false.
  a=[num1,num2,num3]
  b=a<0
  c=a=0
  if(num1>num2 && num1>num3 ) {
    a="Número 1 es mayor y positivo"
  }else if(num1<0 || num2<0 || num3<0){
    a="Hay negativos"
  }else if(num3>num1 && num3>num2){
    a=num3+1
  }
  else if(num3==0 || num2==0 || num1==0){
    a="error"
  } else {
    a= false
  }
  console.log(a)
  return (a)
}
operadoresLogicos(1, 1, 0)


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  a=true
  for (let i = 2; i <= numero/2; i++) {
    if(numero % i==0){
    a=false}
  }
  console.log(a)
  return a
}
esPrimo(3)


function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí

  if(valor==Boolean(true)){
    a="Soy verdadero"
  }else{(valor==Boolean(false))
    a="Soy falso"}
  console.log(a)
}
esVerdadero(1)

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí   
  for (let i = 0; i <= 10; i++) {
    if(i!=11){
      a=(i*6)
    }
    console.log(a)
  }
  return a
}
tablaDelSeis()

console.log("final");
function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  texto = numero.toString()
  a=false
  if( numero - Math.floor(numero) == 0){
    if (texto.length == 3){
      a=true
    }
  }
  console.log(a)
  return a
}
tieneTresDigitos(55.1)


function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  a=numero
  i=1
  do {
    a=(a+5)
    i++
  } while (i<=8);
  console.log(a);
}
doWhile(2)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
