import { Injectable } from '@angular/core';
import { versionInfo } from 'get-version';
import { ThemeService } from './theme.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // about version changing logic read -> https://semver.org/lang/ru/#spec-item-6  (пункты 6, 7, 8)
  private _appVersion: string = versionInfo?.raw || 'v0.0.0';

  constructor() { }

  public get appVersion(): string {
    return this._appVersion;
  }
}
