import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Tienda } from '../Modelo/Tienda';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:8080/Ejemplo01/tienda"
  getTienda(){
    return this.http.get<Tienda[]>(this.Url)
  }
}
