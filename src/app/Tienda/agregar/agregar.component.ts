import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  productos = [
    { id: 1, producto: 'Producto 1', precio: 10.99 },
    { id: 2, producto: 'Producto 2', precio: 19.99 },
    { id: 3, producto: 'Producto 3', precio: 5.99 },
    { id: 4, producto: 'Producto 4', precio: 7.99 },
    { id: 5, producto: 'Producto 5', precio: 12.99 }
  ];

  searchTerm: string = '';
  carritoCompras: any[] = [];

  get filteredProductos() {
    return this.productos.filter(producto =>
      producto.producto.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  agregarAlCarrito(producto: any, cantidad: number) {
    const productoCarrito = {
      id: producto.id,
      producto: producto.producto,
      precio: producto.precio,
      cantidad: cantidad
    };
    this.carritoCompras.push(productoCarrito);
  }
}
