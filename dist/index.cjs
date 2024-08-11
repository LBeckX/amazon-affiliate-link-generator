"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AmazonAffiliateLink: () => AmazonAffiliateLink
});
module.exports = __toCommonJS(src_exports);

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AmazonAffiliateLink
});
//# sourceMappingURL=index.cjs.map