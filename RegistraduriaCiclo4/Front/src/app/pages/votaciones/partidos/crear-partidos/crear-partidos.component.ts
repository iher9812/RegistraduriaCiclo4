import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Partidos } from 'src/app/modelos/partidos.model';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-crear-partidos',
  templateUrl: './crear-partidos.component.html',
  styleUrls: ['./crear-partidos.component.scss']
})
export class CrearPartidosComponent implements OnInit {
  modoCreacion: boolean = true;
  id_partido: string = "";
  intentoEnvio: boolean = false;
  elPartido: Partidos = {
    nombre: "",
    lema: ""
  };
  constructor(private misServiciosPartidos:PartidosService,
    private router:Router, private rutaActiva:ActivatedRoute) { }
    ngOnInit(): void {
      let mostrarVistaEditar = this.rutaActiva.snapshot.params['id_partido'];
      if (mostrarVistaEditar) {
        this.modoCreacion = false;
        this.id_partido = mostrarVistaEditar;
        this.getPartido(this.id_partido);
      } else {
        this.modoCreacion = true;
      }
    }

    getPartido(id: string) {
      this.misServiciosPartidos.getPartido(id).subscribe(
        data => { this.elPartido = data }
      );
    }

    crearPartido(){
      if(this.estanCompletas()){
        this.misServiciosPartidos.crear(this.elPartido).subscribe(
          data => {
            alert("Partido creado!"),
            this.router.navigateByUrl('partidos/listar-partido')
          },
          error => {alert("Upps algo raro paso, no se creo la mesa")}
        );
      }
    }

    editarPartido(){
      if(this.estanCompletas()){
        let idPartido = JSON.stringify(this.elPartido._id).replace('"','');
        idPartido = idPartido.replace('"','');
        this.misServiciosPartidos.modificar(idPartido,this.elPartido).subscribe(
          data => {
            alert("Partido editado!"),
            this.router.navigateByUrl('partidos/listar-partido')
          },
          error => {alert("Upps algo raro paso, no se creo la mesa")}
        );
      }
    }


    btnBack(){
      this.router.navigateByUrl('partidos/listar-partido');
    }
    estanCompletas(){
      let loestan:boolean= true;
      if(this.elPartido.nombre == "" ||
      this.elPartido.lema == ""){
        loestan = false;
        alert("Todos los parametros deben estar completo");
        return loestan;
      }else{
        return loestan;
      }

    }

  }
