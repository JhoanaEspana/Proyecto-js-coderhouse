
let portafolio = [];

let agregar = document.getElementById("agregar");

agregar.onclick = (e) => {
  e.preventDefault();
  portafolio.push(new Portfolio(titulo.value, descripcion.value, anio.value, cliente.value));
  mostrarItemsDom()
};

/* portafolio.perteneceCategoria(categoria.value);
 */

function mostrarItemsDom(){
  let div = document.getElementById("portfolioContent-el")
  
  for(const item of portafolio){
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>${item.titulo}</h3>
                            <p>${item.descripcion}</p>
                            <p>${item.anio}</p>
                            <p>Cliente: ${item.cliente}</p>
                            <p>Categoria: ${item.categoria}</p>`
    div.appendChild(contenedor);
  }
} 


