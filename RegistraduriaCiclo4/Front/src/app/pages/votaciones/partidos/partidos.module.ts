import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartidosRoutingModule } from './partidos-routing.module';
import { PartidosComponent } from './partidos.component';
import { HeadBarModule } from '../../head-bar/head-bar.module';
import { ListarPartidosComponent } from './listar-partidos/listar-partidos.component';
import { CrearPartidosComponent } from './crear-partidos/crear-partidos.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    PartidosComponent,
    ListarPartidosComponent,
    CrearPartidosComponent
  ],
  imports: [
    CommonModule,
    PartidosRoutingModule,
    HeadBarModule,
    FormsModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    HeadBarModule,
    MatGridListModule

  ],
  exports:[PartidosComponent]
})
export class PartidosModule { }
