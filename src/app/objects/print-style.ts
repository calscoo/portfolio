import {PrintVariant} from './print-variant';

export interface PrintStyle {
    styleType: string;
    variant: Array<PrintVariant>;
    toggled: boolean;
}
