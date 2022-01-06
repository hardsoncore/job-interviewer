import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  public backToPreviousPage() {
    this.location.back();
  }
}
