import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SuiModule } from 'ng2-semantic-ui';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserViewComponent } from './userview/userview.component';
import { appRoutes } from './approutes.routes';
import { RepoComponent } from './repo/repo.component';
import { FollowerComponent } from './follower/follower.component';
import { FollowingComponent } from './following/following.component';
import { StarComponent } from './star/star.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserViewComponent,
    RepoComponent,
    FollowerComponent,
    FollowingComponent,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SuiModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
