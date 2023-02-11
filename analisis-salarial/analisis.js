console.log(salarios);

//Analisis personal para el objeto Juanita --> saber la mediana de salarios que ha tenido

function encontrarPersona(id) {
  // const persona = salarios.find((persona) => {
  //   return persona.id == 12344;
  // });
  return salarios.find((persona) => persona.id == id);
}

function medianaPorPersona(idPersona) {
  //Guardo en esta variable el array trabajos de esa persona mediante su id
  const trabajos = encontrarPersona(idPersona).trabajos;
  // console.log(trabajos);

  //Extraigo y creo un nuevo array a partir de los salarios del array trabajos de la persona
  const salarios = trabajos.map(function (elemento) {
    return elemento.salario;
  });
  // console.log(salarios);

  //Le paso salarios a mi metodo calcularMediana
  const medianaSalarios = PlatziMath.calcularMediana(salarios);
  // console.log(medianaSalarios);
  return medianaSalarios;
}

//Encontrar el array(trabajos) de la persona con el id que estuvieramos buscando
function proyeccionPorPersona(idPersona) {
  const trabajos = encontrarPersona(idPersona).trabajos;

  //Se debe llenar este array con los distintos incrementos que ha tenido la persona a lo largo de su carrera
  let porcentajesDeCrecimiento = [];

  //Iterar el array trabajos. X cada elemento dentro del array(trabajos) hacer un calculo entre el salario actual & salarioAnterior para  sacar el porcentaje de crecimiento
  for (let i = 1; i < trabajos.length; i++) {
    //Entro al array de salario(propiedad del objeto trabajos), a su indice
    const salarioActual = trabajos[i].salario;
    const salarioAnterior = trabajos[i - 1].salario;
    //Diferencia entre 2 salarios sera mi crecimiento(850-250 = diferencia)
    const crecimiento = salarioActual - salarioAnterior;
    //Para sacar el porcentaje del incremento:
    const porcentajeCrecimiento = (crecimiento / salarioAnterior).toFixed(2);
    //Cada porcentaje calculado por cada distinto año(elemento) del array trabajos lo guardamos en este array
    porcentajesDeCrecimiento.push(porcentajeCrecimiento);
  }

  const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(
    porcentajesDeCrecimiento
  );

  // console.log({ porcentajesDeCrecimiento, medianaPorcentajesCrecimiento });

  const ultimoSalario = trabajos[trabajos.length - 1].salario;
  const aumento = ultimoSalario * medianaPorcentajesCrecimiento;
  const nuevoSalario = (ultimoSalario + aumento).toFixed(2);

  return nuevoSalario;
  // console.log(aumento);
}

// Analisis Empresarial => Reestructuramos toda la informacion del array salarios enfocado a las empresas para su analisis salarial
/*{
  Industrias Mokepon: {
    2019: [{}] 
    2020: [salario, salario, salario]
    2021L ?
  },
  Industris Nik3: {
    2018: [insertar el salario]
  },
  Industris Nik3: {},
  Industris Nik3: {},
}*/

// Bucle for convencional
// for (let i = 0; i < salarios.length; i++) {
//   const element = salarios[i];
//   console.log(element.name);
// }

//Objeto empresas
const empresas = {};
// Bucle for of. => Recorro el array salarios y cada elemento se guarda en persona
for (persona of salarios) {
  // console.log(persona);

  // Por cada persona en el array de salarios, recorro c/u de los objetos del array trabajos. Cda objeto se guarda en trabajo
  for (trabajo of persona.trabajos) {
    //Aqui ya tengo trabajo.year, trabajo.empresa, trabajo.salario
    //Si no! existe esta empresa:
    if (!empresas[trabajo.empresa]) {
      //Creamos la empresa(nombre) adentro del objeto de empresas. Le decimos que es igual a un objeto
      empresas[trabajo.empresa] = {};
    }
    //Si no existe! la propiedad año(2018,2019,2020) dentro de esta empresa:
    if (!empresas[trabajo.empresa][trabajo.year]) {
      //Creamos ese array year = [] para insertar despues los salarios de dicho año
      empresas[trabajo.empresa][trabajo.year] = [];
    }

    //Dentro de trabajo creamos un nuevo objeto de empresas que tenga una propiedad por cada distinta empresa,
    //Por cada distinta empresa creamos una propiedad con el año(year) en el que dicha empresa tuvo empleados recibiendo un salario
    empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
  }
}

console.log(empresas);

//Funcion para hallar la mediana de cualquier empresa por año
function medianaEmpresaYear(nombre, year) {
  //Preguntamos si de ese objeto empresas tenemos alguna propiedad que se llame como el nombre(parametro de la funcion)
  //Si no existe! botamos un error
  if (!empresas[nombre]) {
    console.warn("La empresa no existe");
  } else if (!empresas[nombre][year]) {
    //Si no existe ese año entre sus propiedades bota error
    console.warn("La empresa no dio salarios ese año");
    //Otro caso que podria dar error es que no exista el year dentro de la empresa
  } else {
    //Retorna la mediana de los salarios de dicho año(year) de la empresa(nombre)
    return PlatziMath.calcularMediana(empresas[nombre][year]);
  }
}

//Funcion para hallar la proyeccion de una empresa. Sacamos las listas de medianas de cada añó por empresa
function proyeccionPorEmpresa(nombre) {
  //Encontrar a la empresa q buscamos. Dicha empresa es un objeto que tiene todos los años
  if (!empresas[nombre]) {
    console.warn("La empresa no existe");
  } else {
    //Crear un array a partir de un objeto. X cada iteracion este array tendra la mediana de cada año de este objeto
    const empresaYears = Object.keys(empresas[nombre]);
    const listaMedianaYears = empresaYears.map((year) => {
      //Por cada iteracion recibimos un año
      return medianaEmpresaYear(nombre, year);
    }); //[800, 900, 200] Este array tendra la mediana de cada año
    console.log({ listaMedianaYears });

    //Hacemos la proyeccion de una empresa a partir de las medianas de cada arreglo de salarios de tdas las personas que trabajaron cada año en cada empresa
    let porcentajesDeCrecimiento = [];

    for (let i = 1; i < listaMedianaYears.length; i++) {
      const salarioActual = listaMedianaYears[i];
      const salarioAnterior = listaMedianaYears[i - 1];
      const crecimiento = salarioActual - salarioAnterior;
      const porcentajeCrecimiento = crecimiento / salarioAnterior;
      porcentajesDeCrecimiento.push(porcentajeCrecimiento);
    }

    const medianaPorcentajesCrecimiento = PlatziMath.calcularMediana(
      porcentajesDeCrecimiento
    );

    const ultimaMediana = listaMedianaYears[listaMedianaYears.length - 1];
    const aumento = ultimaMediana * medianaPorcentajesCrecimiento;
    const nuevaMedianaDeSalarios = ultimaMediana + aumento;
    return nuevaMedianaDeSalarios;
  }
}

//Analisis General para la mediana general
function medianaGeneral() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.id)
  );
  // const medianaPorSujeto = listaMedianas.map((id) => medianaPorPersona(id));

  const mediana = PlatziMath.calcularMediana(listaMedianas);

  return mediana;
}

//Mediana del Top 10%
function medianaTop10() {
  const listaMedianas = salarios.map((persona) =>
    medianaPorPersona(persona.id)
  );

  const medianasOrdenadas = PlatziMath.ordenarLista(listaMedianas);

  // 20 / 10 => 2
  const cantidad = listaMedianas.length / 10;
  const limite = listaMedianas.length - cantidad;

  //slice(hace una copia de los elementos seleccionados, desde (limite) hasta el final del arreglo(medianasOrdenadas.length)), splice(quita los elementos seleccionados del array original)
  const top10 = medianasOrdenadas.slice(limite, medianasOrdenadas.length);
  console.log({ top10 });

  const medianaTop10 = PlatziMath.calcularMediana(top10);
  return medianaTop10;
}
