import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {

  private _url;
  private _feedUrl;
  private _subs;
  private _repos;
  private _followers;
  private _following;
  private _starred_url;

  constructor(private _http: Http) {

  }

  getUserDetail = function (userName) {
    this._url = 'https://api.github.com/users/' + userName;
    // this._repos = this._url + '/repos';
    // this._followers = this._url + '/followers';
    // this._following = this._url + '/following';
    // this._starred_url = this._url + '/starred';

    // console.log(this._url, this._repos, this._followers, this._following, this._starred_url);

    const user = this._http.get(this._url)
      .map(res => res.json());

    this._feedUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://github.com/' + userName + '.atom';

    const feed = this._http.get(this._feedUrl)
      .map(res => res.json());

    this._subs = this._url + '/subscriptions';

    const subscriptions = this._http.get(this._subs)
      .map(res => res.json());
    // const repos = this._http.get(this._repos)
    //   .map(res => res.json());

    // const followers = this._http.get(this._followers)
    //   .map(res => res.json());

    // const following = this._http.get(this._following)
    //   .map(res => res.json());

    // const stars = this._http.get(this._starred_url)
    //   .map(res => res.json());

    return Observable
      .forkJoin(user, feed, subscriptions)
      .map(joined => new Object({
        userDetail: joined[0],
        feed: joined[1],
        subs: joined[2],
        // repos: joined[1],
        // followers: joined[2],
        // following: joined[3],
        // stars: joined[4],
      }));
  };

}
