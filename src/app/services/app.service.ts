import { Injectable } from '@angular/core';
import { versionInfo } from 'get-version';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // по изменению версий см. https://semver.org/lang/ru/#spec-item-6  (пункты 6, 7, 8)
  private _appVersion: string = versionInfo?.raw || 'v0.0.0';

  constructor() { }

  public get appVersion(): string {
    return this._appVersion;
  }
}
