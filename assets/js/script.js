$(function () {
  //! Esto de tooltipTriggerList no lo estaría utilizando a modo de ser mas simple
//   var tooltipTriggerList = [].slice.call(
//     document.querySelectorAll('[data-bs-toggle="tooltip"]')
//   );

//   console.log("tooltipTriggerList -> ", tooltipTriggerList);
  /*
    Array(3) [
    0: button#enviarCorreo.btn.header_boton.me-3.d-inline-block
    1: button.btn.header_boton.ms-3.d-inline-block
    2: button.btn.seccion_newslatter_boton.text-white.mt-3 ]
*/

  /*
//* En vez de utilizar este tooltipList de extraccion compleja uso mi camino de map con connectiontooltip 
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
*/

  /*
TODO: versión -> devuelve una NodeList con querySelectorAll
  var connectVarios = document.querySelectorAll(".connectiontooltip");
  console.log("mi boton class connectVarios -> ", connectVarios);

// *document.querySelectorAll devuelve una NodeList, que es similar a un array pero no tiene el método map. 
// Por lo tanto, cuando intentas llamar a map en connectVarios, obtienes un error que indica 
// que map no es una función. Para solucionarlo, puedes tomar los elementos usando spread operator 

  [...connectVarios].map((element) => {
    return new bootstrap.Tooltip(element);
  });
*/

// *Bootstrap Tooltip crear objeto Tooltip pasando como parámetro el elemento al que deseas asociar el tooltip
// <button id="myButton" type="button" class="btn btn-primary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mi Tooltip">Botón</button>

  //TODO: versión simple usando getElementsByClassName que devuelve una -> HTMLCollection(3)
  var connectVarios = document.getElementsByClassName("connectiontooltip");
  console.log("mi boton class connectVarios -> ", connectVarios);

  // * y solo map connectVarios
  [...connectVarios].map((element) => {
    return new bootstrap.Tooltip(element);
  });

  var miBttnConectClass = $(".connect");
  console.log("mi boton class connect -> ", miBttnConectClass);

  // new bootstrap.Tooltip(miBttnConectClass[0]) // <-- activo toolTip a un solo botón

  // miBttnConectClass es un objeto indexado tipo {0:"..."", 1: "...", prevData <- y con otra info más}
  // activo toolTip a varios botones
  for (const key in miBttnConectClass) {
    if (!isNaN(parseInt(key))) {
      // isNaN(3) -> false  |  isNaN("3") -> false  |  isNaN("hola") -> true
      new bootstrap.Tooltip(miBttnConectClass[key]);
    }
  }

  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente...");
  });

  /*
  TODO: jQuery para manipular elementos HTML
  $("body").on("dblclick", "h4", function () { $(this).css("color", "red"); });: 
  Este código agrega un "listener" al elemento body de la página web. Al hacer
  *doble clic (dblclick) en cualquier elemento h4 dentro del cuerpo del 
  documento (body), el color del elemento clicado se cambia a rojo.
  */
  $("body").on("dblclick", "h4", function () {
    $(this).css("color", "red");
  });

  /*
  TODO: jQuery para manipular elementos HTML
  $(".card-title").click(function () { $(".card-text").toggle(); });: 
  Este código agrega un "listener" al elemento con la clase card-title. Cuando se hace 
  *clic en cualquier elemento con esa clase, se ejecuta una función que alterna la visibilidad 
  de todos los elementos con la clase card-text, alternando entre ocultarlos y mostrarlos 
  cada vez que se hace clic en un elemento con la clase card-title
  */

  $(".card-title").click(function () {
    $(".card-text").toggle();
  });
});
