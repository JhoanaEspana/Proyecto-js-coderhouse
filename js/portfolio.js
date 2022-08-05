
let portafolio = [];

let agregar = document.getElementById("agregar");

agregar.onclick = (e) => {
  e.preventDefault();
  let newPort = new Portfolio(titulo.value, descripcion.value, anio.value, cliente.value);

  checkCategoria(newPort);
  portafolio.push(newPort);
  mostrarItemsDom();
  document.getElementById("form").reset();
};

function checkCategoria(newPort){
  let checkBox = document.getElementsByClassName("check-el");
  for(let check of checkBox){
    if(check.checked){
      let cat = check.value;
      newPort.perteneceCategoria(cat)
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