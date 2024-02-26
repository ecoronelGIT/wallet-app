import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss'],
  providers: [NgbCarouselConfig]
})
export class CardCarouselComponent {
  cards = [
    { amount: '$542.25', lastDigits: '4587', type: 'MASTERCARD', backgroundColor: '#4B4F5B' },
    { amount: '$125.25', lastDigits: '1234', type: 'VISA' , backgroundColor: '#407288' },
    { amount: '$50.25', lastDigits: '9483', type: 'MASTERCARD', backgroundColor: 'blue' },
  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 0;
    config.wrap = true;
    config.keyboard = false;
  }
}
