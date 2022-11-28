import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeadBarModule } from './head-bar/head-bar.module';
import { FormLoginModule } from './form-login/form-login.module';
import { VotacionesModule } from './votaciones/votaciones.module';



@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    HeadBarModule,
    FormLoginModule,
    VotacionesModule
  ],
  exports: [PagesComponent]
})
export class PagesModule { }
