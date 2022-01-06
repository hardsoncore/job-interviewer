import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {

  constructor(
    private location: Location,
  ) { }

  ngOnInit() {
  }

  public backToPreviousPage() {
    this.location.back();
  }
}
