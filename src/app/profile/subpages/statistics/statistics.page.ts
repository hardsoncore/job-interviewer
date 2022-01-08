import { Component, OnInit } from '@angular/core';

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
    private resultsService: ResultsService,
  ) { }

  ngOnInit() {
    this.avPercent = this.resultsService.getAveragePercent();
  }
}
