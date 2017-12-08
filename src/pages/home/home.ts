import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  status: any = "on";

  constructor(
    public navCtrl: NavController, 
    private flashlight: Flashlight,
    private nativeAudio: NativeAudio,
  ) {
    this.nativeAudio.preloadSimple('play', './assets/sound/switch.mp3').then(data => {
      alert(data);
    }, error => {
      alert("shoxaerr"+error);
    });
  }


  play() {
    this.nativeAudio.play("play").then((res) => {
        alert("shoxabbos"+res);
        console.log(res);
      }, (err) => {
        alert("shoxabboserr"+err);
        console.log(err);
      });
  }

  switchOn() {
    this.flashlight.switchOn();
    this.status = 'off';
  }

  switchOff() {
    this.flashlight.switchOff();
    this.status = 'on';
  }

  toggle() {
    if (this.status == 'on') {
      this.status = 'off';
    } else {
      this.status = 'on';
    }

    this.flashlight.toggle();
  }

}
