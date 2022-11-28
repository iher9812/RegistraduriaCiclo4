import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MesasRoutingModule } from './mesas-routing.module';
import { MesasComponent } from './mesas.component';
import { ListarMesasComponent } from './listar-mesas/listar-mesas.component';
import { CrearMesasComponent } from './crear-mesas/crear-mesas.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { HeadBarModule } from '../../head-bar/head-bar.module';

@NgModule({
  declarations: [
    MesasComponent,
    ListarMesasComponent,
    CrearMesasComponent
  ],
  imports: [
    CommonModule,
    MesasRoutingModule,
    MatGridListModule,
    MatButtonModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    HeadBarModule
  ],
  exports:[MesasComponent]
})
export class MesasModule { }
