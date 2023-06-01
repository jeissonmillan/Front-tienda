import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  tienda:Tienda[]
  constructor(private http:HttpClient) { }

  Url="http://localhost:8080/Ejemplo01/tienda"
  getTienda(){
    return this.http.get<tienda>
  }
}
