import { Component, OnInit, AfterViewInit } from '@angular/core';
import SwiperCore from 'swiper/core';
import Swiper from 'swiper';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit {


  mySwiper!:Swiper;
  constructor() { }

  ngOnInit(): void {
  }
  /* ngAfterViewInit: Cuando los elementos hijos han sido renderizado*/
  ngAfterViewInit(){
    this.mySwiper = new Swiper('.swiper-container');
  }

}
