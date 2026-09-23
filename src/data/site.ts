import type { Lang } from "../i18n";

export const site = {
  name: "Apartment Oesterling",
  url: "https://www.apartmentoesterling.de",
  owner: "Jens Oesterling",
  street: "Am Fischerheim 5",
  zip: "26203",
  city: "Wardenburg",
  region: "Niedersachsen",
  phoneDisplay: "+49 1724309768",
  phoneIntl: "+49 172 4309768",
  phoneHref: "tel:+491724309768",
  email: "info@apartmentoesterling.de",
  facebook: "https://www.facebook.com/apartmentoesterling/",
  maps: "https://goo.gl/maps/HoxHdtBTq289HNpx6",
};

type Localized = Record<Lang, string>;

export const prices: { label: Localized; amount: number }[] = [
  { label: { de: "Erste Person", en: "First guest" }, amount: 40 },
  { label: { de: "Jede weitere Person", en: "Each additional guest" }, amount: 25 },
  { label: { de: "Kinder von 4 bis 12 Jahren", en: "Children aged 4 to 12" }, amount: 12 },
];

export const formatPrice = (amount: number, lang: Lang) => (lang === "de" ? `${amount} €` : `€${amount}`);

export const distances: { label: Localized; meters: number }[] = [
  { label: { de: "Bushaltestelle", en: "Bus stop" }, meters: 150 },
  { label: { de: "Landessparkasse", en: "Landessparkasse (bank)" }, meters: 290 },
  { label: { de: "Bäckerei Behrens-Meyer", en: "Behrens-Meyer bakery" }, meters: 300 },
  { label: { de: "Supermarkt", en: "Supermarket" }, meters: 350 },
  { label: { de: "Apotheke", en: "Pharmacy" }, meters: 400 },
  { label: { de: "VR Bank", en: "VR Bank" }, meters: 550 },
];
