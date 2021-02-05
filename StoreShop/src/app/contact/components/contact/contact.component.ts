import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  image:String = './assets/images/contact-banner.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
