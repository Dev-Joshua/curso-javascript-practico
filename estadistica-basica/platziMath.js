//Creo un objeto que contendra metodos y/o fuinciones para hacer los calculos que necesitemos
const PlatziMath = {};

//Ordenar una lista mediante una funcion mas larga
PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    if (valorAcumulado > nuevoValor) {
      //Si el valor acumulado es mayor al nuevo valor de la iteracion hace el flip y lo pasa para atras del valorAcumulado
      return 1;
    } else if (valorAcumulado == nuevoValor) {
      //Se deja igual
      return 0;
    } else if (valorAcumulado < nuevoValor) {
      //Si el nuevo valor es mayor al que tenemos en valorAcumulado se deja igual en su posicion
      return -1;
    }
  }
  //Si queremos la lista ordenada de mayor a menor es de esta forma
  // return -1
  // return 0
  // return 1

  //A la mayoria de metodos como el .sort debemos enviarle una funcion(anonima, nombre de una funcion o arrow function)
  const lista = listaDesordenada.sort(ordenarListaSort);

  return lista;
};

PlatziMath.calcularPromedio = function calcularPromedio(array) {
  // let sumaList = 0;

  //Sumar todos los elementos del array mediante un ciclo for
  // for (let i = 0; i < array.length; i++) {
  //   sumaList = sumaList + array[i];
  // }

  //Reducimos toda la lista de elementos a un unico valor //Suma de todos los elmeentos del array
  // function sumarElementos(valorAcumulado, nuevoValor) {
  //   return valorAcumulado + nuevoValor;
  // }

  // //Metodo reduce()
  // const sumaList = array.reduce(sumarElementos);

  //Manera mas corta utilizando una arrow function () => {} en vez de la function sumarElementos
  const sumaList = array.reduce(
    (acumulador, nuevoValor) => acumulador + nuevoValor
  );

  //Se divide el total de la suma en la cantidad de elementos
  const promedio = sumaList / array.length;
  console.log(sumaList);

  return promedio;
};

PlatziMath.esPar = function esPar(lista) {
  //Los condicionales toman un 0 como false. Por lo tanto no se ejecuta el codigo
  // if (lista.length % 2) {
  //   return false;
  // } else {
  //   return true;
  // }
  return !(lista.length % 2);
};
PlatziMath.esImpar = function esImpar(lista) {
  return lista.length % 2;
};

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
  const lista = PlatziMath.ordenarLista(listaDesordenada);
  const listaEsPar = PlatziMath.esPar(lista);

  if (listaEsPar) {
    const index1 = Math.round(lista.length / 2) - 1;
    const index2 = Math.round(lista.length / 2);
    const medianaListaPar = (lista[index1] + lista[index2]) / 2;
    return medianaListaPar;
    // console.log(medianaListaPar);
  } else {
    //Sacamos el elemento de la mitad de la lista impar
    const indexMitadListaImpar = Math.floor(lista.length / 2);
    const medianaListaImpar = lista[indexMitadListaImpar];
    console.log(indexMitadListaImpar);
    console.log(medianaListaImpar);
    return medianaListaImpar;
  }
};

PlatziMath.calcularModa = function calcularModa(lista) {
  //Creo un objeto.(key, value) => la key sera el elemento de mi lista, el value la cantidad de veces que ha aparecido este elemento en mi lista
  const listaCount = {};

  //Guardo el registro de cada vez que aparezca un elemento en mi lista
  for (let i = 0; i < lista.length; i++) {
    const elemento = lista[i];

    //Si ya existe este elemento de mi lista entonces:
    if (listaCount[elemento]) {
      listaCount[elemento] += 1;
    } else {
      //Si no ha aparecido un mismo elemento
      listaCount[elemento] = 1;
    }
    //Para validar si ya habia aparecido este elemento(cada posicion de mi array) antes, y si si! agregarle una nueva cuenta
  }

  //Para hallar la moda debo transformar el objeto en un array para asi recorrerlo, ordenarlo y hayar el valor mayor
  const listaArray = Object.entries(listaCount);
  const listaOrdenadaBi = ordenarListaBidimensional(listaArray, 1);
  const listaMaxNumber = listaOrdenadaBi[listaArray.length - 1];
  //La ultima posicion de listaOrdenadaBi tiene nuestra moda

  console.log({
    listaCount,
    listaArray,
    listaOrdenadaBi,
    listaMaxNumber,
  });

  //La posicion es 0 porque el primer elemento del [] es la moda, el segundo es la cantidad de veces que se repite
  // console.log(`La moda es ${listaMaxNumber[0]}`);
  const moda = listaMaxNumber[0];
  return moda;
};

//[ [0,1], [0,1], [0,1] ] => Para recorrer lsitaArray(objeto convertido en array) entro por cada elemento[] de la lsita, a su indice 1
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(
  listaDesordenada,
  i
) {
  function ordenarListaSort(valorAcumulado, nuevoValor) {
    //Se ordena segun el indice[1] de cada elemento porque con ese valor se hace la comparacion
    return valorAcumulado[1] - nuevoValor[1];
  }
  //cons lista = listaDesordenada.sort((a,b) => a-b)
  const lista = listaDesordenada.sort(ordenarListaSort);

  return lista;
};
