import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { PrintDetailsModalComponent } from './modals/print-details-modal/print-details-modal.component';
import { PrintDetailsModalContent } from './modals/print-details-modal/print-details-modal.component';
import { ProfileComponent} from './profile/profile.component';
import {CheckoutModalComponent} from './modals/checkout-modal/checkout-modal.component';
import {CheckoutModalContent} from './modals/checkout-modal/checkout-modal.component';
import {DisclaimerModalComponent} from './modals/disclaimer-modal/disclaimer-modal.component';
import {DisclaimerModalContent} from './modals/disclaimer-modal/disclaimer-modal.component';
import {TotalsComponent} from './totals/totals.component';
import {ConfirmModalComponent} from './modals/confirm-modal/confirm-modal.component';
import {ConfirmModalContent} from './modals/confirm-modal/confirm-modal.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module,
    ],
    declarations: [
        TotalsComponent,
        ComponentsComponent,
        ProfileComponent,
        PrintDetailsModalComponent,
        PrintDetailsModalContent,
        CheckoutModalComponent,
        CheckoutModalContent,
        DisclaimerModalComponent,
        DisclaimerModalContent,
        ConfirmModalComponent,
        ConfirmModalContent
    ],
    entryComponents: [PrintDetailsModalContent],
    exports: [ComponentsComponent, PrintDetailsModalComponent, CheckoutModalComponent, ConfirmModalComponent]
})
export class ComponentsModule { }
