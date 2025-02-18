import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-voz',
  templateUrl: './voz.page.html',
  styleUrls: ['./voz.page.scss'],
  standalone: false
})

export class VozPage {
  text: string = 'Presiona el botón y di "foto"';
  isListening: boolean = false;

  async checkPermissions() {
    const permission = await SpeechRecognition.requestPermission();
    console.log('Permisos de reconocimiento:', permission);
  }

  async startListening() {
    this.isListening = true;
    const available = await SpeechRecognition.available();

    if (available) {
      const result = await SpeechRecognition.start({
        language: 'es-ES',
        maxResults: 1,
        prompt: 'Di "foto" para abrir la cámara',
        partialResults: false,
      });

      this.text = result.matches[0] || 'No se reconoció nada';

      if (this.text.toLowerCase() === 'foto') {
        this.openCamera();
      }
    } else {
      this.text = 'El reconocimiento de voz no está disponible';
    }

    this.isListening = false;
  }

  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });

      console.log('Imagen tomada:', image);
      alert('¡Foto tomada con éxito!');
    } catch (error) {
      console.error('Error al abrir la cámara', error);
    }
  }
}
