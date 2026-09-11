// Full site copy for both languages. Bosnian ("bs") is the primary/default
// language; English ("en") mirrors the exact same shape.
//
// Conventions
// - Headings that emphasise one word are stored as { pre, em, post } so each
//   language can italicise the word that reads best while keeping the markup
//   `{pre}<span class="italic">{em}</span>{post}`.
// - Repeated data (menu items, specials, gallery, reviews, taste props) keeps
//   its structural data (images, prices, ids) in the components; only the
//   translated strings live here, keyed by a STABLE id — never by a display
//   string.
// - Short templates use `{token}` placeholders replaced at render time.

/**
 * @typedef {Object} Emphasis
 * @property {string} pre   Text before the emphasised word.
 * @property {string} em    The emphasised word (wrapped in an italic span).
 * @property {string} post  Text after the emphasised word.
 */

/**
 * @typedef {Object} Translation
 * @property {{ links: Record<string,string>, cta: string }} nav
 * @property {Object} hero
 * @property {Object} about
 * @property {Object} specials
 * @property {Object} menu
 * @property {string[]} marquee
 * @property {Object} taste
 * @property {Object} orderBold
 * @property {Object} gallery
 * @property {Object} reviews
 * @property {Object} instagram
 * @property {Object} visit
 * @property {Object} reservation
 * @property {Object} footer
 * @property {Object} langSwitcher
 */

/** @type {Record<'bs'|'en', Translation>} */
export const translations = {
  bs: {
    nav: {
      links: {
        about: "O nama",
        menu: "Meni",
        gallery: "Galerija",
        visit: "Posjetite nas",
        reservations: "Rezervacije",
      },
      cta: "Rezerviši sto",
    },

    hero: {
      // Emphasised heading: "Svaki zalogaj priča priču"
      title: { pre: "Svaki zalogaj ", em: "priča", post: " priču" },
      subtitle: "Bistro iskustvo kako treba — svježe, smjelo, s dušom.",
      ctaMenu: "Pogledaj meni",
      ctaReserve: "Napravi rezervaciju",
    },

    about: {
      heading: "O NAMA",
      p1: "Grappa je inspirisana toplinom Sarajeva — poštenim namirnicama, smjelim okusima, pažljivom uslugom i hranom koja se sprema svježe svaki dan.",
      p2: "Od sporo pečene teletine do domaće tjestenine i svježe pastrmke, svako jelo nastaje od svježih namirnica, uz atmosferu pored rijeke i nezaboravan okus.",
      cta: "Otkrij razliku",
    },

    specials: {
      eyebrow: "Izbor chefa",
      heading: "Grappa specijaliteti",
      chefSpecial: "Specijalitet chefa",
      marketPrice: "Tržišna cijena",
      items: {
        "special-ribeye": "Rib Eye biftek",
        "special-tuna": "File tune",
        "special-truffle-pasta": "Tjestenina s tartufima",
        "gallery-chicken-rice": "Pileći file",
        "gallery-platter": "Sporo pečena teleća plećka",
        "gallery-carpaccio": "Carpaccio od junetine",
        "about-carpaccio-board": "Carpaccio od crvene pastrmke",
        "about-feta-salad": "Izbor sireva",
        "gallery-chicken-pasta": "Tjestenina s piletinom",
        "hero-pasta": "Tjestenina s rib eye-om",
        "hero-risotto": "Tjestenina s mocarelom",
        "gallery-omelette": "Omlet",
        "gallery-salad-seeds": "Pileća salata",
        "why-tuna-salad": "Salata s tunom",
      },
    },

    menu: {
      heading: "Naš meni",
      categories: {
        breakfast: "Doručak",
        starters: "Predjela",
        salads: "Salate",
        main: "Glavna jela",
        pasta: "Tjestenine",
        beer: "Pivo",
        cider: "Jabukovača",
        "white-wines": "Bijela vina",
        "red-wines": "Crvena vina",
      },
      // Food item names by id. Drink names are proper nouns kept in site.js.
      items: {
        "chicken-sandwich": "Sendvič s piletinom",
        "roast-beef-sandwich": "Sendvič s pečenom junetinom",
        "mozzarella-sandwich": "Sendvič s mocarelom",
        "egg-sandwich": "Sendvič s jajima",
        "fried-eggs": "Jaja na oko",
        omelette: "Omlet",
        "eggs-steak": "Jaja s biftekom",
        "eggs-trout": "Jaja s mariniranom pastrmkom",
        "eggs-chicken": "Jaja s piletinom",
        "beef-carpaccio": "Carpaccio od junetine",
        "trout-carpaccio": "Carpaccio od crvene pastrmke",
        "cheese-selection": "Izbor sireva",
        "chicken-salad": "Pileća salata",
        "tuna-salad": "Salata s tunom",
        "ribeye-salad": "Rib Eye salata",
        "feta-walnut-salad": "Salata s feta sirom i orasima",
        "seed-salad": "Salata sa sjemenkama",
        "ribeye-steak": "Rib Eye biftek",
        "tuna-filet": "File tune",
        "chicken-filet": "Pileći file",
        "veal-shoulder": "Sporo pečena teleća plećka",
        "truffle-pasta": "Tjestenina s tartufima",
        "chicken-pasta": "Tjestenina s piletinom",
        "ribeye-pasta": "Tjestenina s rib eye-om",
        "seed-pasta": "Tjestenina sa sjemenkama",
        "mozzarella-pasta": "Tjestenina s mocarelom",
      },
    },

    marquee: [
      "Svježe svaki dan",
      "S ljubavlju",
      "Otvoreno za ručak",
      "Bistro atmosfera",
      "Okusi Sarajeva",
      "Djelo chefa",
    ],

    taste: {
      eyebrow: "Grappa razlika",
      heading: "Osjeti razliku",
      subtitle: "Bistro iskustvo kako treba.",
      props: {
        leaf: {
          title: "Svježe svaki dan",
          text: "Namirnice se pripremaju svježe svaki dan.",
        },
        flame: {
          title: "Smjeo okus",
          text: "Bistro jela puna bogatog i nezaboravnog okusa.",
        },
        bolt: {
          title: "Brza usluga",
          text: "Svako jelo servirano brzo, bez kompromisa.",
        },
        serve: {
          title: "Servirano toplo",
          text: "Svježe pripremljena hrana koja zadovoljava svaku želju.",
        },
      },
      cta: "Pogledaj naš meni",
    },

    orderBold: {
      words: ["NARUČI", "SMJELO", "BISTRO", "OKUS"],
      paragraph:
        "Rezervišite sto i doživite najpromišljeniji bistro u Sarajevu — svježe namirnice, ručno pripremljena jela i atmosferu pored rijeke kakvu nema nigdje drugdje.",
      ctaReserve: "Rezerviši sto",
      ctaMenu: "Pogledaj cijeli meni",
    },

    gallery: {
      heading: "Trenuci u Grappi",
      subtitle: "Djelić našeg iskustva.",
      cardTagline: "Okusi svaki trenutak",
      cardText:
        "Pridružite nam se pored rijeke i otkrijte zašto je Grappa najomiljeniji bistro doživljaj u Sarajevu.",
      cardCta: "Pronađi nas",
    },

    reviews: {
      trustedBy: "Vjeruju nam",
      guests: "500+ gostiju",
      sources: {
        guest: "Recenzija gosta",
        thefork: "The Fork",
      },
      items: {
        r1: "Već zbog tjestenine s tartufima vrijedi doći u Grappu. Sve djeluje ručno i s namjerom. Jedan od najboljih bistroa u Sarajevu.",
        r2: "Besprijekorna usluga i predivna atmosfera pored rijeke. Rib eye je pripremljen tačno kako smo tražili. Sigurno se vraćamo.",
        r3: "Svježe namirnice čiji se okus zaista osjeti. Carpaccio kao predjelo bio je izvrstan, a izbor vina je istinski impresivan.",
        r4: "Skriveni dragulj na Miljacki. Mirno, toplo, a hrana je dosljedno izvrsna svaki put.",
        r5: "Grappa je postala naš izbor za posebne prilike. Atmosfera je elegantna, ali ne ukočena, a osoblje istinski brine.",
        r6: "Savršeno pripremljen file tune, sjajan izbor vina i pogled na rijeku. Upravo onako kako bi sarajevski bistro trebao izgledati.",
      },
    },

    instagram: {
      heading: "Prati našu priču",
      handleSuffix: "na Instagramu",
      cta: "Više na Instagramu",
    },

    visit: {
      eyebrow: "Posjetite nas",
      heading: "Pronađite nas",
    },

    reservation: {
      heading: "Rezervišite svoj sto",
      subtitle: "Recite nam kada, a mi ćemo pripremiti mjesto za vas.",
      name: "Ime",
      namePlaceholder: "Vaše ime",
      contact: "Telefon ili email",
      contactPlaceholder: "Da vam potvrdimo",
      date: "Datum",
      party: "Broj gostiju",
      guestsOne: "gost",
      guestsFew: "gosta",
      guestsMany: "gostiju",
      message: "Poruka",
      messagePlaceholder: "Posebna prilika ili želja za mjestom?",
      submit: "Rezerviši moj sto",
      thanksGreeting: "Hvala",
      friend: "prijatelju",
      thanksBody:
        "Vaš zahtjev je na putu. Uskoro ćemo potvrditi vaš sto za {party} dana {date}.",
      thanksDateFallback: "odabrani datum",
      makeAnother: "Nova rezervacija",
      mailSubject: "Rezervacija stola — {name}",
      mailName: "Ime",
      mailContact: "Kontakt",
      mailDate: "Datum",
      mailParty: "Broj gostiju",
    },

    footer: {
      rights: "Sva prava zadržana.",
    },

    langSwitcher: {
      aria: "Promijeni jezik",
    },
  },

  en: {
    nav: {
      links: {
        about: "About",
        menu: "Menu",
        gallery: "Gallery",
        visit: "Visit Us",
        reservations: "Reservations",
      },
      cta: "Reserve a Table",
    },

    hero: {
      // Emphasised heading: "Where Every Bite Tells a Story"
      title: { pre: "Where Every ", em: "Bite", post: " Tells a Story" },
      subtitle: "Bistro dining done right — fresh, bold, soulful.",
      ctaMenu: "View Menu",
      ctaReserve: "Make a Reservation",
    },

    about: {
      heading: "ABOUT",
      p1: "Grappa is inspired by the warmth of Sarajevo — honest ingredients, bold flavors, attentive service, and food made fresh every single day.",
      p2: "From slow-roasted veal to handmade pasta and fresh trout, every dish is crafted with fresh ingredients, riverside atmosphere, and unforgettable flavor.",
      cta: "Explore The Difference",
    },

    specials: {
      eyebrow: "Chef's Picks",
      heading: "Grappa Specials",
      chefSpecial: "Chef's Special",
      marketPrice: "Market Price",
      items: {
        "special-ribeye": "Rib Eye Steak",
        "special-tuna": "Tuna Filet",
        "special-truffle-pasta": "Truffle Pasta",
        "gallery-chicken-rice": "Chicken Filet",
        "gallery-platter": "Slow-Roasted Veal Shoulder",
        "gallery-carpaccio": "Beef Carpaccio",
        "about-carpaccio-board": "Red Trout Carpaccio",
        "about-feta-salad": "Cheese Selection",
        "gallery-chicken-pasta": "Chicken Pasta",
        "hero-pasta": "Rib Eye Pasta",
        "hero-risotto": "Mozzarella Pasta",
        "gallery-omelette": "Omelette",
        "gallery-salad-seeds": "Chicken Salad",
        "why-tuna-salad": "Tuna Salad",
      },
    },

    menu: {
      heading: "Our Menu",
      categories: {
        breakfast: "Breakfast",
        starters: "Starters",
        salads: "Salads",
        main: "Main Dishes",
        pasta: "Pasta",
        beer: "Beer",
        cider: "Cider",
        "white-wines": "White Wines",
        "red-wines": "Red Wines",
      },
      items: {
        "chicken-sandwich": "Chicken Sandwich",
        "roast-beef-sandwich": "Roast Beef Sandwich",
        "mozzarella-sandwich": "Mozzarella Sandwich",
        "egg-sandwich": "Egg Sandwich",
        "fried-eggs": "Fried Eggs",
        omelette: "Omelette",
        "eggs-steak": "Eggs with Steak",
        "eggs-trout": "Eggs with Marinated Trout",
        "eggs-chicken": "Eggs with Chicken",
        "beef-carpaccio": "Beef Carpaccio",
        "trout-carpaccio": "Red Trout Carpaccio",
        "cheese-selection": "Cheese Selection",
        "chicken-salad": "Chicken Salad",
        "tuna-salad": "Tuna Salad",
        "ribeye-salad": "Rib Eye Salad",
        "feta-walnut-salad": "Feta Cheese & Walnut Salad",
        "seed-salad": "Salad with Seeds",
        "ribeye-steak": "Rib Eye Steak",
        "tuna-filet": "Tuna Filet",
        "chicken-filet": "Chicken Filet",
        "veal-shoulder": "Slow-Roasted Veal Shoulder",
        "truffle-pasta": "Truffle Pasta",
        "chicken-pasta": "Chicken Pasta",
        "ribeye-pasta": "Rib Eye Pasta",
        "seed-pasta": "Pasta with Seeds",
        "mozzarella-pasta": "Mozzarella Pasta",
      },
    },

    marquee: [
      "Fresh Daily",
      "Made With Love",
      "Open For Lunch",
      "Bistro Vibes",
      "Sarajevo Flavors",
      "Crafted By Chef",
    ],

    taste: {
      eyebrow: "The Grappa Difference",
      heading: "Taste the Difference",
      subtitle: "Bistro dining done right.",
      props: {
        leaf: {
          title: "Fresh Daily",
          text: "Ingredients prepared fresh every single day.",
        },
        flame: {
          title: "Bold Flavor",
          text: "Bistro food packed with rich and unforgettable flavor.",
        },
        bolt: {
          title: "Fast Service",
          text: "Every plate served promptly without cutting corners.",
        },
        serve: {
          title: "Served Hot",
          text: "Freshly prepared food made to satisfy every craving.",
        },
      },
      cta: "View Our Menu",
    },

    orderBold: {
      words: ["ORDER", "BOLD", "BISTRO", "FLAVOR"],
      paragraph:
        "Book your table and experience Sarajevo's most thoughtful bistro — fresh ingredients, handcrafted dishes, and a riverside atmosphere unlike anywhere else.",
      ctaReserve: "Reserve a Table",
      ctaMenu: "View Full Menu",
    },

    gallery: {
      heading: "Moments at Grappa",
      subtitle: "A glimpse into the experience.",
      cardTagline: "Taste Every Moment",
      cardText:
        "Join us riverside and discover why Grappa is Sarajevo's most beloved bistro experience.",
      cardCta: "Find Us",
    },

    reviews: {
      trustedBy: "Trusted by",
      guests: "500+ guests",
      sources: {
        guest: "Guest Review",
        thefork: "The Fork",
      },
      items: {
        r1: "The truffle pasta alone is worth the trip to Grappa. Everything feels handmade and intentional. One of the best bistros in Sarajevo.",
        r2: "Impeccable service and a beautiful riverside atmosphere. The rib eye was cooked exactly as requested. We will absolutely be back.",
        r3: "Fresh ingredients you can actually taste. The carpaccio starter was outstanding and the wine selection is genuinely impressive.",
        r4: "A hidden gem on the Miljacka. Calm, warm, and the food is consistently excellent every single visit.",
        r5: "Grappa has become our go-to for special occasions. The atmosphere is elegant without being stiff and the staff genuinely care.",
        r6: "Perfectly cooked tuna filet, great wine selection, and a view of the river. Exactly what a Sarajevo bistro should feel like.",
      },
    },

    instagram: {
      heading: "Follow Our Story",
      handleSuffix: "on Instagram",
      cta: "View More on Instagram",
    },

    visit: {
      eyebrow: "Visit Us",
      heading: "Come Find Us",
    },

    reservation: {
      heading: "Reserve Your Table",
      subtitle: "Tell us when, and we'll set a place for you.",
      name: "Name",
      namePlaceholder: "Your name",
      contact: "Phone or Email",
      contactPlaceholder: "So we can confirm",
      date: "Date",
      party: "Party Size",
      guestsOne: "guest",
      guestsFew: "guests",
      guestsMany: "guests",
      message: "Message",
      messagePlaceholder: "Any occasion or seating preference?",
      submit: "Reserve My Table",
      thanksGreeting: "Thank you",
      friend: "friend",
      thanksBody:
        "Your request is on its way. We'll confirm your table for {party} on {date} shortly.",
      thanksDateFallback: "your chosen date",
      makeAnother: "Make Another Reservation",
      mailSubject: "Table reservation — {name}",
      mailName: "Name",
      mailContact: "Contact",
      mailDate: "Date",
      mailParty: "Party size",
    },

    footer: {
      rights: "All rights reserved.",
    },

    langSwitcher: {
      aria: "Change language",
    },
  },
};

/**
 * Language metadata for the switcher. Names are autonyms (shown in their own
 * language regardless of the active language, as is convention).
 * @type {{ code: 'bs'|'en', label: string, abbr: string, flag: string }[]}
 */
export const LANGUAGES = [
  { code: "bs", label: "Bosanski", abbr: "BA", flag: "/flags/ba.svg" },
  { code: "en", label: "English", abbr: "EN", flag: "/flags/gb.svg" },
];

/** @type {'bs'|'en'} */
export const DEFAULT_LANGUAGE = "bs";

/** localStorage key for the persisted language choice. */
export const STORAGE_KEY = "grappa-lang";

/**
 * Fill `{token}` placeholders in a template string.
 * @param {string} template
 * @param {Record<string, string|number>} [vars]
 * @returns {string}
 */
export function fill(template, vars = {}) {
  return template.replace(/\{(\w+)\}/g, (m, k) =>
    k in vars ? String(vars[k]) : m
  );
}
