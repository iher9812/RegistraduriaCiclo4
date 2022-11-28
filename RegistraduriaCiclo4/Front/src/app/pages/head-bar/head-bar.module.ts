import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadBarComponent } from './head-bar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HeadBarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule


  ],
  exports:[
    HeadBarComponent
  ]
})
export class HeadBarModule { }
