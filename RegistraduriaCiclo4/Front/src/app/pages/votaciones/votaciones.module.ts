import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VotacionesRoutingModule } from './votaciones-routing.module';
import { VotacionesComponent } from './votaciones.component';
import { HeadBarModule } from '../head-bar/head-bar.module';
import { BotonesHomeComponent } from './botones-home/botones-home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import { PartidosModule } from './partidos/partidos.module';
import { MesasModule } from './mesas/mesas.module';
@NgModule({
  declarations: [
    VotacionesComponent,
    BotonesHomeComponent,
  ],
  imports: [
    CommonModule,
    VotacionesRoutingModule,
    HeadBarModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    MatGridListModule,
    PartidosModule,
    MesasModule,
  ],
  exports:[VotacionesComponent]
})
export class VotacionesModule { }
