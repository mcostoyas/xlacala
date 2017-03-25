import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class XlacalaService{
  http: any;
  baseUrl: any;

  constructor(http:Http) {
    this.http = http;
    this.baseUrl = 'https://www.blogger.com/feeds/146715605356435429/posts/default?max-results=';
  }

  getPosts(limit) {
    return this.http.get(this.baseUrl + limit).map(res => res.text());
  }
}
