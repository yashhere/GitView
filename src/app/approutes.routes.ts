import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserViewComponent } from './userview/userview.component';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: ':id', component: UserViewComponent },
  { path: '**', component: SearchComponent }
];
