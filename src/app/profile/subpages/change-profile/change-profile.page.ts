import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.page.html',
  styleUrls: ['./change-profile.page.scss'],
})
export class ChangeProfilePage implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public backToPreviousPage() {
    this.router.navigate(['tabs/profile']);
  }
}
