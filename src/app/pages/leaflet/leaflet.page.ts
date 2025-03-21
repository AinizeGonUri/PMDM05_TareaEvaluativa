import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.page.html',
  styleUrls: ['./leaflet.page.scss'],
  standalone: false
})

export class LeafletPage {
  map!: L.Map;

  ionViewDidEnter() {
    this.loadMap();
  }

  loadMap() {
    this.map = L.map('map').setView([40.4168, -3.7038], 13); // Coordenadas de Madrid

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 20,
      attribution: '© OpenStreetMap contributors',
    }).addTo(this.map);

    L.marker([40.4168, -3.7038])
      .addTo(this.map)
      .bindPopup('📍 Madrid')
      .openPopup();
  }

  ionViewWillLeave(){
    this.map.remove(); 
  }
}
