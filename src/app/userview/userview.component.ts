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

  userDetail;
  username;
  isLoading: Boolean = true;

  constructor(private _githubService: GithubService, private _searchComponent: SearchComponent, private _route: ActivatedRoute, ) { }

  ngOnInit() {
    this._route.params
      .map(params => {
        params['id'];
        this.username = params['id'];
      })
      .switchMap(id => this._githubService.getUserDetail(id))
      .subscribe(details => {
        this.userDetail = details;
        // console.log(details);
        this.isLoading = false;
        // console.log(this.isLoading);
      },
      null,
      () => {
        this.isLoading = false;
        // console.log(this.isLoading);
      });
  }
}
