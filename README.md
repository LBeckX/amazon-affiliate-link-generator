# Amazon Affiliate Link Generator

`$ npm i amazon-affiliate-link-generator`

Simple to use and take a look at the examples `src/examples`

## Generate affiliate link

```typescript

import {AmazonAffiliateLink} from "amazon-affiliate-link-generator";

// For commonjs
// const {AmazonAffiliateLink} = require("amazon-affiliate-link-generator");

const productLink = 'https://www.amazon.de/BenQ-GW2790QT-USB-C-Laden-Ergonomisches-Cancelling/dp/B0BZ4Q9NLC/'
const trackingId = 'xxxxxx-21'
const affiliateLink = new AmazonAffiliateLink(productLink, trackingId)

console.log(affiliateLink)

```