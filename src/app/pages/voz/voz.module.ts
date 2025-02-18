import { MisComponentesModule } from '../../components/mis-componentes.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VozPageRoutingModule } from './voz-routing.module';
import { VozPage } from './voz.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VozPageRoutingModule,
    MisComponentesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [VozPage]
})
export class VozPageModule {}
