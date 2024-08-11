declare class AmazonAffiliateLink {
    productLink: string;
    trackingId: string;
    asin: string;
    affiliateLink: string;
    constructor(productLink: string, trackingId: string);
    get(): string;
}

export { AmazonAffiliateLink };
