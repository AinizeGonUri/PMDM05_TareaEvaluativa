import { MisComponentesModule } from '../../components/mis-componentes.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LeafletPageRoutingModule } from './leaflet-routing.module';
import { LeafletPage } from './leaflet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletPageRoutingModule,
    MisComponentesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [LeafletPage]
})
export class LeafletPageModule {}
