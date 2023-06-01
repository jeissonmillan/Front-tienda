import { Component } from '@angular/core';
import { TiendaService } from '../../tienda.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  searchTerm: string = '';
  productosSeleccionados: { id: number, producto: string, precio: number, cantidad: number }[] = [];

  constructor(public tiendaService: TiendaService) {}

  get filteredProductos() {
    return this.tiendaService.productos.filter(producto =>
      producto.producto.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  agregarProducto(producto: { id: number, producto: string, precio: number }) {
    const productoSeleccionado = {
      ...producto,
      cantidad: 1
    };
    this.productosSeleccionados.push(productoSeleccionado);
  }
}
