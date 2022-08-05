
let portafolio = [];

let agregar = document.getElementById("agregar");

agregar.onclick = (e) => {
  e.preventDefault();
  let newPort = new Portfolio(titulo.value, descripcion.value, anio.value, cliente.value);

  checkCategoria(newPort);
  checkSoftware(newPort);
  portafolio.push(newPort);
  mostrarItemsDom();
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

function mostrarItemsDom(){
  let div = document.getElementById("portfolioContent-el");
  div.innerHTML = '';
  
  for(const item of portafolio){
    let contenedor = document.createElement("div");
    contenedor.classList.add("portfolioContent");
    contenedor.innerHTML += `
                            <img src="img/slide1.jpg"/>
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