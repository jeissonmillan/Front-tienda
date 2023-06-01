import { TestBed } from '@angular/core/testing';

import { ProductoSeleccionadoService } from './producto-seleccionado.service';

describe('ProductoSeleccionadoService', () => {
  let service: ProductoSeleccionadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoSeleccionadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
