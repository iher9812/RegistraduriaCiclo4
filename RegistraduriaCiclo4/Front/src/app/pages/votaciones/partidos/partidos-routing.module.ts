import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPartidosComponent } from './crear-partidos/crear-partidos.component';
import { ListarPartidosComponent } from './listar-partidos/listar-partidos.component';
import { PartidosComponent } from './partidos.component';

const routes: Routes = [
  {
    path:'',
    component:PartidosComponent
  },
  {
    path:'crear-partido',
    component:CrearPartidosComponent
  },
  {
    path:'editar-partido/:id_partido',
    component:CrearPartidosComponent
  },
  {
    path:'listar-partido',
    component:PartidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartidosRoutingModule { }
