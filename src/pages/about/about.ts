import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  about: string = "xlacala";
  constructor(public navCtrl: NavController) {

  }

}
