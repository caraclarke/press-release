import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReleaseDataService {
  private apiUrl = "https://www.stellarbiotechnologies.com/media/press-releases/json?limit=6";
  // limit is number of data items called at once
  // offset is where the call starts from so 0 is beginning, 3 is starting at 4th options etc.

  constructor(private http: HttpClient) { }

  getPressReleaseData() {
    return this.http.get(this.apiUrl)
  }

}
