import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public backToPreviousPage() {
    this.router.navigate(['tabs/profile']);
  }
}
