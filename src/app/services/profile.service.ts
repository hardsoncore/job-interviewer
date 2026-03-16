import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor() { }

  get profile(): Observable<Profile> {
    return of(this._getDefaultProfile());
  }

  private _getDefaultProfile(): Profile {
    const defaultProfile: Profile = {
      username: 'JS_FOX',
      avatarUrl: 'assets/js_fox.jpeg',
    };

    return defaultProfile;
  }
}
