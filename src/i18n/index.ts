export const langs = ["de", "en"] as const;
export type Lang = (typeof langs)[number];

/** One entry per page. German keeps the URLs of the old WordPress site. */
export const routes = {
  home: { de: "/", en: "/en/" },
  rooms: { de: "/ausstattungferienwohnung/", en: "/en/rooms/" },
  area: { de: "/umgebung-der-ferienwohnung/", en: "/en/area/" },
  prices: { de: "/preise-fereinwohnung/", en: "/en/prices/" },
  imprint: { de: "/impressum-ferienwohnung/", en: "/en/legal-notice/" },
  privacy: { de: "/datenschutzerklaerung/", en: "/en/privacy/" },
} as const;
export type RouteKey = keyof typeof routes;

export const path = (key: RouteKey, lang: Lang) => routes[key][lang];

export const locales: Record<Lang, { html: string; og: string }> = {
  de: { html: "de", og: "de_DE" },
  en: { html: "en", og: "en_GB" },
};

const ui = {
  de: {
    tagline: "Ferienwohnung in Wardenburg",
    skip: "Zum Inhalt springen",
    menu: "Menü",
    mainNav: "Hauptnavigation",
    nav: { home: "Startseite", rooms: "Ausstattung", area: "Umgebung", prices: "Preise", contact: "Kontakt" },
    switchLabel: "English version",
    switchText: "EN",
    call: (phone: string) => `${phone} anrufen`,
    enquire: "Jetzt anfragen",
    emailUs: "E-Mail schreiben",
    emailSubject: "Anfrage Ferienwohnung",
    footerTitle: "Wir freuen uns auf Sie!",
    footerText:
      "Schreiben Sie uns, wann Sie kommen möchten und mit wie vielen Personen. Am schnellsten erreichen Sie uns am Telefon.",
    address: "Adresse",
    email: "E-Mail",
    imprint: "Impressum",
    privacy: "Datenschutz",
    perNight: "pro Nacht",
    about: "ca.",
    lightbox: { label: "Fotos", close: "Schließen", prev: "Vorheriges Foto", next: "Nächstes Foto", zoom: "Foto vergrößern" },
  },
  en: {
    tagline: "Holiday apartment in Wardenburg",
    skip: "Skip to content",
    menu: "Menu",
    mainNav: "Main navigation",
    nav: { home: "Home", rooms: "Rooms", area: "Area", prices: "Prices", contact: "Contact" },
    switchLabel: "Deutsche Version",
    switchText: "DE",
    call: (phone: string) => `Call ${phone}`,
    enquire: "Send an enquiry",
    emailUs: "Send an email",
    emailSubject: "Holiday apartment enquiry",
    footerTitle: "We look forward to your visit",
    footerText: "Let us know your dates and how many of you are coming. Phoning is quickest, but email works too.",
    address: "Address",
    email: "Email",
    imprint: "Legal notice",
    privacy: "Privacy",
    perNight: "per night",
    about: "approx.",
    lightbox: { label: "Photos", close: "Close", prev: "Previous photo", next: "Next photo", zoom: "Enlarge photo" },
  },
};

export const t = (lang: Lang) => ui[lang];
