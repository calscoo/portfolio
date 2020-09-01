/* tslint:disable:max-line-length */
import {Component, HostListener, Input, OnInit} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { SalePrintService } from '../../../services/sale-print.service';
import {Email} from '../../../constants';

@Component({
  selector: 'app-disclaimer-modal-content',
  template: `
    <div (contextmenu)="onRightClick()">
      <div class="modal-header">
        <h6 class="modal-title text-center" style="color: #fafafa; font-size: 22px">Disclaimer</h6>
        <button type="button" class="close btn" (click)="activeModal.dismiss('Cross click')">
          <span style="color: #fafafa">close</span>
        </button>
      </div>
      <div class="modal-body">
        <p>The checkout only supports one variation per transaction. For custom custom orders, such as variants and sizes not listed, or if you'd like to purchase multiple variations in one transaction please email me your detailed inquiry at<br><span (click)="copyText(email)" style="color: #ff0000; cursor: pointer;">{{email}}</span></p>
        <p *ngIf="copied">*email copied to clipboard*</p>
        <p *ngIf="!copied" (click)="copyText(email)" style="cursor: pointer;">*click to copy email*</p>
        <br>
        <p>The selected aspect ratio of the print won't always match the original art due to the wide selection of print materials and size. The most noteworthy discrepancy being that standard matte prints aren't available in 1:1 or 2:1 ratios. The final print will be tastefully cropped to the desired aspect ratio.</p>
      </div>
      <div class="modal-footer">
        <div class="left-side" (click)="activeModal.close('Close click')">
          <button type="button" class="btn btn-danger btn-round">Close</button>
        </div>
        <div class="divider"></div>
        <div class="right-side">
          <button (click)="openCheckout()" type="button" class="btn btn-danger btn-round">Purchase</button>
        </div>
      </div>
    </div>
  `
})
export class DisclaimerModalContent implements OnInit {
  @Input() name;
  email = Email;
  copied = false;

  ngOnInit() {}

  @HostListener('contextmenu', ['$event'])
  onRightClick() {
    return false;
  }

  constructor(public activeModal: NgbActiveModal, public salePrintService: SalePrintService) {}

  openCheckout() {
    window.open(
        this.salePrintService.getSelectedPrint().link,
        '_blank'
    );
  }

  copyText(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copied = true;
  }
}

@Component({
  selector: 'app-disclaimer-modal-component',
  templateUrl: './disclaimer-modal.component.html'
})
export class DisclaimerModalComponent {
  constructor(private modalService: NgbModal) {}
  open() {
    const modalRef = this.modalService.open(DisclaimerModalContent);
    modalRef.componentInstance.name = 'World';
  }
}
