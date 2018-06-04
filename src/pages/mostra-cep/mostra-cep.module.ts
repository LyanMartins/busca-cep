import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostraCepPage } from './mostra-cep';

@NgModule({
  declarations: [
    MostraCepPage,
  ],
  imports: [
    IonicPageModule.forChild(MostraCepPage),
  ],
})
export class MostraCepPageModule {}
