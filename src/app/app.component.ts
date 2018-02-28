import { Component, ElementRef } from '@angular/core';
import { Http, Response } from "@angular/http";
import { DatePipe } from '@angular/common';
import { ReleaseDataService } from './release-data.service';
import { PressRelease } from './press-release';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  data: Array<PressRelease> = [];
  currentOffset: number = 0;

  constructor(private dataService: ReleaseDataService, public el: ElementRef) {
    this.getPressReleases();
  }

  getPressReleases() {
    this.dataService.getPressReleaseData( this.currentOffset )
      .subscribe( release => {
        this.currentOffset += 11;
        this.data.push(...release.news);
      });
  }

  onScroll () {
    this.getPressReleases();
  }
}
