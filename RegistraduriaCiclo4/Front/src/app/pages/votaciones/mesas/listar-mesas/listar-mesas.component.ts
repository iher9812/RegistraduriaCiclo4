import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MesasService } from 'src/app/servicios/mesas.service';

@Component({
  selector: 'app-listar-mesas',
  templateUrl: './listar-mesas.component.html',
  styleUrls: ['./listar-mesas.component.scss']
})
export class ListarMesasComponent implements OnInit {
  mesas: any;
  tableHead:string[]=['Número de mesa', 'Cantidad inscritos']
  constructor(private miServicioMesas:MesasService,
    private router:Router) {
  }

  ngOnInit(): void {
    this.mesas = this.listar()
  }
  async listar(){
    this.miServicioMesas.listar().subscribe(
      data => {this.mesas=data}
    );
    return this.mesas;
  }

  btnBack(){
    alert("Regresando al home");
    this.router.navigateByUrl('home');
  }
  btnEdit(id:string){
    this.router.navigateByUrl(`mesas/editar-mesas/${id}`);
  }

  btnMake(){
    this.router.navigateByUrl('mesas/crear-mesas');
  }
  btnDelete(id:string){
    if(confirm("¿Seguro que desea eliminar la mesa?")){
      this.miServicioMesas.eliminar(id).subscribe(
        data => {
          this.ngOnInit();
        },
        error => {
          alert("Upss, algo raro paso y no se pudo borrar.")
        }
      );
    }
  }
}
