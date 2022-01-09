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
  avPercent = 0;

  constructor(
    private resultsService: ResultsService,
  ) { }

  ngOnInit() {
    this.resultsService.getAveragePercent().subscribe(percent => this.avPercent = percent);
  }
}
