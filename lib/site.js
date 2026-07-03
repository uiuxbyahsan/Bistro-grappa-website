// Single source of truth for site content. Menu data is reproduced exactly as
// supplied — no items added, renamed, or removed.

export const CONTACT = {
  name: "Bistro Grappa",
  street: "Obala Kulina bana 10",
  city: "Sarajevo",
  postal: "71000",
  country: "Bosnia and Herzegovina",
  hours: "Mon–Sun | 12:00 PM – 11:00 PM",
  instagramHandle: "@bistrograppa",
  instagramUrl: "https://www.instagram.com/bistrograppa/",
  facebookLabel: "Bistro Grappa",
  facebookUrl: "https://www.facebook.com/people/Bistro-Grappa/",
  mapsEmbed:
    "https://www.google.com/maps?q=Obala%20Kulina%20bana%2010%2C%20Sarajevo%2C%20Bosnia%20and%20Herzegovina&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Obala+Kulina+bana+10,+Sarajevo,+Bosnia+and+Herzegovina",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit Us", href: "#visit" },
  { label: "Reservations", href: "#reservations" },
];

export const SPECIALS = [
  {
    name: "Rib Eye Steak",
    price: "25.00",
    img: "/assets/food/special-ribeye.jpg",
    note: "Seared to a deep crust, rested and sliced",
  },
  {
    name: "Tuna Filet",
    price: "26.00",
    img: "/assets/food/special-tuna.jpg",
    note: "Sesame-crusted, rare centre, herb purée",
  },
  {
    name: "Truffle Pasta",
    price: "13.00",
    img: "/assets/food/special-truffle-pasta.jpg",
    note: "Penne in a black-truffle cream",
  },
];

// Full menu — tabbed. Drinks have names only (no prices listed).
export const MENU = [
  {
    id: "breakfast",
    label: "Breakfast",
    items: [
      { name: "Chicken Sandwich", price: "7.50" },
      { name: "Roast Beef Sandwich", price: "11.00" },
      { name: "Mozzarella Sandwich", price: "8.00" },
      { name: "Egg Sandwich", price: "7.50" },
      { name: "Fried Eggs", price: "7.00" },
      { name: "Omelette", price: "7.50" },
      { name: "Eggs with Steak", price: "13.00" },
      { name: "Eggs with Marinated Trout", price: "13.00" },
      { name: "Eggs with Chicken", price: "12.00" },
    ],
  },
  {
    id: "starters",
    label: "Starters",
    items: [
      { name: "Beef Carpaccio", price: "19.00" },
      { name: "Red Trout Carpaccio", price: "18.00" },
      { name: "Cheese Selection", price: "20.00" },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    items: [
      { name: "Chicken Salad", price: "14.00" },
      { name: "Tuna Salad", price: "17.00" },
      { name: "Rib Eye Salad", price: "16.00" },
      { name: "Feta Cheese & Walnut Salad", price: "12.00" },
      { name: "Salad with Seeds", price: "10.00" },
    ],
  },
  {
    id: "main",
    label: "Main Dishes",
    items: [
      { name: "Rib Eye Steak", price: "25.00" },
      { name: "Tuna Filet", price: "26.00" },
      { name: "Chicken Filet", price: "15.00" },
      { name: "Slow-Roasted Veal Shoulder", price: "30.00" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    items: [
      { name: "Truffle Pasta", price: "13.00" },
      { name: "Chicken Pasta", price: "13.00" },
      { name: "Rib Eye Pasta", price: "16.00" },
      { name: "Pasta with Seeds", price: "13.00" },
      { name: "Mozzarella Pasta", price: "14.00" },
    ],
  },
  {
    id: "beer",
    label: "Beer",
    items: [
      { name: "Nikšićko" },
      { name: "Heineken" },
      { name: "Beck's" },
      { name: "Carlsberg" },
      { name: "Blanc" },
      { name: "Erdinger Blond" },
      { name: "Erdinger Dark" },
      { name: "Erdinger Weissbier" },
      { name: "Erdinger Dunkel" },
      { name: "Sarajevsko Premium" },
    ],
  },
  {
    id: "cider",
    label: "Cider",
    items: [
      { name: "Somersby Apple" },
      { name: "Somersby Pear" },
      { name: "Somersby Mango & Lime" },
      { name: "Somersby Happy & Lime" },
      { name: "Somersby Blueberry" },
      { name: "Somersby 0.0%" },
      { name: "Somersby Strawberry & Lime" },
      { name: "Somersby Elderflower & Lime" },
    ],
  },
  {
    id: "white-wines",
    label: "White Wines",
    items: [
      { name: "Žilavka" },
      { name: "Carska Vina" },
      { name: "Nuić Chardonnay" },
      { name: "Tribunia" },
      { name: "Vukoje" },
      { name: "Janjika" },
      { name: "Izazov" },
    ],
  },
  {
    id: "red-wines",
    label: "Red Wines",
    items: [
      { name: "Blatina" },
      { name: "David Special Edition" },
      { name: "Plavac Mali Barrique" },
      { name: "Plavac Mali Dingač" },
      { name: "Nuić Red Wine" },
    ],
  },
];

// Why We're Different — six checklist items (all use the checkmark icon).
export const WHY = [
  { title: "Fresh Sauces", text: "House-made sauces and dressings crafted daily by the chef." },
  { title: "Open Late", text: "Available for lunch and dinner, every day of the week." },
  { title: "Big Portions", text: "Generous plates because we believe in feeding people well." },
  { title: "Riverside", text: "Seated on the Miljacka river, right in the heart of Sarajevo." },
  { title: "No Long Waits", text: "Tables turn quickly without rushing your experience." },
  { title: "Wine Friendly", text: "A curated local wine list that pairs with every dish." },
];

// Two featured plates shown as circular amber-ringed photos beside the checklist.
export const WHY_FEATURED = [
  { name: "Rib Eye Steak", price: "25.00", img: "/assets/food/special-ribeye.jpg" },
  { name: "Tuna Filet", price: "26.00", img: "/assets/food/special-tuna.jpg" },
];

// Taste the Difference — four value props (icon keys resolved in the component).
export const TASTE_PROPS = [
  { icon: "leaf", title: "Fresh Daily", text: "Ingredients prepared fresh every single day." },
  { icon: "flame", title: "Bold Flavor", text: "Bistro food packed with rich and unforgettable flavor." },
  { icon: "bolt", title: "Fast Service", text: "Every plate served promptly without cutting corners." },
  { icon: "serve", title: "Served Hot", text: "Freshly prepared food made to satisfy every craving." },
];

export const REVIEWS = [
  {
    name: "Ana K.",
    source: "Guest Review",
    rating: 5,
    text: "The truffle pasta alone is worth the trip to Grappa. Everything feels handmade and intentional. One of the best bistros in Sarajevo.",
  },
  {
    name: "Marko T.",
    source: "The Fork",
    rating: 5,
    text: "Impeccable service and a beautiful riverside atmosphere. The rib eye was cooked exactly as requested. We will absolutely be back.",
  },
  {
    name: "Sara M.",
    source: "Guest Review",
    rating: 5,
    text: "Fresh ingredients you can actually taste. The carpaccio starter was outstanding and the wine selection is genuinely impressive.",
  },
  {
    name: "Luka B.",
    source: "The Fork",
    rating: 4,
    text: "A hidden gem on the Miljacka. Calm, warm, and the food is consistently excellent every single visit.",
  },
  {
    name: "Emina H.",
    source: "Guest Review",
    rating: 5,
    text: "Grappa has become our go-to for special occasions. The atmosphere is elegant without being stiff and the staff genuinely care.",
  },
  {
    name: "Tarik V.",
    source: "The Fork",
    rating: 5,
    text: "Perfectly cooked tuna filet, great wine selection, and a view of the river. Exactly what a Sarajevo bistro should feel like.",
  },
];

export const GALLERY = [
  { src: "/assets/food/gallery-tuna-medallions.jpg", alt: "Sesame tuna medallions on a bed of salad" },
  { src: "/assets/food/gallery-platter.jpg", alt: "Sharing platter of carpaccio, roast potatoes and cheese" },
  { src: "/assets/food/gallery-chicken-pasta.jpg", alt: "Creamy penne with chicken" },
  { src: "/assets/food/gallery-salad-seeds.jpg", alt: "Garden salad with seeds, tomato and olives" },
  { src: "/assets/food/gallery-tuna-bites.jpg", alt: "Seared tuna bites with polenta and greens" },
  { src: "/assets/food/gallery-shrimp.jpg", alt: "Prawns with roasted cauliflower in a cream sauce" },
  { src: "/assets/food/gallery-chicken-rice.jpg", alt: "Grilled chicken filet with rice and salad" },
  { src: "/assets/food/gallery-carpaccio.jpg", alt: "Beef carpaccio dressed with olive oil and capers" },
  { src: "/assets/food/gallery-omelette.jpg", alt: "Omelette with feta salad, bread and red wine" },
];

export const INSTAGRAM_POSTS = [
  { src: "/assets/instagram/post-1.jpg", alt: "Slow-roasted veal with roast potatoes" },
  { src: "/assets/instagram/post-2.jpg", alt: "All-day breakfast plate with eggs and steak" },
  { src: "/assets/instagram/post-3.jpg", alt: "Feta cheese salad with seeds" },
  { src: "/assets/instagram/post-4.jpg", alt: "Roasted veal fresh from the pan" },
  { src: "/assets/instagram/post-5.jpg", alt: "Fried eggs with marinated red trout" },
  { src: "/assets/instagram/post-6.jpg", alt: "Slow-roasted veal shank" },
];
