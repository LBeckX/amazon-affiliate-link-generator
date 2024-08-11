export class AmazonAffiliateLink {

    public asin?: string = null

    public affiliateLink?: string = null

    constructor(
        public productLink: string,
        public trackingId: string
    ) {
        const url = new URL(productLink)
        this.asin = productLink.match(/\/dp\/([A-Z0-9]{10})/i)[1]
        this.affiliateLink = `${url.origin}/dp/${this.asin}/?tag=${this.trackingId}`
    }

    get(): string {
        return this.affiliateLink
    }
}