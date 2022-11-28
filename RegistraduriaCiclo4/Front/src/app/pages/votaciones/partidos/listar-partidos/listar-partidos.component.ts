import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartidosService } from 'src/app/servicios/partidos.service';

@Component({
  selector: 'app-listar-partidos',
  templateUrl: './listar-partidos.component.html',
  styleUrls: ['./listar-partidos.component.scss']
})
export class ListarPartidosComponent implements OnInit {
  partidos:any;
  tableHead:string[]=['Nombre partido', 'Lema del partido']

  constructor(private miServicioPartido:PartidosService,
    private router:Router) { }

  ngOnInit(): void {
    this.listar();
  }

  async listar(){
    this.miServicioPartido.listar().subscribe(
      data =>{this.partidos=data}
    );
    return this.partidos;
  }
  btnBack(){
    alert("Regresando al home");
    this.router.navigateByUrl('home');
  }
  btnEdit(id:string){
    this.router.navigateByUrl(`partidos/editar-partido/${id}`);
  }

  btnMake(){
    this.router.navigateByUrl('partidos/crear-partido');
  }
  btnDelete(id:string){
    if(confirm("¿Seguro que desea eliminar el partido?")){
      this.miServicioPartido.eliminar(id).subscribe(
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
