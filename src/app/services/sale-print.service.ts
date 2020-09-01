import { Injectable } from '@angular/core';
import { Print } from '../objects/print';

let selectedPrint: Print;

@Injectable({
  providedIn: 'root'
})
export class SalePrintService {

  constructor() { }

  selectPrint(print: Print) {
    selectedPrint = print;
  }

  getSelectedPrint() {
    return selectedPrint;
  }

  openCheckout() {
    window.open(
        this.getSelectedPrint().link,
        '_blank'
    );
  }
}
