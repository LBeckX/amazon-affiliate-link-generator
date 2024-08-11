// src/AmazonAffiliateLink.ts
var AmazonAffiliateLink = class {
  constructor(productLink, trackingId) {
    this.productLink = productLink;
    this.trackingId = trackingId;
    const url = new URL(productLink);
    const asinMatch = productLink.match(/\/dp\/([A-Z0-9]{10})/i);
    if (!asinMatch) {
      throw new Error("Not a product link");
    }
    this.asin = asinMatch[1];
    this.affiliateLink = `${url.origin}/dp/${this.asin}/?tag=${this.trackingId}`;
  }
  asin;
  affiliateLink;
  get() {
    return this.affiliateLink;
  }
};
export {
  AmazonAffiliateLink
};
//# sourceMappingURL=index.js.map