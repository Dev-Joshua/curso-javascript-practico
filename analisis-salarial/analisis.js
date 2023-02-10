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
