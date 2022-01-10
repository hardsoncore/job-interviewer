import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from 'src/app/models/profile.model';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.page.html',
  styleUrls: ['./change-profile.page.scss'],
})
export class ChangeProfilePage implements OnInit {
  profile: Profile;
  canSave = false;

  constructor(
    private router: Router,
    private profileService: ProfileService,
  ) { }

  ngOnInit() {
    this.profileService.profile.subscribe(profile => this.profile = profile);
  }

  saveChanges() {
    this.profileService.setProfile(this.profile);
    this.router.navigate(['tabs/profile']);
  }
}
