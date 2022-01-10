import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private _profile: BehaviorSubject<Profile> = new BehaviorSubject({} as Profile);

  constructor() {
    this._initializeProfile();
  }

  get profile(): Observable<Profile> {
    return this._profile.asObservable();
  }
  public setProfile(profile: Profile): void {
    this._profile.next(profile);
    localStorage.setItem('profile', JSON.stringify(profile));
  }

  private _initializeProfile(): void {
    let profile = JSON.parse(localStorage.getItem('profile'));
    if (!profile) {
      profile = this._getDefaultProfile();
      this.setProfile(profile);
    }

    this._profile.next(profile);
  }

  private _getDefaultProfile(): Profile {
    const defaultProfile: Profile = {
      username: 'Guest',
      avatarUrl: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'
    };

    return defaultProfile;
  }
}
