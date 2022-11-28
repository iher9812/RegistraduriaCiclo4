import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mesas } from 'src/app/modelos/mesas.model';
import { MesasService } from 'src/app/servicios/mesas.service';

@Component({
  selector: 'app-crear-mesas',
  templateUrl: './crear-mesas.component.html',
  styleUrls: ['./crear-mesas.component.scss']
})
export class CrearMesasComponent implements OnInit {

  modoCreacion: boolean = true;
  id_mesa: string = "";
  intentoEnvio: boolean = false;
  laMesa: Mesas = {
    numero: "",
    cantidad_inscritos: ""
  };
  constructor(private miServicioMesas: MesasService,
    private router: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    let mostrarVistaEditar = this.rutaActiva.snapshot.params['id_mesa'];
    if (mostrarVistaEditar) {
      this.modoCreacion = false;
      this.id_mesa = mostrarVistaEditar;
      this.getMesa(this.id_mesa);
    } else {
      this.modoCreacion = true;
    }
  }

  getMesa(id: string) {
    this.miServicioMesas.getMesa(id).subscribe(
      data => { this.laMesa = data }
    );
  }

  crearMesa(){
    if(this.estanCompletas()){
      this.miServicioMesas.crear(this.laMesa).subscribe(
        data => {
          alert("Mesa creada!"),
          this.router.navigateByUrl('mesas/listar-mesas')
        },
        error => {alert("Upps algo raro paso, no se creo la mesa")}
      );
    }
  }

  editarMesa(){
    if(this.estanCompletas()){
      let idMesa = JSON.stringify(this.laMesa._id).replace('"','');
      idMesa = idMesa.replace('"','');
      this.miServicioMesas.modificar(idMesa,this.laMesa).subscribe(
        data => {
          alert("Mesa editada!"),
          this.router.navigateByUrl('mesas/listar-mesas')
        },
        error => {alert("Upps algo raro paso, no se creo la mesa")}
      );
    }
  }


  btnBack(){
    this.router.navigateByUrl('mesas/listar-mesas');
  }
  estanCompletas(){
    let loestan:boolean= true;
    if(this.laMesa.numero == "" ||
    this.laMesa.cantidad_inscritos == ""){
      loestan = false;
      alert("Todos los parametros deben estar completo");
      return loestan;
    }else{
      return loestan;
    }

  }

}
