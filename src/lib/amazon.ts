export const AMAZON_TAG = "ilkehimself-20";

export function amazonLink(path: string): string {
  return `https://www.amazon.com/${path}?tag=${AMAZON_TAG}`;
}

export interface AmazonProduct {
  name: string;
  path: string;
  price: string;
  reason: string;
}

export const recommendedGear: AmazonProduct[] = [
  {
    name: "LG 27\" 4K USB-C Monitor (27UN850-W)",
    path: "dp/B08995HDG7",
    price: "~$350",
    reason: "Perfect for coding — 4K text clarity + USB-C single cable",
  },
  {
    name: "Keychron Q1 Pro Mechanical Keyboard",
    path: "dp/B0BHH9YPFK",
    price: "~$170",
    reason: "Wireless mechanical with hot-swap switches — great for long coding sessions",
  },
  {
    name: "Logitech MX Master 3S Wireless Mouse",
    path: "dp/B09HM94VDS",
    price: "~$100",
    reason: "Ergonomic, horizontal scroll, works on any surface — dev favorite",
  },
  {
    name: "Rain Design mStand Laptop Stand",
    path: "dp/B002PNV6XE",
    price: "~$40",
    reason: "Raises laptop to eye level — better posture for long sessions",
  },
  {
    name: "Samsung T7 1TB Portable SSD",
    path: "dp/B07PZHZRGD",
    price: "~$85",
    reason: "Fast portable storage for projects on the go",
  },
];
