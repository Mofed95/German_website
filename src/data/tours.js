// =========================================================
// KARL INSEL TOUR
// Tour Data
// Images are stored in: public/images/
// Works on localhost and GitHub Pages
// =========================================================

const image = (path) => `${import.meta.env.BASE_URL}images/${path}`;


export const tours = [
  {
    id: 1,
    slug: "stone-town-tour",
    title: "Stone Town Tour",
    category: "Kultur",
    location: "Stone Town",

    image: image("stone-town.png"),

    shortDescription:
      "Entdecken Sie die historische Altstadt Sansibars und ihre faszinierende Kultur.",

    description:
      "Erleben Sie Stone Town mit seinen historischen Gassen, beeindruckenden Gebäuden und der besonderen kulturellen Vielfalt Sansibars.",

    duration: "Halbtägig",

    highlights: [
      "Historisches Stone Town entdecken",
      "Kulturelle Besonderheiten erleben",
      "Historische Gebäude und Gassen",
      "Persönliche deutschsprachige Begleitung",
    ],

    gallery: [
      image("stone-town1.jpg"),
      image("forodhani-garden.png"),
      image("stone-town2.png"),
      image("stone-town3.jpg"),
    ],

    featured: true,
  },


  {
    id: 2,
    slug: "gewuerzfarm-tour",
    title: "Gewürzfarm-Tour",
    category: "Kultur",
    location: "Sansibar",

    image: image("spice-picture.jpeg"),

    shortDescription:
      "Entdecken Sie die Gewürze, Aromen und Traditionen der Gewürzinsel.",

    description:
      "Erleben Sie Sansibars Gewürzkultur und erhalten Sie authentische Einblicke in den Anbau und die Verwendung verschiedener Gewürze.",

    duration: "Halbtägig",

    highlights: [
      "Sansibars Gewürzwelt entdecken",
      "Lokale Pflanzen und Gewürze kennenlernen",
      "Einblicke in die lokale Tradition",
      "Persönliche Begleitung",
    ],

    gallery: [
      image("spice-farm.png"),
      image("spice-tours.jpeg"),
      image("spice-picture.jpeg"),
    ],

    featured: true,
  },


  {
    id: 3,
    slug: "prison-island",
    title: "Prison Island",
    category: "Natur",
    location: "Prison Island",

    image: image("prison-island.jpg"),

    shortDescription:
      "Besuchen Sie Prison Island und entdecken Sie die berühmten Riesenschildkröten.",

    description:
      "Eine besondere Inselerfahrung mit Geschichte, Natur und den bekannten Riesenschildkröten von Prison Island.",

    duration: "Halbtägig",

    highlights: [
      "Prison Island entdecken",
      "Riesenschildkröten erleben",
      "Inselgeschichte kennenlernen",
      "Bootsfahrt genießen",
    ],

    gallery: [
      image("prison-island.jpg"),
    ],

    featured: true,
  },


  {
    id: 4,
    slug: "mnemba-island",
    title: "Mnemba Island",
    category: "Meer & Abenteuer",
    location: "Mnemba",

    image: image("mnemba-island.jpg"),

    shortDescription:
      "Entdecken Sie die faszinierende Unterwasserwelt rund um Mnemba.",

    description:
      "Erleben Sie türkisblaues Wasser und eine faszinierende Unterwasserwelt bei einem besonderen Ausflug rund um Mnemba.",

    duration: "Ganztägig",

    highlights: [
      "Türkisblaues Wasser erleben",
      "Schnorcheln",
      "Unterwasserwelt entdecken",
      "Zeit am Meer genießen",
    ],

    gallery: [
      image("mnemba-snorkeling.jpg"),
      image("mnemba-island.jpg"),
    ],

    featured: true,
  },


  {
    id: 5,
    slug: "blue-safari",
    title: "Blue Safari",
    category: "Meer & Abenteuer",
    location: "Sansibar",

    image: image("blue-safari.jpg"),

    shortDescription:
      "Ein Tag auf dem Indischen Ozean mit Meer, Inseln und besonderen Momenten.",

    description:
      "Entdecken Sie die Küstenwelt Sansibars bei einer abwechslungsreichen Bootserfahrung und genießen Sie die Schönheit des Indischen Ozeans.",

    duration: "Ganztägig",

    highlights: [
      "Bootsfahrt auf dem Indischen Ozean",
      "Türkisblaues Meer",
      "Sandbank und Inselerlebnis",
      "Zeit zum Entspannen",
    ],

    gallery: [
      image("blue-safari.jpg"),
      image("gallery-ocean.jpg"),
    ],

    featured: true,
  },


  {
    id: 6,
    slug: "jozani-wald",
    title: "Jozani-Wald",
    category: "Natur",
    location: "Jozani",

    image: image("jozani-chwaka.jpg"),

    shortDescription:
      "Entdecken Sie den Jozani-Wald und seine besondere Tier- und Pflanzenwelt.",

    description:
      "Erkunden Sie den Jozani-Wald und erleben Sie die einzigartige Natur Sansibars.",

    duration: "Halbtägig",

    highlights: [
      "Jozani-Wald erkunden",
      "Natur Sansibars erleben",
      "Einheimische Tierwelt entdecken",
      "Tropische Vegetation erleben",
    ],

    gallery: [
      image("sele-jozani.png"),
      image("jozani.jpeg"),
      image("jozani-znz.jpeg"),
    ],

    featured: true,
  },


  {
    id: 7,
    slug: "kizimkazi",
    title: "Kizimkazi",
    category: "Meer & Abenteuer",
    location: "Kizimkazi",

    image: image("kizimkazi.jpg"),

    shortDescription:
      "Entdecken Sie die Küste von Kizimkazi und erleben Sie das Meer.",

    description:
      "Kizimkazi bietet besondere Erlebnisse an der Südküste Sansibars.",

    duration: "Halbtägig",

    highlights: [
      "Kizimkazi entdecken",
      "Südküste Sansibars erleben",
      "Meer und Küste genießen",
      "Lokale Atmosphäre erleben",
    ],

    gallery: [
      image("kizimkazi.jpg"),
    ],

    featured: false,
  },


  {
    id: 8,
    slug: "rock-restaurant",
    title: "The Rock Restaurant",
    category: "Kulinarik",
    location: "Michamvi",

    image: image("rock-restaurant.jpg"),

    shortDescription:
      "Besuchen Sie einen der außergewöhnlichsten Orte zum Essen auf Sansibar.",

    description:
      "Ein besonderes kulinarisches Erlebnis an einem einzigartigen Ort an der Küste Sansibars.",

    duration: "Auf Anfrage",

    highlights: [
      "Einzigartige Lage am Meer",
      "Besonderes kulinarisches Erlebnis",
      "Küste von Michamvi",
      "Unvergessliche Atmosphäre",
    ],

    gallery: [
      image("rock-restaurant.jpg"),
    ],

    featured: false,
  },


  {
    id: 9,
    slug: "safari-tansania",
    title: "Safari in Tansania",
    category: "Safari",
    location: "Tansania",

    image: image("tanzania-safari.png"),

    shortDescription:
      "Erleben Sie die faszinierende Tierwelt Tansanias.",

    description:
      "Kombinieren Sie Ihren Sansibar-Aufenthalt mit einer individuellen Safari auf dem tansanischen Festland.",

    duration: "Mehrere Tage",

    highlights: [
      "Tansanias Tierwelt erleben",
      "Safari individuell planen",
      "Sansibar und Festland kombinieren",
      "Persönliche Reiseplanung",
    ],

    gallery: [
      image("tanzania-safari.png"),
    ],

    featured: false,
  },
];


export const tourCategories = [
  "Alle",
  "Kultur",
  "Natur",
  "Meer & Abenteuer",
  "Kulinarik",
  "Safari",
];