import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {
  username: String = '';
  constructor(private _router: Router) { }

  ngOnInit() {

  }

  onSubmit(value) {
    this.username = value.value.search;
    this._router.navigateByUrl(this.username.toString());
  };

  getUserName() {
    return this.username;
  }


}
