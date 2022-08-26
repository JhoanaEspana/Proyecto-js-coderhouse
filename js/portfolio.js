let portafolio = [];

const agregar = document.getElementById("agregar");
const campoTitulo = document.getElementById("titulo");
const campoCliente = document.getElementById("cliente");

agregar.addEventListener("click", (e) => {
  e.preventDefault();

  if (campoTitulo.value.length == 0) {
    // usando SweetAlert
    swal(
      "Hey, ¿y el título?",
      "Por favor incluye un título al proyecto",
      "error"
    );
  } else {
    let newPort = new Portfolio(
      titulo.value,
      descripcion.value,
      anio.value,
      cliente.value
    );

    checkCategoria(newPort);
    checkSoftware(newPort);
    portafolio.push(newPort);
    mostrarItemsDom();

    localStorage.setItem("portafolio", JSON.stringify(portafolio));
    document.getElementById("form").reset();
  }

  // Operador ternario
  const error = swal(
    "Error!",
    "Por favor agrega el nombre del cliente",
    "error"
  );

  const ready = swal(
    "Hecho!",
    "Muchas gracias por agregar el titulo del cliente",
    "success"
  );

  campoCliente.value.length == 0 ? error : ready;
  //////////////////////////////////////
});

/////////////// Validando campo titulo ////////////////

const expresiones = {
  titulo: /^[a-zA-ZÀ-ÿ0-9\s]{4,15}$/,
  descripcion: /^[a-zA-ZÀ-ÿ0-9\s]{4,30}$/,
  cliente: /^[a-zA-ZÀ-ÿ\s]{4,15}$/,
};

const inputs = document.querySelectorAll("#form input");

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "titulo":
      if (expresiones.titulo.test(e.target.value)) {
        document
          .getElementById("grupo__titulo")
          .classList.remove("formulario__grupo-incorrecto");
        document
          .getElementById("grupo__titulo")
          .classList.add("formulario__grupo-correcto");
      } else {
        document
          .getElementById("grupo__titulo")
          .classList.add("formulario__grupo-incorrecto");
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

///////////////////////////////

function checkCategoria(newPort) {
  let checkBoxCat = document.getElementsByClassName("check-cat-el");
  for (let checkcat of checkBoxCat) {
    /* if (checkcat.checked) {
      let cat = checkcat.value + " ";
      newPort.perteneceCategoria(cat);
    } */

    // Operador lógico AND
    let cat = checkcat.value + " ";
    checkcat.checked && newPort.perteneceCategoria(cat);
  }
}

function checkSoftware(newPort) {
  let checkBoxSoft = document.getElementsByClassName("check-soft-el");
  for (let checksof of checkBoxSoft) {
    /*if (checksof.checked) {
      let soft = checksof.value;
      newPort.softwareUsado(soft);
    } */

    // Operador lógico AND
    let soft = checksof.value + " ";
    checksof.checked && newPort.softwareUsado(soft);
  }
}

function mostrarItemsDom() {
  let div = document.getElementById("portfolioContent-el");
  div.innerHTML = " ";

  for (const item of portafolio) {
    let contenedor = document.createElement("div");
    contenedor.classList.add("portfolioContent");

    contenedor.innerHTML += `
                            <img src="img/slide1.jpg"/>
                            <h3 class="portfolioContent_titulo">${item.titulo}</h3>
                            <p class="portfolioContent_descripcion">${item.descripcion}</p>
                            <p class="portfolioContent_anio">${item.anio}</p>
                            <p class="portfolioContent_cliente">Cliente: ${item.cliente}</p>
                            <p>Categoria: ${item.categoria.join(" ")}</p>
                            <p>Software: ${item.software.join(" ")}</p>
                            `;
    div.appendChild(contenedor);
  }
}

// Operador lógico OR
portafolio = JSON.parse(localStorage.getItem("portafolio")) || [];
/* if (portafolio === null) {
  portafolio = [];   
} */
mostrarItemsDom();

// Desestructuración
const imprimir = document.getElementById("imprimir");
const textoResumen = document.getElementById("sectiontext");

imprimir.addEventListener("click", (e) => {
  e.preventDefault();
  imprimirResumen();
});

function imprimirResumen() {
  textoResumen.innerHTML = " ";
  portafolio.forEach(({ titulo, anio, cliente }) => {
    textoResumen.innerHTML += `<p>Titulo: ${titulo}</p>
                              <p>Año: ${anio}</p>
                              <p>Cliente: ${cliente}</p>`;
  });
}

// Spread
const imprimirCategoria = document.getElementById("imprimir-categoria");
const textoResumenCategoria = document.getElementById("sectiontext-categoria");

imprimirCategoria.addEventListener("click", (e) => {
  e.preventDefault();
  imprimirCategorias();
});

function imprimirCategorias() {
  textoResumenCategoria.innerHTML = " ";

  for (const cate of portafolio) {
    const itemCategoria = cate.categoria;
    const categorias = [...itemCategoria];

    textoResumenCategoria.innerHTML += `<p>${categorias}</p>`;
  }
}


// API
const dataList = document.querySelector('#content-api')
const urlImg = 


window.addEventListener('DOMContentLoaded', async () => {
  const data = await cargarPortafolio();
  renderPortafolio(data);
})

const cargarPortafolio = async () => {
  const respuesta = await fetch('https://technoar.co/wp-json/jhoespana/v1/portafolio');
  return await respuesta.json()
}

const createItemsPortafolio = items => items.map(item => `<div class="portfolioContent">
                                                          <img width="280" src=${item.imagen}>
                                                          <h3 class="portfolioContent_titulo">${item.titulo}</h3>
                                                          <p class="portfolioContent_descripcion">${item.descripcion}</p>
                                                          <p class="portfolioContent_anio">${item.fecha}</p>
                                                          <p class="portfolioContent_cliente">Cliente: ${item.cliente}</p>
                                                          <p>Categoria: ${item.categoria}</p>
                                                          <p>Software: ${item.software}</p>
                                                          </div>`).join(' ')

function renderPortafolio(items){
  const itemsString = createItemsPortafolio(items)
  dataList.innerHTML = itemsString;
}