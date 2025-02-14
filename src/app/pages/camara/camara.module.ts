import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CamaraPage } from './camara.page'; 
import { IonicModule } from '@ionic/angular';
import { MisComponentesModule } from 'src/app/components/mis-componentes.module';
import { CamaraPageRoutingModule } from './camara-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    MisComponentesModule,
    CamaraPageRoutingModule
  ],
  declarations: [
    CamaraPage 
  ]
})
export class CameraPageModule {}
