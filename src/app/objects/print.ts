import {PrintStyle} from './print-style';

export interface Print {
    name: string;
    description: string;
    img: string;
    css: string;
    styles: Array<PrintStyle>
    link: string;
}
