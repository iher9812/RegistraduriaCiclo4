import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMesasComponent } from './crear-mesas/crear-mesas.component';
import { ListarMesasComponent } from './listar-mesas/listar-mesas.component';
import { MesasComponent } from './mesas.component';

const routes: Routes = [
  {
    path:'',
    component:MesasComponent
  },
  {
    path:'listar-mesas',
    component:MesasComponent
  },
  {
    path:'crear-mesas',
    component:CrearMesasComponent
  },
  {
    path:'editar-mesas/:id_mesa',
    component:CrearMesasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MesasRoutingModule { }
