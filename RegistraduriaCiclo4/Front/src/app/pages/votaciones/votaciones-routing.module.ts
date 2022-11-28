import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VotacionesComponent } from './votaciones.component';

const routes: Routes = [
  {
    path:'',
    component:VotacionesComponent
  },
  {
    path: 'mesas',
    loadChildren:()=>import('./mesas/mesas.module')
    .then(m=>m.MesasModule)
  },
  {
    path:'partidos',
    loadChildren:()=>import('./partidos/partidos.module')
    .then(m => m.PartidosModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VotacionesRoutingModule { }
