import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  appVersion: string;

  constructor(
    private location: Location,
    private appService: AppService,
    private router: Router,
  ) {
    this.appVersion = appService.appVersion;
   }

  ngOnInit() {
  }

  public backToPreviousPage() {
    // this.location.back();
    this.router.navigate(['tabs/profile']);
  }
}
