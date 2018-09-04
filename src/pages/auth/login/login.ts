import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'
import { AlertController, NavController, FormControl, FormGroup, Validators } from 'ionic-angular';

import { PinPage } from '../pin/pin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public alertCtrl: AlertController) {

  }

  async login(fc : FromControl){
      const alert = await this.alertCtrl.create({
          header: 'Error',
          subHeader: 'Subtitle',
          message: 'Email / Password salah',
          buttons: ['OK']
      });

      await alert.present();

      console.log(fc.value);

      // this.navCtrl.push(PinPage);
  }

}
