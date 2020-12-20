/* tslint:disable:max-line-length */
import {PromoCode} from './objects/promo-code';
import {Print} from './objects/print';
import {PrintVariant} from './objects/print-variant';
import {PrintStyle} from './objects/print-style';

// email
export const Email = 'calebolson.photography@gmail.com';

// variants
const standardVariants: PrintVariant[] = [
    {size: '4" x 6" Print with 5" x 7" Matte', price: 34.99, selected: false},
    {size: '5" x 7" Print with 8" x 10" Matte', price: 39.99, selected: false},
    {size: '8" x 10" Print with 11" x 14" Matte', price: 49.99, selected: false},
    {size: '11" x 14" Print with 16" x 20" Matte', price: 59.99, selected: false},
];
const rectangleMetalVariants: PrintVariant[] = [
    {size: '5" x 7" Metal', price: 44.99, selected: false},
    {size: '8" x 10" Metal', price: 49.99, selected: false},
    {size: '11" x 14" Metal', price: 64.99, selected: false},
    {size: '16" x 20" Metal', price: 99.99, selected: false},
];
const squareMetalVariants: PrintVariant[] = [
    {size: '6" x 6" Metal', price: 39.99, selected: false},
    {size: '10" x 10" Metal', price: 59.99, selected: false},
    {size: '16" x 16" Metal', price: 89.99, selected: false},
    {size: '20" x 20" Metal', price: 129.99, selected: false},
];
const wideMetalVariants: PrintVariant[] = [
    {size: '10" x 20" Metal', price: 74.99, selected: false},
    {size: '16" x 32" Metal', price: 169.99, selected: false},
    {size: '20" x 40" Metal', price: 259.99, selected: false},
];
const rectangleCanvasVariants: PrintVariant[] = [
    {size: '5" x 7" Canvas', price: 54.99, selected: false},
    {size: '8" x 10" Canvas', price: 64.99, selected: false},
    {size: '11" x 14" Canvas', price: 79.99, selected: false},
    {size: '16" x 23" Canvas', price: 129.99, selected: false},
];
const squareCanvasVariants: PrintVariant[] = [
    {size: '6" x 6" Canvas', price: 54.99, selected: false},
    {size: '10" x 10" Canvas', price: 74.99, selected: false},
    {size: '14" x 14" Canvas', price: 94.99, selected: false},
    {size: '18" x 18" Canvas', price: 119.99, selected: false},
];
const wideCanvasVariants: PrintVariant[] = [
    {size: '6" x 12" Canvas', price: 59.99, selected: false},
    {size: '10" x 20" Canvas', price: 89.99, selected: false},
    {size: '15" x 30" Canvas', price: 124.99, selected: false},
    {size: '20" x 40" Canvas', price: 189.99, selected: false},
];

// styles
const rectangleStyles: PrintStyle[] = [
    {styleType: 'Matte', variant: JSON.parse(JSON.stringify(standardVariants)), toggled: true},
    {styleType: 'Metal', variant: JSON.parse(JSON.stringify(rectangleMetalVariants)), toggled: false},
    {styleType: 'Canvas', variant: JSON.parse(JSON.stringify(rectangleCanvasVariants)), toggled: false},
];
const squareStyles: PrintStyle[] = [
    {styleType: 'Matte', variant: JSON.parse(JSON.stringify(standardVariants)), toggled: true}, // still uses rectangles
    {styleType: 'Metal', variant: JSON.parse(JSON.stringify(squareMetalVariants)), toggled: false},
    {styleType: 'Canvas', variant: JSON.parse(JSON.stringify(squareCanvasVariants)), toggled: false},
];
const wideStyles: PrintStyle[] = [
    {styleType: 'Matte', variant: JSON.parse(JSON.stringify(standardVariants)), toggled: true}, // still uses rectangles
    {styleType: 'Metal', variant: JSON.parse(JSON.stringify(wideMetalVariants)), toggled: false},
    {styleType: 'Canvas', variant: JSON.parse(JSON.stringify(wideCanvasVariants)), toggled: false},
];

// promo codes
export const PromoCodes: PromoCode[] = [
    {code: 'OLIVER', discount: .2, expiration: new Date('2021-05-31'), used: false},
    {code: 'CRICKET', discount: .1, expiration: new Date('2021-05-31'), used: false},
    {code: 'KIDDO', discount: .3, expiration: new Date('2019-05-31'), used: false},
];

// prints
export const Prints: Print[] = [
    {name: 'Fall Commencement', description: 'this is a test description', img: 'assets/img/prints/33.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(squareStyles)), link: 'https://checkout.square.site/buy/2KXA7SPQ37EZY6FAAC7ZFB3T'},
    {name: 'Grape Way', description: 'this is a test description', img: 'assets/img/prints/9.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/5QEEHXOU2CQ6ENYGSDXFK4BG'},
    {name: 'Lodged', description: 'this is a test description', img: 'assets/img/prints/2.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/VDO4TAYCOMY3NAOXG5XBHWLO'},
    {name: 'Pastelwell', description: 'this is a test description', img: 'assets/img/prints/10.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(squareStyles)), link: 'https://checkout.square.site/buy/DJJ5S5OTDAUX7JIJMO2BJLD7'},
    {name: 'Sky Fur', description: 'this is a test description', img: 'assets/img/prints/4.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(squareStyles)), link: 'https://checkout.square.site/buy/YCMIHGCF7JJHZ5IMFP4TIB2V'},
    {name: 'Masked', description: 'this is a test description', img: 'assets/img/prints/6.jpg', css: 'column-xs-12', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/YK7N7ZBMQ63RP52YFU2DULXG'},
    {name: 'Bloom', description: 'this is a test description', img: 'assets/img/prints/34.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/2VYJS2GTX2KXC7X4OBURPJVS'},
    {name: 'Core', description: 'this is a test description', img: 'assets/img/prints/36.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/EX4J4TDIOFUWHSQTB4MWV2TG'},
    {name: 'A. Glenn Hill', description: 'this is a test description', img: 'assets/img/prints/3.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/SCPTEQTVG44MJHERQ2PZK67R'},
    {name: 'Watercolor', description: 'this is a test description', img: 'assets/img/prints/35.jpg', css: 'column-xs-12', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/ULOUQLU4ML24BPRWEJZICXWS'},
    {name: 'Emerald', description: 'this is a test description', img: 'assets/img/prints/5.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(squareStyles)), link: 'https://checkout.square.site/buy/MRGVIIAMWMLTEB64CD4WW2YV'},
    {name: 'IDS', description: 'this is a test description', img: 'assets/img/prints/17.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(wideStyles)), link: 'https://checkout.square.site/buy/5H6QXCORJZTXJOFSSK3SNJK3'},
    {name: 'Atrium', description: 'this is a test description', img: 'assets/img/prints/12.jpg', css: 'column-xs-12', styles: JSON.parse(JSON.stringify(wideStyles)), link: 'https://checkout.square.site/buy/4B42XPDMLWXNJ4MRMKS64Q6A'},
    {name: 'Marriott', description: 'this is a test description', img: 'assets/img/prints/13.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/56DR3JTJEGOSPQFFCS3NMC56'},
    {name: 'First', description: 'this is a test description', img: 'assets/img/prints/14.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/7BEKMXKQTR7LG6BW2N5QXYYQ'},
    {name: 'Neon', description: 'this is a test description', img: 'assets/img/prints/15.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/TC6HBANA5LBDNLYIYVKJ7LTG'},
    {name: 'DAM', description: 'this is a test description', img: 'assets/img/prints/22.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/RC7HBT5YXO65UVZDDWMTIQ45'},
    {name: 'WoodGrain', description: 'this is a test description', img: 'assets/img/prints/23.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/KWWYPGCWFAA2KJJPTWKVLL4Y'},
    {name: 'Sulfur', description: 'this is a test description', img: 'assets/img/prints/18.jpg', css: 'column-xs-12', styles: JSON.parse(JSON.stringify(wideStyles)), link: 'https://checkout.square.site/buy/2X5PJY6RQRXXXG6ONJYMMEZE'},
    {name: 'Negative', description: 'this is a test description', img: 'assets/img/prints/19.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/AORKT6QS5CB2HVLLTALIF3DZ'},
    {name: 'Bobcat', description: 'this is a test description', img: 'assets/img/prints/7.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/NXQEPYYSHBS2VC3B232QSZ2E'},
    {name: 'Greenhouse', description: 'this is a test description', img: 'assets/img/prints/21.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/Q6OEZDNEQEQNSVAZOOPIKTFB'},
    {name: 'AES', description: 'this is a test description', img: 'assets/img/prints/24.jpg', css: 'column-xs-12', styles: JSON.parse(JSON.stringify(wideStyles)), link: 'https://checkout.square.site/buy/NBVTU5ULXO46B27VGV5BFBGQ'},
    {name: 'Mary', description: 'this is a test description', img: 'assets/img/prints/16.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(squareStyles)), link: 'https://checkout.square.site/buy/ZCBZKUKXXRPNFS3SWA2KL5E3'},
    {name: 'Frost', description: 'this is a test description', img: 'assets/img/prints/11.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(squareStyles)), link: 'https://checkout.square.site/buy/ND7PMPIBAHHUHRSCYF6ZEEEZ'},
    {name: 'Delta', description: 'this is a test description', img: 'assets/img/prints/20.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/W3KGWTQLWWOEQRZCBG4345TU'},
    {name: 'Sundog', description: 'this is a test description', img: 'assets/img/prints/1.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/73JYQMI55E22K7NPVYB3BKPJ'},
    {name: 'Balcony', description: 'this is a test description', img: 'assets/img/prints/8.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/WQNAJDRVYCQUDZLBLRF5YGNT'},
    {name: 'Fog', description: 'this is a test description', img: 'assets/img/prints/28.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(squareStyles)), link: 'https://checkout.square.site/buy/U52FJK67K3HPWV3FSYWFX2VZ'},
    {name: 'Streamline', description: 'this is a test description', img: 'assets/img/prints/29.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(squareStyles)), link: 'https://checkout.square.site/buy/TLCRYWWGALDN264FIJM2VBXX'},
    {name: 'Seattle', description: 'this is a test description', img: 'assets/img/prints/30.jpg', css: 'column-xs-12', styles: JSON.parse(JSON.stringify(wideStyles)), link: 'https://checkout.square.site/buy/NTXRF7VAB7X5RX5OOL3PGNKE'},
    {name: 'Orion', description: 'this is a test description', img: 'assets/img/prints/31.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/O6XZQW3B2UGF6D4RMUKPR2A4'},
    {name: 'Pillars', description: 'this is a test description', img: 'assets/img/prints/32.jpg', css: 'column-xs-12 column-md-6', styles: JSON.parse(JSON.stringify(squareStyles)), link: 'https://checkout.square.site/buy/WUTAG56FGFXXZMJRPA7PBKUQ'},
    {name: 'RBC', description: 'this is a test description', img: 'assets/img/prints/26.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/27RYBNBWR23HT3A25EM5T55H'},
    {name: 'Space Needle', description: 'this is a test description', img: 'assets/img/prints/25.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/RDYWMWTHW6UDXOFJ45TVU7FT'},
    {name: 'Drekker', description: 'this is a test description', img: 'assets/img/prints/27.jpg', css: 'column-xs-12 column-md-4', styles: JSON.parse(JSON.stringify(rectangleStyles)), link: 'https://checkout.square.site/buy/ATDKGG5OR4BL2BMS52E4HQZV'},
];
