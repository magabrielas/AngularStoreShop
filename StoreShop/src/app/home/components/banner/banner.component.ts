import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  images:string[]= [
    'assets/images/banner2.jpg',
    'assets/images/banner3.jpg',
    'assets/images/banner4.jpg'
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.images[1]);
  }

}
