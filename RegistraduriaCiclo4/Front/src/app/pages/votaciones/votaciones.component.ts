import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-votaciones',
  templateUrl: './votaciones.component.html',
  styleUrls: ['./votaciones.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class VotacionesComponent implements OnInit {
  constructor(private miServicioLogin: UsuarioService) {
   }

  ngOnInit(): void {

  }

}
