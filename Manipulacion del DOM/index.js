const h1 = document.querySelector("h1");
// const p = document.querySelector("p");
// const parrafo = document.querySelector(".parrafo");
// const pid = document.getElementById("pid");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResultado = document.querySelector("#resultado");
const form = document.querySelector("#formulario");

// //Inserto texto desde js en una etiqueta HTML seleccionandola con querySelector
// p.innerHTML = "One piece <br><br> Arco de Wuano";
// parrafo.innerHTML = "Monky D.Luffy";

// //Inserto una nueva clase y la elimino dentro de una etiqueta en HTML
// h1.classList.add("personaje");
// h1.classList.remove("personaje");

// //Creo un elemento imagen en HTML
// const img = document.createElement("img");
// img.setAttribute(
//   "src",
//   "https://i0.wp.com/www.lacasadeel.net/wp-content/uploads/2022/06/proximo-nakama-one-piece.jpg"
// );
// console.log(img);

// //Elimino lo que habia en la etiqueta con id #pid e inserto la imagen con appenCHild
// pid.innerHTML = "";
// pid.appendChild(img);

// //Escuchador de eventos, este metodo se le pasan 2 argumentos(nombre del evento, codigo js que ejecutara)
// btn.addEventListener("click", btnOnClick);

// //Funcion para capturar los values de los inputs e imprimir resultado en el HTML
// function btnOnClick() {
//   const sumaInputs = Number(input1.value) + Number(input2.value);
//   pResultado.innerText = "Resultado: " + sumaInputs;
//   // console.log(input1.value + input2.value); //Con Number() convierto el string a numero
//   // console.log("escuchando el evento de click");
// }

//Misma funcion pero usando el tipo submit
form.addEventListener("submit", enviarFormulario);

function enviarFormulario(event) {
  //de ese evento llamo a su propiedad preventDefault para que no se recarge la pagina
  console.log({ event });
  event.preventDefault();
  const sumaInputs = Number(input1.value) + Number(input2.value);
  pResultado.innerText = "Resultado: " + sumaInputs;
}
