import { Component, OnInit } from '@angular/core';
import { SocialService } from '../social.service';
import {Router, Params } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  recipeTitle: string;
  recipeInfo: string;
  social$: SocialService;
  route$: Router;

  constructor(
    _social: SocialService,
    _route: Router,
  ) {
    this.social$ = _social;
    this.route$= _route;
   }

  ngOnInit() {
  }

}
