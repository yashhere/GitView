import { Component, OnInit } from '@angular/core';
import { NG_ASYNC_VALIDATORS, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, RouterModule, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { GithubService } from '../github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [GithubService],
})

export class SearchComponent implements OnInit {
  username: FormGroup;
  user;
  constructor(private _router: Router, private _fb: FormBuilder, private _githubService: GithubService) { }

  ngOnInit() {

    this.username = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  // onSubmit(value) {
  //   this.username = value.value.search;
  //
  // };

  onSubmit() {
    // console.log(this.username.value.name, this.username.valid);

    let errorStatus;
    this._githubService.getUser(this.username.value.name)
      .subscribe(res => {
        // this.user = res.json();
        // console.log(this.user);
      }, (err: any) => {
        if (err.status === 404) {
          errorStatus = err.status;
          this.username.get('name').setErrors({
            invalidUser: true,
          });
        }
      }
    );

    if (errorStatus !== 404) {
      this._router.navigateByUrl(this.username.get('name').value.toString());
    }


    // if (this.user.hasProperty('message')) {
    //   console.log('NOT AN USER.');
    // }
  }
}
