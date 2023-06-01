import { Component } from '@angular/core';
import { ProductoSeleccionadoService } from '../../producto-seleccionado.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  productosSeleccionados: { id: number, producto: string, precio: number, cantidad: number }[] = [];

  constructor(private productoSeleccionadoService: ProductoSeleccionadoService) {
    this.productosSeleccionados = this.productoSeleccionadoService.getProductosSeleccionados();
  }

  eliminarProducto(producto: { id: number, producto: string, precio: number, cantidad: number }) {
    this.productoSeleccionadoService.eliminarProductoSeleccionado(producto);
  }
}
