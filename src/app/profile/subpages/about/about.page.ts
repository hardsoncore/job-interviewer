import { Component, OnInit } from '@angular/core';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  appVersion: string;

  constructor(
    private appService: AppService,
  ) {
    this.appVersion = this.appService.appVersion;
   }

  ngOnInit() {
  }
}
