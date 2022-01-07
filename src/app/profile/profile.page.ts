import { Component } from '@angular/core';
import { Themes, ThemeType } from '../models/app.model';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage {
  imgLoaded = false;

  constructor(
    private theme: ThemeService,
  ) {}

  get currentTheme(): ThemeType {
    return this.theme.currentTheme;
  }

  set currentTheme(value: ThemeType) {
    this.theme.toggleDarkTheme(value === Themes.dark);
  }

  public onImageLoad(): void {
    // will work without a timeout, but it looks more intresting with a timeout
    setTimeout(() => {
      this.imgLoaded = true;
    }, 1000);
  }
}
