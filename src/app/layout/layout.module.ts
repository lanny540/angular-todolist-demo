import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from '../app-routing.module';
import { BtnComponent } from './btn/btn.component';



@NgModule({
  declarations: [NavComponent, BtnComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavComponent,
    BtnComponent,
  ],
})
export class LayoutModule { }
