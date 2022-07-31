class Portafolio {
  constructor(titulo, descripcion, anio, cliente, categoria) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.anio = anio;
    // this.imagen = imagen;
    this.cliente = cliente;
    this.categoria = [];
    this.software = [];
  }

  softwareUsado(nuevoSoftware) {
    this.software.push(nuevoSoftware);
  }

  perteneceCategoria(nuevaCategoria) {
    this.categoria.push(nuevaCategoria);
  }

  verPortafolio() {
    alert(
      `${this.titulo} ${this.descripcion}, creado en el año: ${this.anio}, para el cliente ${this.cliente}, En la categoria ${this.categoria} software usado: ${this.software}`
    );
  }
}

let agregarDatosPortafolio = Number(
  prompt("cuantos nuevos portafolio desea agregar?")
);

for (let i = 1; i <= agregarDatosPortafolio; i++) {
  const titulo = prompt(`Ingrese el titulo del portafolio ${i}`);
  const descripcion = prompt(`Ingrese la descripcion portafolio ${i}`);
  const anio = prompt(`Ingrese el año en que se elaboro ${i}`);
  const cliente = prompt(`Ingrese quien fue el cliente ${i}`);
  
  const portafolio = new Portafolio(titulo, descripcion, anio, cliente);
  
  const soft = prompt(`ingrese el software usado: ${i}`);
  portafolio.softwareUsado(soft);
  
  const categoria = prompt(`Ingrese la categoria a la que pertenece ${i}`);
  portafolio.perteneceCategoria(categoria);
  
  
  portafolio.verPortafolio();
  console.log(portafolio);  

}


/* function buscarPorCat(array, cat) {
  array.filter((item) => {
    return item.categoria.contains(cat);
  });
} */