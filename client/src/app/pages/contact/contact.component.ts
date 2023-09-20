import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  center: google.maps.LatLngLiteral = {lat: 40, lng: -20};
  zoom = 4;

  constructor() { }

  ngOnInit(): void {

  }

  toggleMap = false;
  toggleCoverMap() {
    this.toggleMap = !this.toggleMap;
  }

}
