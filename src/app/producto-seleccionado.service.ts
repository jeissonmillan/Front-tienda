import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoSeleccionadoService {
  productosSeleccionados: { id: number, producto: string, precio: number, cantidad: number }[] = [];

  agregarProductoSeleccionado(producto: { id: number, producto: string, precio: number, cantidad: number }) {
    this.productosSeleccionados.push(producto);
  }

  getProductosSeleccionados() {
    return this.productosSeleccionados;
  }
}
