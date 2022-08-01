class Portfolio {
  constructor(titulo, descripcion, anio, cliente) {
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.anio = anio;
    // this.imagen = imagen;
    this.cliente = cliente;
    this.categoria = [];
    this.software = [];
  }
  
  perteneceCategoria(nuevaCategoria) {
    this.categoria.push(nuevaCategoria);
  }
  
  softwareUsado(nuevoSoftware) {
    this.software.push(nuevoSoftware);
  }
}
