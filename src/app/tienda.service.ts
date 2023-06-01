import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  productos = [
    { id: 1, producto: 'Arroz', precio: 10.99 },
    { id: 2, producto: 'Leche', precio: 19.99 },
    { id: 3, producto: 'Huevos', precio: 5.99 },
    { id: 4, producto: 'Carne', precio: 7.99},
    { id: 5, producto: 'Manzanas', precio: 12.99 }
  ];

  constructor() { }
}
