import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ResultsService } from 'src/app/services/results.service';
import { Results } from 'src/app/models/question.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  results: Results[];
  avPercent: number;

  constructor(
    private router: Router,
    private resultsService: ResultsService,
  ) { }

  ngOnInit() {
    this.avPercent = this.resultsService.getAveragePercent();
  }

  public backToPreviousPage() {
    this.router.navigate(['tabs/profile']);
  }
}
