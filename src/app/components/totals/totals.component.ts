import {Component, OnInit} from '@angular/core';
import { CartPrints } from '../../services/cart.service';
import { CartService } from '../../services/cart.service';
import { PromoCodeService } from '../../services/promo-code.service';

@Component({
  selector: 'app-totals',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {
  gallery = CartPrints;

  constructor(public cartService: CartService, public promoCodeService: PromoCodeService) {}

  ngOnInit() {
      this.promoCodeService.resetPromoMessage();
  }
}
