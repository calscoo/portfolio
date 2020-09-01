/* tslint:disable:max-line-length */
import { Injectable } from '@angular/core';
import { PromoCodeService } from './promo-code.service';
import {CartPrint} from '../objects/cart-print';
import {Prints} from '../constants';

export let CartPrints: CartPrint[] = [];
let total = 0;
let savings = 0;

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(public promoCodeService: PromoCodeService) { }

  clearCart() {
    CartPrints = [];
    total = 0;
    this.promoCodeService.reset();
  }

  getTotal() {
    const promo = this.promoCodeService.getPromo();
    if (promo !== null) {
      savings = (total * promo.discount);
      total -= savings;
    }
    return this.round(total);
  }

  getSavings() {
    return this.round(savings);
  }

  getPercentSaved() {
    const tot = this.getTotal();
    const sav = this.getSavings();
    return Math.round(sav / (tot + sav) * 100);
  }

  addToCart() {
    this.promoCodeService.reset();
    Prints.forEach( print => {
      print.styles.forEach( style => {
        style.variant.forEach( variant => {
          if (variant.selected) {
            CartPrints.push({name: print.name, description: print.description, img: print.img, style: style.styleType, size: variant.size, price: variant.price});
          }
        });
      });
    });
    this.calculateTotal();
  }

  clearSelected() {
    Prints.forEach( print => {
      print.styles.forEach( style => {
        style.variant.forEach( variant => {
          variant.selected = false;
        });
      });
    });
  }

  isCartEmpty() {
    return CartPrints.length === 0;
  }

  cartSize() {
    return CartPrints.length;
  }

  removeItem(print: CartPrint) {
    this.promoCodeService.reset();
    const i = CartPrints.indexOf(print);
    if (i > -1) {
      CartPrints.splice(i, 1);
      this.calculateTotal();
    }
  }

  calculateTotal() {
    total = 0;
    CartPrints.forEach( print => {
      total += print.price;
    });
  }

  round(num: number) {
    return Math.round((num + Number.EPSILON) * 100) / 100;
  }
}
