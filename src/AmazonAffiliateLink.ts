export class AmazonAffiliateLink {

    public asin: string

    public affiliateLink: string

    constructor(
        public productLink: string,
        public trackingId: string
    ) {
        const url = new URL(productLink)
        const asinMatch = productLink.match(/\/dp\/([A-Z0-9]{10})/i)

        if (!asinMatch || !asinMatch[1]) {
            throw new Error('Not a product link')
        }

        this.asin = asinMatch[1]
        this.affiliateLink = `${url.origin}/dp/${this.asin}/?tag=${this.trackingId}`
    }

    get(): string {
        return this.affiliateLink
    }
}