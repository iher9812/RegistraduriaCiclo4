import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-head-bar',
  templateUrl: './head-bar.component.html',
  styleUrls: ['./head-bar.component.scss']
})
export class HeadBarComponent implements OnInit {

  constructor(private router:Router,
    private miServicioSeguridad: UsuarioService) { }

  ngOnInit(): void {
  }

  btnLogin():void{
    if(confirm("¿Desea salir de la página?")){
      this.miServicioSeguridad.logout();
      this.router.navigateByUrl('');

    }
  }
}
