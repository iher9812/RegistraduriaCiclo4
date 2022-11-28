import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mesas } from '../modelos/mesas.model';

@Injectable({
  providedIn: 'root'
})
export class MesasService {
  private url:string="";
  constructor(private http: HttpClient) {
    this.url = `${environment.url_gateway}/mesas`;
  }
  listar():Observable<Mesas[]>{
    return this.http.get<Mesas[]>(this.url);
  }
  eliminar(id:string){
    return this.http.delete<Mesas>(`${this.url}/${id}`);
  }
  crear(infoMesas:Mesas):Observable<Mesas>{
    return this.http.post<Mesas>(this.url,infoMesas);
  }
  modificar(id:string, infoMesas:Mesas):Observable<Mesas>{
    return this.http.put<Mesas>(`${this.url}/${id}`, infoMesas);
  }
  getMesa(id:string):Observable<Mesas>{
    return this.http.get<Mesas>(`${this.url}/${id}`);
  }
}
