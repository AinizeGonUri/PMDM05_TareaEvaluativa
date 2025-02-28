import { SpeechRecognition } from '@capacitor-community/speech-recognition';
import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-voz',
  templateUrl: './voz.page.html',
  styleUrls: ['./voz.page.scss'],
  standalone: false
})

export class VozPage {

  text: string = 'Presiona el botón y di "foto"';
  isListening: boolean = false;
  photos: string[] = []; 

  async checkSpeechRecognition() {
    const available = await SpeechRecognition.available();
    console.log('Disponibilidad del reconocimiento de voz:', available);
  
    if (!available) {
      alert('El reconocimiento de voz no está disponible en este dispositivo.');
    }
  }

  async checkPermissions() {
    const permission = await SpeechRecognition.requestPermissions();
    console.log('Permisos de reconocimiento:', permission);
  }

  ionViewWillEnter() {
    this.checkSpeechRecognition();
    this.checkPermissions();
  }

  async startListening() {
    try {
      this.isListening = true;
  
      const available = await SpeechRecognition.available();
      if (!available) {
        this.text = 'El reconocimiento de voz no está disponible.';
        this.isListening = false;
        return;
      }

      const result = await SpeechRecognition.start({
        language: 'es-ES',
        maxResults: 1,
        prompt: 'Di "foto" para abrir la cámara',
        partialResults: false, 
        popup: true
      });
  
      console.log('Resultado:', result);
  
      if (result.matches && result.matches.length > 0) {
        this.text = result.matches[0];
  
        if (this.text.toLowerCase().includes('foto')) {
          this.openCamera();
        } else {
          alert('No reconocí la palabra "foto". Intenta de nuevo.');
        }
      } else {
        alert('No se detectó ninguna palabra. Intenta nuevamente.');
      }
    } catch (error) {
      console.error('Error en el reconocimiento de voz:', error);
    } finally {
      this.isListening = false;
    }
  }
  
  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
      });

      if (image.webPath) {
        this.photos.unshift(image.webPath);
      }

    } catch (error) {
      console.error('Error al abrir la cámara:', error);
      alert('Hubo un problema al abrir la cámara.');
    }
  }

  async sharePhoto(photoUrl: string) {
    try {
      await Share.share({
        title: 'Compartir Foto',
        text: `Mira esta foto que tomé: ${photoUrl}`,
        url: photoUrl, 
        dialogTitle: 'Compartir vía'
      });
    } catch (error) {
      console.error('Error al compartir la foto:', error);
      alert('No se pudo compartir la foto.');
    }
  }
}
