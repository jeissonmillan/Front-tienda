import { Component } from '@angular/core';
import { ProductoSeleccionadoService } from '../../producto-seleccionado.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  facturacion: { id: number, nombre: string, precio: number }[] = [];
  total: number = 0;

  constructor(private productoSeleccionadoService: ProductoSeleccionadoService) {
    const productosSeleccionados = this.productoSeleccionadoService.getProductosSeleccionados();
    this.facturacion = productosSeleccionados.map(producto => {
      return {
        id: producto.id,
        nombre: producto.producto,
        precio: producto.precio * producto.cantidad
      };
    });

    this.total = this.facturacion.reduce((acc, producto) => acc + producto.precio, 0);
  }
}
