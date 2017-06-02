import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {

  private _url = 'https://api.github.com/users/';

  constructor(private _http: Http) {

  }

  getUserDetail = function (user) {
    return this._http.get(this._url + user)
      .map(res => res.json());
  }

}
