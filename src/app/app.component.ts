import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { UserViewComponent } from './userview/userview.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
