import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {

  constructor(private apiService: ApiService, private route: Router) { }

  data;
  photos = [];

  collumnSize = 6;

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getApi().subscribe((data) => {
      console.log(data);
      this.data = data;
      this.data.map(photo => {
        this.photos.push(photo);
      });
    });
  }

  onGoToDetail(photo){
      console.log(photo);
      this.apiService.photoDetail = photo;
      this.route.navigate(['detail']);
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
      this.getData();
    }, 500);
  }

  changeClass() {
    if (this.collumnSize === 6) {
      this.collumnSize = 12;
    } else {
      this.collumnSize = 6;
    }
  }

}
