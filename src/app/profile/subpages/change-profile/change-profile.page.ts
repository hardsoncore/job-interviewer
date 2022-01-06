import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.page.html',
  styleUrls: ['./change-profile.page.scss'],
})
export class ChangeProfilePage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  public backToPreviousPage() {
    this.location.back();
  }
}
