import { Component } from '@angular/core';
import { Http, Response } from "@angular/http";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private apiUrl = "https://www.stellarbiotechnologies.com/media/press-releases/json?limit=5";
  // limit is number of data items called at once
  // offset is where the call starts from so 0 is beginning, 3 is starting at 4th options etc.

  data: any = {};

  constructor(private http: Http) {
    this.getPressReleases();
  }

  getPressReleases() {
    return this.http.get(this.apiUrl)
      .subscribe((res: Response) => {
        this.data = res.json()
      });
  }
}
