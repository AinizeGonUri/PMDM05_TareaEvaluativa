import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'camara',
    loadChildren: () => import('./pages/camara/camara.module').then( m => m.CameraPageModule)
  },
  {
    path: 'carrusel',
    loadChildren: () => import('./pages/carruselSwiper/carruselSwiper.module').then( m => m.CarruselPageModule)
  },
  {
    path: 'voz',
    loadChildren: () => import('./pages/voz/voz.module').then( m => m.VozPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
