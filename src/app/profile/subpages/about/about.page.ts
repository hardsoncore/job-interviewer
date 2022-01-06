import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppService } from 'src/app/services/app.service';

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
  ) {
    this.appVersion = appService.appVersion;
   }

  ngOnInit() {
  }

  public backToPreviousPage() {
    this.location.back();
  }
}
