import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mesas } from '../modelos/mesas.model';
import { Usuario } from '../modelos/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url: string="";
  public elUsuario = new BehaviorSubject<Usuario>(new Usuario);
  constructor(private http:HttpClient,
    private router: Router) {
      this.url = `${environment.url_gateway}/login`;
      this.verificarSesionActual();
    }

    public get usuarioSesionActiva():Usuario{
      return this.elUsuario.value;
    }

    setUsuario(user: Usuario){
      this.elUsuario.next(user);
    }

    getUsuario(){
      return this.elUsuario.asObservable();
    }

    login(infoUsuario:Usuario):Observable<Usuario>{
      return this.http.post<Usuario>(this.url, infoUsuario);
    }

    guardarDatosSesion(datosSesion: any){
      let sesionActual = localStorage.getItem('sesion');
      let data: Usuario = {
        _id: datosSesion.user_id,
        token: datosSesion.token
      };
      localStorage.setItem('sesion', JSON.stringify(data));
      this.setUsuario(data);
    }

    logout(){
      localStorage.removeItem('sesion');
      this.setUsuario(new Usuario());
    }

    getDatosSesion(){
      let sesionActual = localStorage.getItem('sesion');
      return sesionActual;
    }

    sesionExiste():boolean{
      let sesionActual = this.getDatosSesion();
    return (sesionActual) ? true : false;
    }

    verificarSesionActual(){
      let sesionActual = this.getDatosSesion();
      if (sesionActual){
        this.setUsuario(JSON.parse(sesionActual));
      }
    }

    getMesas():Observable<Mesas[]>{
      return this.http.get<Mesas[]>(`${environment.url_gateway}/mesas`);
    }
}
