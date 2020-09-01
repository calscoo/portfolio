import {Component, Input} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-confirm-modal-content',
  template: `
        <div class="modal-header">
            <h5 class="modal-title text-center" style="color: #fafafa">Confirm</h5>
            <button type="button" class="close btn" (click)="activeModal.dismiss('Cross click')">
                <span style="color: #fafafa">close</span>
            </button>
        </div>
        <div class="modal-body">
          <br>
          <h6>Would you like to continue to checkout?</h6>
        </div>
        <div class="modal-footer">
            <div class="left-side" (click)="activeModal.close('Close click')">
                <button type="button" class="btn btn-danger btn-round">No Thanks</button>
            </div>
            <div class="divider"></div>
            <div class="right-side" (click)="activeModal.close('Close click')">
              <app-checkout-modal-component [buttonStyle]="detailsButtonStyle" [buttonText]="cartService.cartSize()"></app-checkout-modal-component>
            </div>
        </div>
    `
})
export class ConfirmModalContent {
  public detailsButtonStyle = 'btn btn-danger btn-round';
  @Input() name;

  constructor(public activeModal: NgbActiveModal, public cartService: CartService) {}

}

@Component({
  selector: 'app-confirm-modal-component',
  templateUrl: './confirm-modal.component.html'
})
export class ConfirmModalComponent {
  @Input() buttonStyle: string;
  @Input() buttonText: string;
  constructor(private modalService: NgbModal) {}
  open() {
    const modalRef = this.modalService.open(ConfirmModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
