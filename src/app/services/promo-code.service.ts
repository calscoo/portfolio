import { Injectable } from '@angular/core';
import {PromoCode} from '../objects/promo-code';
import { PromoCodes } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class PromoCodeService {
  failedPromo = false;
  successPromo = false;
  alreadyPromo = false;
  promoInputField = '';
  validPromo: PromoCode = null;
  promoCodes = PromoCodes;

  constructor() { }

  tryPromo() {
    if (!this.isSuccessPromo()) {
      const now: Date = new Date();
      let input, inputPromo;
      let failed = true;
      this.failedPromo = false;
      this.successPromo = false;
      this.alreadyPromo = false;
      input = document.getElementById('promoInput');
      inputPromo = input.value.toUpperCase();
      this.promoCodes.forEach( promoCode => {
        if (inputPromo === promoCode.code
            && !promoCode.used
            && (now.getTime() < promoCode.expiration.getTime())) {
          this.validPromo = promoCode;
          promoCode.used = true;
          failed = false;
          this.promoInputField = ' has-success';
        }
      });
      if (failed) {
        this.failedPromo = true;
      } else {
        this.successPromo = true;
      }
    } else {
      this.failedPromo = false;
      this.alreadyPromo = true;
    }
  }

  getPromo() {
    const passedPromo = this.validPromo;
    this.validPromo = null;
    return passedPromo;
  }

  resetPromoMessage() {
    this.failedPromo = false;
    this.alreadyPromo = false;
  }

  isFailedPromo() {
    return this.failedPromo;
  }

  isSuccessPromo() {
    return this.successPromo;
  }

  getPromoMessages() {
    const messages = [];
    if (this.isFailedPromo()) {
      messages.push('Sorry, that promo code is either invalid or is already in use.');
    }
    if (this.isSuccessPromo()) {
      messages.push('Your promo code has been applied to your total.');
    }
    if (this.alreadyPromo) {
      messages.push('You can only use one promo code at a time!');
    }
    return messages;
  }

  reset() {
    this.failedPromo = false;
    this.successPromo = false;
    this.alreadyPromo = false;
    this.validPromo = null;
    this.promoInputField = '';
    this.promoCodes.forEach( promoCode => {
      promoCode.used = false;
    })
  }

  getInputStatus() {
    if (this.isFailedPromo()) {
      return ' has-danger';
    } else {
      return this.promoInputField;
    }
  }
}
