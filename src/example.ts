import {AmazonAffiliateLink} from "./AmazonAffiliateLink";

const productLink = 'https://www.amazon.de/BenQ-GW2790QT-USB-C-Laden-Ergonomisches-Cancelling/dp/B0BZ4Q9NLC/'
const trackingId = 'xxxxxx-21'
const affiliateLink = new AmazonAffiliateLink(productLink, trackingId)

console.log(affiliateLink)