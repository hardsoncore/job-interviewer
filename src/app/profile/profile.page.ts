import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  imgLoaded = false;

  constructor(
    private router: Router,
  ) {}

  public onImageLoad(): void {
    // will work without a timeout, but it looks more intresting with a timeout
    setTimeout(() => {
      this.imgLoaded = true;
    }, 1000);
  }
}
