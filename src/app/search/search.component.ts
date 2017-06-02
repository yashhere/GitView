import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  // styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username: String = '';
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value) {
    console.log(value);
    this.username = value.value.search;
    console.log(this.username);
  }
}
