import { MisComponentesModule } from '../../components/mis-componentes.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CarruselPageRoutingModule } from './carruselSwiper-routing.module';
import { CarruselPage } from './carruselSwiper.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarruselPageRoutingModule,
    MisComponentesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CarruselPage]
})
export class CarruselPageModule {}
