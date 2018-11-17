import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // get the username out of the route params
      const username = params['username'];
      this.userService
        .getUser(username)
        .subscribe(user => this.user = user);
      // now we can go grab user data from github
    });
  }
  goBack(): void {
    this.location.back();
  }

}
