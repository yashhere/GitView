import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { SearchComponent } from '../search/search.component';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css'],
  providers: [GithubService, SearchComponent],
})

export class UserViewComponent implements OnInit {

  userData;
  username;
  isLoading: Boolean = true;

  constructor(private _githubService: GithubService, private _searchComponent: SearchComponent, private _route: ActivatedRoute, ) {
    this.username = this.getUserName()['source']['value']['id'];
    console.log(this.username);
   }

  ngOnInit() {
    this.getUserName()
      .switchMap(id => this._githubService.getUserDetail(id))
      .subscribe(userData => {
        this.userData = userData;
        console.log(this.userData);
        this.isLoading = false;
      },
      null,
      () => {
        this.isLoading = false;
      });
  }

  getUserName() {
    return this._route.params
      .map(params => params['id']);
  }
}
