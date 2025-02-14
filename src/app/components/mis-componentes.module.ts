import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component'; // Importa el componente standalone
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PageHeaderComponent 
  ],
  declarations: [PageHeaderComponent]
})
export class MisComponentesModule {}
