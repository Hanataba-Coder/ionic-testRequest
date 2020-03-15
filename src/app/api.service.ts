import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  photoDetail;
  url = 'https://api.unsplash.com/photos/random?count=30&client_id=a3aQ_vA1ZKb9uvU6KjolQTCZjMv9e77k5E3wT6iy1CU';

  constructor(private httpClient: HttpClient) { }

  getApi() {
    return this.httpClient.get(this.url);
  }


}
