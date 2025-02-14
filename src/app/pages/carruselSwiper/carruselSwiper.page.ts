import { CamaraService } from '../../servicios/camara.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carruselSwiper.page.html',
  styleUrls: ['./carruselSwiper.page.scss'],
  standalone: false
})
export class CarruselPage implements OnInit {
  
  config = {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: { delay: 3000 },
    speed: 400,
    navigation: true,
    pagination: { clickable: true }
  };

  constructor(
    public usarCamara: CamaraService
  ) { }

  ngOnInit() {}
}
