import { Component, OnInit } from '@angular/core';
import { ProductoSeleccionadoService } from '../../producto-seleccionado.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  productosSeleccionados: { id: number, producto: string, precio: number, cantidad: number }[] = [];

  constructor(private productoSeleccionadoService: ProductoSeleccionadoService) {}

  ngOnInit() {
    this.productosSeleccionados = this.productoSeleccionadoService.getProductosSeleccionados();
  }
}
