import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.userService.testApi().subscribe(res => {
      console.log(111111111, res);
    });
  }

}
