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
  console.log(trabajos);

  //Extraigo y creo un nuevo array a partir de los salarios del array trabajos de la persona
  const salarios = trabajos.map((elemento) => {
    return elemento.salario;
  });
  console.log(salarios);

  //Le paso salarios a mi metodo calcularMediana
  const medianaSalarios = PlatziMath.calcularMediana(salarios);
  console.log(medianaSalarios);
}

function proyeccionPorPersona(idPersona) {
  const trabajos = encontrarPersona(idPersona).trabajos;

  //Se debe llenar este array con los distintos incrementos que ha tenido la persona a lo largo de su carrera
  let porcentajesDeCrecimiento = [];

  //Iterar el array trabajos
  for (let i = 1; i < trabajos.length; i++) {
    //Entro al array de salario(propiedad del objeto trabajos), a su indice
    const salarioActual = trabajos[i].salario;
    const salarioAnterior = trabajos[i - 1].salario;
    //Diferencia entre 2 salarios sera mi crecimiento(850-250 = diferencia)
    const crecimiento = salarioActual - salarioAnterior;
    //Para sacar el porcentaje del incremento:
    const porcentajeCrecimiento = (crecimiento / salarioAnterior).toFixed(2);
    //Lo agrego al array
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

//Funcion para hallar la proyeccion de una empresa
