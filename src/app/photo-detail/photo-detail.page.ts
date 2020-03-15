import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.page.html',
  styleUrls: ['./photo-detail.page.scss'],
})
export class PhotoDetailPage implements OnInit {

  photoDetail;
  createdAt: string;
  test = 'kjbjkbk';

  constructor(private apiService: ApiService, private location : Location) { }

  ngOnInit() {
      this.photoDetail = this.apiService.photoDetail;
      console.log('detail ' + this.photoDetail.id);
      this.createdAt = this.photoDetail.created_at;
      this.createdAt = this.createdAt.substr(0, 10);
  }

  goBack() {
    this.location.back();
  }

}


