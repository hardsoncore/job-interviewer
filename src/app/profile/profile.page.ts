import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Themes, ThemeType } from '../models/app.model';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';
import { ThemeService } from '../services/theme.service';
import { ResultsService } from '../services/results.service';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  imgLoaded = false;
  profile: Profile;
  avPercent: number;
  appVersion: string;

  constructor(
    private theme: ThemeService,
    private alertController: AlertController,
    private profileService: ProfileService,
    private resultsService: ResultsService,
    private appService: AppService
  ) {
    this.appVersion = this.appService.appVersion;
  }

  get currentTheme(): ThemeType {
    return this.theme.currentTheme;
  }

  set currentTheme(value: ThemeType) {
    this.theme.toggleDarkTheme(value === Themes.dark);
  }

  ngOnInit(): void {
    this.profileService.profile.subscribe(profile => this.profile = profile);
    this.resultsService.getAveragePercent().subscribe(percent => this.avPercent = percent);
  }

  public onImageLoad(): void {
    // will work without a timeout, but it looks more intresting with a timeout
    setTimeout(() => {
      this.imgLoaded = true;
    }, 1000);
  }

  public async clearStorage() {
    const usersChoise = await this._presentAlert();
    if (usersChoise === 'ok') {
      localStorage.clear();
      location.reload();
    }
  }

  private async _presentAlert(): Promise<string> {
    const alert = await this.alertController.create({
      header: 'Clear application data?',
      message: 'All your progress and settings will be lost.',
      buttons: [
        'Cancel',
        {
          text: 'Clear',
          role: 'ok'
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    return role;
  }
}
