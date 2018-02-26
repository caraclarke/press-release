import { Component } from '@angular/core';
import { Http, Response } from "@angular/http";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private apiUrl = "https://www.stellarbiotechnologies.com/media/press-releases/json";
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
