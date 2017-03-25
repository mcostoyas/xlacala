import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { XlacalaService } from '../../app/services/xlacala.service';
import { XlacalaPage } from '../xlacala/xlacala';

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  limit: any;
  constructor(public navCtrl: NavController) { //, private xlacalaService: XlacalaService) {
    this.getDefaults();
  }

  getDefaults() {
    if (localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
    } else {
      this.limit = 3;
    }
  }

  setDefaults() {
    //console.log('setting1:' + this.limit);
    localStorage.setItem('limit', this.limit);
    //console.log('setting2:' + this.limit);
    this.navCtrl.parent.select(0);
    //this.navCtrl.push(XlacalaPage);
  }
}
