// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  a=[]
  a=array
  console.log(array[0])
  return array[0]
}
devolverPrimerElemento(['a','1','C','2'])



function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  a=[]
  a=array
  b=array.length-1
  console.log(array[b]);
  return array[b]
}
devolverUltimoElemento(['a','1','C','2','C'])

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  a=[]
  a=array
  console.log(array.length);
  return array.length
}
obtenerLargoDelArray(['a','1'])


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  a=[]
  a=array
  x=array.map(e => e +1)
  console.log(x)
  return x
}
incrementarPorUno([0,1,2,3,4,5])

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento)
  console.log(array);
  return array
}
agregarItemAlFinalDelArray([0,1,2],("E"))

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)
  console.log(array);
  return array
}
agregarItemAlComienzoDelArray([3,2,1],("HENRY "))


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  a=[]
  a=palabras
  x=a.reduce((acc, item)=>{
    return acc += ' ' +item
  })
  console.log(x);
}
dePalabrasAFrase(['Estudia','en','Henry','a','cero','COSTO'])


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  a=[]
  a=array
  e=elemento
  x=a.reduce((acc, item)=>{
    return a.includes(e)
  })
  console.log(x);
}
arrayContiene(['e','a','f','t'], ('b'))

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  a=[]
  a=numeros
  x=a.reduce((acc, item)=>acc+item, 0)
  console.log(x);
}
agregarNumeros([10,20,80,40])

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  a =[]
  a = resultadosTest
  suma=0
  for (let i = 0; i < a.length; i++) {
    suma = suma+a[i]
    prom=suma/a.length
  }
  console.log(prom)
  return prom
}
promedioResultadosTest([40,20,10,30])

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  a=[]
  a=numeros
  x=Math.max(...a)
  console.log(x);
  return x
}
numeroMasGrande([40,20,10,30])

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí: 
  a=1
  if (arguments.length===0) {
    a=0
  }else if (arguments.length===1) {
    a=arguments[0]
  } else {
    for (let i = 0; i < arguments.length; i++) {
      a = a*arguments[i];
    }
  }
  console.log(a);
  return a;
}
multiplicarArgumentos(2,10,20)

function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  
  a=[]
  a=arreglo
  mayores=arreglo.filter(value=>value>18)
  console.log(mayores.length)
  return mayores.length
}
cuentoElementos([24,5,18,1,5,4,7,1])

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
/*  semana=[
          {dia: 'Domingo', num: 1},
          {dia: 'Lunes', num: 2},
          {dia: 'Martes', num: 3},
          {dia: 'Miercoles', num: 4},
          {dia: 'Jueves', num: 5},
          {dia: 'Viernes', num: 6},
          {dia: 'Sabado', num: 7}]
  a=numeroDeDia
  diad=semana.find(x=>x.num == a)
  /*if (a<7 || a>1) {
    m="Es dia Laboral"
  }else {m="Es fin de semana"}*/
//  console.log(diad)
num=numeroDeDia
let semana = {domingo:1,lunes: 2,martes:3,miercoles:4,jueves:5,viernes:6,sabado:7};
let msg0 = "Es fin de semana"
let msg1 = "Es día Laboral"

  if (semana[num] == 1 ||semana[num] == 7){
    msg=msg1
  } else {
    msg=msg0
  }
 console.log(msg)
 return msg

} 
diaDeLaSemana(2)

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n - Math.floor(n) == 0){
    if((n.toString())[0]=='9'){
      msg=true
    } else {
        msg=false
    }
} else {
     msg=false
}
console.log(msg)
return ((Math.floor(n)).toString())[0]
}
empiezaConNueve(90)

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
  x=arreglo.every(e => arreglo[0]==e)
  
  console.log(x)
  
} 
todosIguales([1,1,1,1,1])

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  
  for (let i = 0; i < numero.length; i++) {
    if (i===5) {
      break
    }
    console.log(numero[i]);
  }
}
breakStatement([1,2,3,4,5,6])

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
