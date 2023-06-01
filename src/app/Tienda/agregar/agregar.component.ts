import { Component } from '@angular/core';
import { TiendaService } from '../../tienda.service';
import { ProductoSeleccionadoService } from '../../producto-seleccionado.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  searchTerm: string = '';

  constructor(
    public tiendaService: TiendaService,
    private productoSeleccionadoService: ProductoSeleccionadoService
  ) {}

  get filteredProductos() {
    return this.tiendaService.productos.filter(producto =>
      producto.producto.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  agregarProducto(producto: { id: number, producto: string, precio: number, cantidad: number }) {
    if (producto.cantidad > 0) {
      const productoSeleccionado = {
        ...producto,
        cantidad: producto.cantidad
      };
      this.productoSeleccionadoService.agregarProductoSeleccionado(productoSeleccionado);
    }
  }
}
