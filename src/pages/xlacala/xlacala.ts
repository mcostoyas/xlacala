import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { XlacalaService } from '../../app/services/xlacala.service';
import { DetailsPage } from '../details/details';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'xlacala',
  templateUrl: 'xlacala.html'
})
export class XlacalaPage {
  items: any;
  limit: any;
  constructor(public navCtrl: NavController,
              private xlacalaService: XlacalaService,
              public loadingCtrl: LoadingController) {
    this.getDefaults();
  }

  //presentLoading() {
  //  let loader = this.loadingCtrl.create({
  //    content: "Please wait...",
  //    duration: 3000
  //  });
  //  loader.present();
  //}

  ionViewWillEnter() {
    //console.log('ionViewWillEnter1');
    //console.log('item: ' + this.limit);
    //console.log('storage: ' + localStorage.getItem('limit'));
    if ( this.limit != localStorage.getItem('limit')) {
      //localStorage.setItem('limit', this.limit);
      this.limit = localStorage.getItem('limit');
      this.getPosts(this.limit);
    }
    //console.log('ionViewWillEnter2');
    //console.log('item: ' + this.limit);
    //console.log('storage: ' + localStorage.getItem('limit'));
  }

  getDefaults() {
    if (localStorage.getItem('limit') != null) {
      this.limit = localStorage.getItem('limit');
      //this.limit = 3;
    } else {
      this.limit = 3;
      localStorage.setItem('limit', this.limit);
    }
    this.getPosts(this.limit);
  }

  getPosts(limit) {
    this.xlacalaService.getPosts(limit).subscribe(data => {
      if(data) {
        var parser = new DOMParser();
        var xmlData = parser.parseFromString(data, "application/xml");
        this.items = xmlData.getElementsByTagName('entry');
        //console.log(this.items);
      }
    });
  }

  viewItem(item) {
    this.navCtrl.push(DetailsPage, {
      item:item
    });
  }
}
