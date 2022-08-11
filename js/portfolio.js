
let portafolio = [];

const agregar = document.getElementById("agregar");

agregar.onclick = (e) => {
  e.preventDefault();
  //validar ();

  let newPort = new Portfolio(titulo.value, descripcion.value, anio.value, cliente.value);

  checkCategoria(newPort);
  checkSoftware(newPort);
  portafolio.push(newPort);
  mostrarItemsDom();
  
  localStorage.setItem("portafolio", JSON.stringify(portafolio));

  document.getElementById("form").reset();
};

function checkCategoria(newPort){
  let checkBoxCat = document.getElementsByClassName("check-cat-el");
  for(let checkcat of checkBoxCat){
    if(checkcat.checked){
      let cat = checkcat.value + ' ';
      newPort.perteneceCategoria(cat)
    }
  }
}

function checkSoftware(newPort){
  let checkBoxSoft = document.getElementsByClassName("check-soft-el");
  for(let checksof of checkBoxSoft){
    if(checksof.checked){
      let soft = checksof.value;
      newPort.softwareUsado(soft)
    }
  }
}

// Validar que el formulario no este vacio
/* function validar (){
  const titulo = document.getElementById("titulo").value;
  const descripcion = document.getElementById("descripcion").value;
  
  if(titulo.length == 0 || /^\s+$/.test(titulo)){
    console.log("el form tuene error");
  }
} */

function mostrarItemsDom(){
  let div = document.getElementById("portfolioContent-el");
  div.innerHTML = '';
  
  for(const item of portafolio){

    let contenedor = document.createElement("div");
    contenedor.classList.add("portfolioContent");
    contenedor.innerHTML += `
                            <img src="img/slide1.jpg"/>
                            <img class="btn-trash" src="img/trash.png"/>
                            <h3 class="portfolioContent_titulo">${item.titulo}</h3>
                            <p class="portfolioContent_descripcion">${item.descripcion}</p>
                            <p class="portfolioContent_anio">${item.anio}</p>
                            <p class="portfolioContent_cliente">Cliente: ${item.cliente}</p>
                            <p>Categoria: ${item.categoria}</p>
                            <p>Software: ${item.software}</p>
                            `
    div.appendChild(contenedor);
  }
}

portafolio = JSON.parse(localStorage.getItem("portafolio"));
if(portafolio === null){
  portafolio = [];
} 
mostrarItemsDom();
