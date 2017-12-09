import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  status: boolean = false;

  constructor(
    public navCtrl: NavController, 
    private flashlight: Flashlight,
  ) {
    
  }

  switchOn() {
    this.flashlight.switchOn();
    this.status = false;
  }

  switchOff() {
    this.flashlight.switchOff();
    this.status = false;
  }

  toggle() {
    if (this.status == true) {
      this.status = false;
    } else {
      this.status = true;
    }

    this.flashlight.toggle();
  }

}
