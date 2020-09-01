/* tslint:disable:max-line-length */
import {Component, HostListener, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../../services/cart.service';
import { SalePrintService } from '../../../services/sale-print.service';
import { PrintStyle } from '../../../objects/print-style';

@Component({
    selector: 'app-print-details-modal-content',
    template: `
        <div (contextmenu)="onRightClick()">
            <div class="modal-header">
                <h6 class="modal-title text-center" style="color: #fafafa; font-size: 22px">{{this.salePrintService.getSelectedPrint().name}}</h6>
                <button type="button" class="close btn" (click)="activeModal.dismiss('Cross click')">
                    <span style="color: #fafafa">close</span>
                </button>
            </div>
            <div class="modal-body">
                <img src="{{this.salePrintService.getSelectedPrint().img}}" class="img-thumbnail img-responsive" alt="Rounded Image">
<!--                <p>{{this.salePrintService.getSelectedPrint().description}}</p>-->
<!--                <div *ngFor="let style of this.salePrintService.getSelectedPrint().styles">-->
<!--                    <div class="right-side">-->
<!--                        <button class="btn btn-danger btn-round btn-sm" (click)="toggleStyle(style)">{{style.styleType}}-->
<!--                            <i class="fa fa-arrow-{{getIconDirectionViaStyle(style)}}"></i>-->
<!--                        </button>-->
<!--                    </div>-->
<!--                    <br>-->
<!--                    <div *ngIf="style.toggled">-->
<!--                        <div *ngFor="let variant of style.variant">-->
<!--                            <div class="form-check">-->
<!--                                <label class="form-check-label">-->
<!--                                    <input class="form-check-input" type="checkbox" value="" [(ngModel)]="variant.selected">-->
<!--                                    {{variant.size}}-->
<!--                                    <span class="form-check-sign"></span>-->
<!--                                </label>-->
<!--                                <a class="print-price" style="position: absolute; right: 0;">\${{variant.price}}</a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
            </div>
            <div class="modal-footer">
<!--                <div (click)="activeModal.close('Close click')" class="left-side">-->
<!--                    <app-checkout-modal-component [buttonStyle]="detailsButtonStyle" [buttonText]="cartService.cartSize()"></app-checkout-modal-component>-->
<!--                </div>-->
                <div class="left-side">
                    <app-disclaimer-modal-component></app-disclaimer-modal-component>
                </div>
                <div class="divider"></div>
                <div class="right-side">
                    <button (click)="openCheckout()" type="button" class="btn btn-danger btn-round">Purchase</button>
<!--                    <app-confirm-modal-component (click)="cartService.addToCart(); activeModal.close('Close click')"></app-confirm-modal-component>-->
                </div>
            </div>
        </div>
    `
})
export class PrintDetailsModalContent implements OnInit {
    public detailsButtonStyle = 'btn btn-danger btn-round';
    @Input() name;

    ngOnInit() {
        this.cartService.clearSelected();
    }

    @HostListener('contextmenu', ['$event'])
    onRightClick() {
        return false;
    }

    constructor(public activeModal: NgbActiveModal, public cartService: CartService, public salePrintService: SalePrintService) {}

    toggleStyle(style: PrintStyle) {
        style.toggled = style.toggled !== true;
    }

    getIconDirectionViaStyle(style: PrintStyle) {
        let direction = 'down';
        if (style.toggled) {
            direction = 'up';
        }
        return direction;
    }

    openCheckout() {
        window.open(
            this.salePrintService.getSelectedPrint().link,
            '_blank'
        );
    }
}

@Component({
    selector: 'app-print-details-modal-component',
    templateUrl: './print-details-modal.component.html'
})
export class PrintDetailsModalComponent {
    constructor(private modalService: NgbModal) {}
    open() {
        const modalRef = this.modalService.open(PrintDetailsModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
