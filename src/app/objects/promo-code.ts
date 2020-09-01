export interface PromoCode {
    code: string;
    discount: number;
    expiration: Date;
    used: boolean;
}
