import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../../services/cart.service';
import {PromoCodeService} from '../../../services/promo-code.service';

@Component({
  selector: 'app-checkout-modal-content',
    template: `
        <div class="modal-header">
            <h5 class="modal-title text-center" style="color: #fafafa">Checkout </h5>
            <button type="button" class="close btn" (click)="activeModal.dismiss('Cross click')">
                <span style="color: #fafafa">close</span>
            </button>
        </div>
        <div class="modal-body">
            <app-totals></app-totals>
        </div>
        <div class="modal-footer">
            <div class="left-side">
                <button type="button" class="btn btn-danger btn-round" (click)="cartService.clearCart()">Clear Cart</button>
            </div>
            <div class="divider"></div>
            <div class="right-side">
                <button type="button" class="btn btn-danger btn-round" (click)="purchase()">Purchase</button>
            </div>
        </div>
    `
})
export class CheckoutModalContent implements OnInit {

    @Input() name;

    constructor(public activeModal: NgbActiveModal, public cartService: CartService, public promoCodeService: PromoCodeService) {}

    ngOnInit() {
        this.promoCodeService.resetPromoMessage();
    }

    purchase() {
        console.log('null');
    }

}

@Component({
    selector: 'app-checkout-modal-component',
    templateUrl: './checkout-modal.component.html'
})
export class CheckoutModalComponent {
    @Input() buttonStyle: string;
    @Input() buttonText: string;
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(CheckoutModalContent);
        modalRef.componentInstance.name = 'World';
    }
}


