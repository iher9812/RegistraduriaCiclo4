import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Partidos } from '../modelos/partidos.model';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  private url:string="";

  constructor(private http:HttpClient) {
    this.url = `${environment.url_gateway}/partidos`;
   }

   listar():Observable<Partidos[]>{
    return this.http.get<Partidos[]>(this.url);
  }
  eliminar(id:string){
    return this.http.delete<Partidos>(`${this.url}/${id}`);
  }
  crear(infoPartidos:Partidos):Observable<Partidos>{
    return this.http.post<Partidos>(this.url, infoPartidos);
  }
  modificar(id:string, infoPartidos:Partidos):Observable<Partidos>{
    return this.http.put<Partidos>(`${this.url}/${id}`, infoPartidos);
  }
  getPartido(id:string):Observable<Partidos>{
    return this.http.get<Partidos>(`${this.url}/${id}`);
  }
}
