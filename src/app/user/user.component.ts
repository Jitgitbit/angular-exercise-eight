import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {               // params is an Observable !   Angular likes Observables
      this.id = +params.id;
    });                                                            // here @ngular unsubscribes for you behind the scenes !
  }

  onActivate(){
    this.userService.activatedEmitter.next(true);
  }
}
