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
