import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {

  constructor(
    private router: Router,
  ) {}

  public goToPage(pageName: string) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        canGoBack: true,
      }
    };

    this.router.navigate([`tabs/profile/${pageName}`], navigationExtras);
  }
}
