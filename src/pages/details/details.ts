import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import {YoutubeVideoPlayer} from 'ionic-native';

@Component({
  templateUrl: 'details.html'
})
export class DetailsPage {
  item: any;
  films: any;
  imgs: any;
  img320: any;
  txt: any;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.item = params.get('item');
    this.img320 = this.item.children[11].attributes[1].nodeValue.replace("s72-c","s320");
    this.txt = this.item.children[4].childNodes[0].nodeValue;
    var parser = new DOMParser();
    var htmlData = parser.parseFromString(this.txt, "text/html");
    this.imgs = htmlData.getElementsByTagName('a');
    //this.films = htmlData.getElementsByTagName('iframe');
    //console.log(this.films);
    //console.log(this.imgs);

    //this.txt = this.txt.replace(/<br( \/|\/|)>/gm, '\r\n').replace(/<(?:.|\n)*?>/gm, '').replace('&nbsp;','');
    this.txt = this.txt.replace(/<br( \/|\/|)>/gm, '\r\n').replace(/<(?:.|\n)*?>/gm, '').split("&nbsp;").join("");
    //console.log(this.img320);
    //console.log(this.txt);


  }

}
