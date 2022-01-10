import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Themes, ThemeType } from '../models/app.model';
import { Profile } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss']
})
export class ProfilePage implements OnInit {
  imgLoaded = false;
  profile: Profile;

  constructor(
    private theme: ThemeService,
    private alertController: AlertController,
    private profileService: ProfileService,
  ) {}

  get currentTheme(): ThemeType {
    return this.theme.currentTheme;
  }

  set currentTheme(value: ThemeType) {
    this.theme.toggleDarkTheme(value === Themes.dark);
  }

  ngOnInit(): void {
    this.profileService.profile.subscribe(profile => this.profile = profile);
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
      header: 'Сбросить данные приложения?',
      message: 'Весь ваш прогресс и настройки будут утеряны.',
      buttons: [
        'Не нужно',
        {
          text: 'Сбросить',
          role: 'ok'
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    return role;
  }
}
