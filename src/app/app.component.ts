import { Component, ElementRef } from '@angular/core';
import { Http, Response } from "@angular/http";
import { DatePipe } from '@angular/common';
import { ReleaseDataService } from './release-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  data: any = [];
  currentPage: number = 1;

  constructor(private dataService: ReleaseDataService, public el: ElementRef) {
    this.getPressReleases();
  }

  getPressReleases() {
    this.dataService.getPressReleaseData()
      .subscribe(release => this.data.push(...release.news) );
  }
}
