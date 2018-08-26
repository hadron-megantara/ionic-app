import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PinPage } from '../pin/pin';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {

  }

  login(){
      this.navCtrl.push(PinPage)
  }

}
