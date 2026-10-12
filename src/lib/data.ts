export type Subcategory = {
  slug: string;
  name: string;
  parentId: string;
};

export type Category = {
  slug: string;
  name: string;
  description?: string;
  parentId?: string;
  count?: number;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  categorySlug: string;
  subcategorySlug?: string;
  description: string;
  specs?: { label: string; value: string }[];
  featured?: boolean;
  latest?: boolean;
};

export const siteInfo = {
  name: "Standard Test Equipment",
  tagline: "Precision Testing Instruments & Measuring Equipment",
  logo: "/Logo_y5mqli-removebg-preview.png",
  footerLogo:
    "/Logo_y5mqli-removebg-preview.png",
  phone: "+91 95017-95146",
  phoneHref: "+919501795146",
  whatsappHref: "919501795146",
  email: "steindiamkt@gmail.com",
  address: {
    line1: "Plot No. 146, Ground Floor, Sector 82,",
    line2: "JLPL Industrial Area, Sahibzada Ajit Singh Nagar (Mohali),",
    line3: "Punjab 160062, India",
  },
  mapUrl:
    "https://maps.google.com/maps?q=Plot%20No.%20146%20JLPL%20Industrial%20Area%20Sector%2082%20Mohali%20Punjab%20160062",
  banners: [
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791788465/second-915x415_osoasq.jpg",
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791788731/background-915x415_akxa14.jpg",
    "/aluminum-hero.webp",
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791788832/494X455_op3wtc.png",
  ],
  intro:
    "Welcome to Standard Test Equipment. Please read these terms and conditions carefully before using our website, or services.",
};

export const categories: Category[] = [
  {
    slug: "test-probes-and-test-pins",
    name: "TEST PROBES & TEST PINS",
    description:
      "We are a leading Manufacturer of IP 1X-Test Probe as per A as IEC 60529 And 61032, IP 2X-Test Finger Test Probe B As Per IEC 60529 and 61032, IP3X-Test Probe C As Per IEC 60529 and 61032, IP4X Test Probe D As Per IEC 60259 and 61032, Test Probe 11 as per IEC 61032 and Test Probe 12 As Per IEC 61032 from Mohali, India.",
    count: 16,
  },
  {
    slug: "emi-shielding-material",
    name: "EMI SHIELDING MATERIAL",
    description:
      "Pioneers in the industry, we offer CONDUCTIVE NON-WOVEN FABRIC, Contact Surface Tape, Non-Woven Semi Conductive Tape, AMUCOR FOIL AND TAPE, Electrically Conductive Foam Tape and Conductive Textile Tape from India.",
    count: 13,
  },
  {
    slug: "testing-apparatus-luminary-test",
    name: "TESTING APPARATUS LUMINARY TEST - LM 79 AND MORE",
    description:
      "Photometric and spectroradiometric testing solutions for luminary testing as per LM-79 and more, including spectroradiometers, integrating spheres and standard test lamp sources.",
    count: 10,
  },
  {
    slug: "spring-hammer-test-apparatus",
    name: "SPRING HAMMER TEST APPARATUS",
    description:
      "Our product range includes a wide range of Universal Spring Hammer (0.14 - 1 Joule) as per IEC 60068-2-75 and Spring Hammer Test Apparatus as per IEC 60068-2-75.",
    count: 2,
  },
  {
    slug: "ip-test-apparatus",
    name: "IP TEST APPARATUS",
    description:
      "Manufacturer of a wide range of products which include IP Testing, IP X7-X8 Immersion Water Tank as per 60529, Rain Test Chamber (IP X1/X2) as per IEC 60529, Sand and Dust Chamber as per IEC 60529 and Turn Table for IP Testing.",
    count: 5,
  },
  {
    slug: "laboratory-test-apparatus",
    name: "LABORATORY TEST APPARATUS",
    description:
      "Laboratory test apparatus for ball pressure, dielectric strength and salt spray corrosion testing as per applicable IEC standards.",
    count: 3,
  },
];

export const subcategories: Subcategory[] = [
  {
    slug: "gl-spectis-spectroradiometers",
    name: "GL SPECTIS ( SPECTRORADIOMETERS )",
    parentId: "testing-apparatus-luminary-test",
  },
  {
    slug: "gl-optic-sphere-integrating-sphere",
    name: "GL OPTIC SPHERE (INTEGRATING SPHERE)",
    parentId: "testing-apparatus-luminary-test",
  },
  {
    slug: "standard-test-lamp-sources",
    name: "STANDARD TEST LAMP SOURCES",
    parentId: "testing-apparatus-luminary-test",
  },
];

export const products: Product[] = [
  // TEST PROBES & TEST PINS
  {
    slug: "3mm-long-test-pin-probe-as-per-iec-61010",
    name: "3mm Long Test Pin Probe as per IEC 61010",
    price: 10000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Precision engineered 3mm long test pin probe manufactured as per IEC 61010 requirements, supplied in a protective box for laboratory use.",
    specs: [
      { label: "Size", value: "3mm" },
      { label: "Material", value: "Steel" },
      { label: "Color", value: "White" },
      { label: "Packaging Type", value: "Box" },
      { label: "Handle Material", value: "Plastic" },
    ],
  },
  {
    slug: "4mm-long-test-pin-probe-as-per-iec-61010",
    name: "4mm Long Test Pin Probe as per IEC 61010",
    price: 10000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Precision engineered 4mm long test pin probe manufactured as per IEC 61010 requirements, with plastic head and boxed packaging.",
    specs: [
      { label: "Size", value: "4mm" },
      { label: "Material", value: "Steel" },
      { label: "Packaging Type", value: "Box" },
      { label: "Color", value: "White" },
      { label: "Head Material", value: "Plastic" },
    ],
  },
  {
    slug: "black-test-probe-13-short-test-pin-as-per-iec-61032",
    name: "Black Test Probe 13 (Short Test Pin) as per IEC 61032",
    price: 7000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 13 of Short Test Pin - Fig. 9 of EN 61032. This Test Probe Pin (Figure 9 - Test probe 13 of EN 61032) is used to verify protection against access to hazardous parts.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 9)" },
      { label: "Type", value: "Short Test Pin" },
      { label: "Color", value: "Black" },
    ],
    featured: true,
  },
  {
    slug: "ip-1x-test-probe-as-per-a-as-iec-60529-and-61032",
    name: "IP 1X-Test Probe as per A as IEC 60529 And 61032 for Laboratory",
    price: 12000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "We are successfully meeting the varied needs of our patrons by offering a wide gamut of IP 1X-Test Probe as per IEC 60529 and 61032 for laboratory use.",
    specs: [
      { label: "Standard", value: "IEC 60529 & IEC 61032" },
      { label: "Probe", value: "Test Probe A (IP1X)" },
      { label: "Packaging Type", value: "Box" },
    ],
    featured: true,
  },
  {
    slug: "ip4x-test-probe-d-as-per-iec-60259-and-61032",
    name: "IP4X Test Probe D As Per IEC 60259 and 61032",
    price: 12000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "With our years of experience and in-depth knowledge in this field, we are engaged in offering a quality IP4X Test Probe D as per IEC 60259 and 61032.",
    specs: [
      { label: "Standard", value: "IEC 60259 & IEC 61032" },
      { label: "Probe", value: "Test Probe D (IP4X)" },
    ],
    featured: true,
  },
  {
    slug: "test-probe-11-as-per-iec-61032",
    name: "Test Probe 11 as per IEC 61032",
    price: 10000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 11 is a necessary appliance for household and similar electrical equipment testing according to IEC 61032.",
    specs: [
      { label: "Standard", value: "IEC 61032" },
      { label: "Probe Number", value: "11" },
    ],
    featured: true,
  },
  {
    slug: "test-probe-12-as-per-iec-61032",
    name: "Test Probe 12 As Per IEC 61032",
    price: 7000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 12 is a necessary appliance for household and similar electrical equipment testing according to IEC 61032.",
    specs: [
      { label: "Standard", value: "IEC 61032" },
      { label: "Probe Number", value: "12" },
    ],
    featured: true,
  },
  {
    slug: "test-probe-14-as-per-iec-61032",
    name: "Test Probe 14 as per IEC 61032",
    price: 7000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 14 is a necessary appliance for household and similar electrical equipment testing according to IEC 61032.",
    specs: [
      { label: "Standard", value: "IEC 61032" },
      { label: "Probe Number", value: "14" },
    ],
  },
  {
    slug: "test-probe-17-as-per-iec-61032",
    name: "Test Probe 17 as per IEC 61032",
    price: 10000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 17 manufactured by Standard Test Equipment as per IEC 61032, supplied new with minimum order quantity applicable.",
    specs: [
      { label: "Color", value: "White" },
      { label: "Model Name/Number", value: "Standard Test Equipment" },
      { label: "Wire Size", value: "0.5mm dia" },
      { label: "I Deal In", value: "New Only" },
    ],
  },
  {
    slug: "test-probe-31-as-per-iec-61032",
    name: "Test Probe 31 as per IEC 61032",
    price: 14000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 31 is a necessary appliance for household and similar electrical equipment testing according to IEC 61032.",
    specs: [
      { label: "Standard", value: "IEC 61032" },
      { label: "Probe Number", value: "31" },
    ],
  },
  {
    slug: "test-probe-32-as-per-iec-61032",
    name: "Test Probe 32 as per IEC 61032",
    price: 12000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "We are devoted towards offering the qualitative range of Test Probe 32, as per client's precise requirements, following IEC 61032.",
    specs: [
      { label: "Standard", value: "IEC 61032" },
      { label: "Probe Number", value: "32" },
    ],
  },
  {
    slug: "test-probe-41-as-per-iec-61032",
    name: "Test Probe 41 As Per IEC 61032",
    price: 12000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "To cater the variegated needs of our esteemed customers, we are highly engaged in offering a wide array of Test Probe 41 as per IEC 61032.",
    specs: [
      { label: "Standard", value: "IEC 61032" },
      { label: "Probe Number", value: "41" },
    ],
  },
  {
    slug: "test-probe-43-as-per-iec-61032",
    name: "Test Probe 43 as per IEC 61032",
    price: 12000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "With rich industry experience, we offer a qualitative range of Test Probe 43 as per IEC 61032, polished and packed in a box.",
    specs: [
      { label: "Color", value: "White" },
      { label: "Material", value: "Stainless Steel" },
      { label: "Finish", value: "Polished" },
      { label: "Pack Type", value: "Box" },
      { label: "Probe Number", value: "43" },
    ],
  },
  {
    slug: "test-probe-with-round-end-as-per-iec-60529",
    name: "Test Probe With Round End As Per IEC 60529",
    price: 10000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Being a reliable manufacturer, we offer Test Probe with round end as per IEC 60529, made from stainless steel with a polished finish.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Color", value: "White" },
      { label: "Pack Type", value: "Box" },
      { label: "Finish Type", value: "Polished" },
      { label: "Head Shape", value: "Round" },
      { label: "End Shape", value: "Round" },
    ],
  },
  {
    slug: "white-ip-2x-test-finger-test-probe-b-as-per-iec-60529-and-61032",
    name: "White IP 2X-Test Finger Test Probe B As Per IEC 60529 and 61032",
    price: 17000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Being a leading firm in this industry, we are deeply engaged in offering a high-quality range of IP 2X-Test Finger Test Probe B as per IEC 60529 and 61032.",
    specs: [
      { label: "Standard", value: "IEC 60529 & IEC 61032" },
      { label: "Probe", value: "Test Finger Probe B (IP2X)" },
    ],
  },
  {
    slug: "white-stainless-steel-ip3x-test-probe-c-as-per-iec-60529-and-61032",
    name: "White Stainless Steel IP3X-Test Probe C As Per IEC 60529 and 61032",
    price: 12000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "We are among the reputed organizations, deeply engaged in offering an optimum quality range of IP3X-Test Probe C as per IEC 60529 and 61032.",
    specs: [
      { label: "Standard", value: "IEC 60529 & IEC 61032" },
      { label: "Probe", value: "Test Probe C (IP3X)" },
      { label: "Material", value: "Stainless Steel" },
    ],
  },

  // EMI SHIELDING MATERIAL
  {
    slug: "aluminium-tape",
    name: "Aluminium Tape",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "Aluminium tape was developed especially for aluminium housings and frames, offering reliable EMI shielding for industrial purposes.",
    specs: [
      { label: "Tape Width", value: "> 100 mm" },
      { label: "Tape Length", value: "> 50 m" },
      { label: "Color", value: "Black" },
      { label: "Brand", value: "3M" },
    ],
  },
  {
    slug: "amucor-foil-and-tape",
    name: "AMUCOR FOIL AND TAPE",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "Many EMI problems can be solved with Amucor foil and tape - a self adhesive, double sided shielding solution for industrial applications.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Black" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Type", value: "Double Sided" },
    ],
  },
  {
    slug: "black-amucor-foil-with-a-reinforcement-net",
    name: "Black Amucor Foil With A Reinforcement Net",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "Black Amucor foil with a reinforcement net for applications in EMI shielding, self adhesive and designed for industrial purpose.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Black" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Features", value: "Applications EMI shielding" },
    ],
  },
  {
    slug: "black-mounting-tape",
    name: "Black MOUNTING TAPE",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "A double-sided self adhesive black mounting tape for industrial EMI shielding and general purpose bonding applications.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Black" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Type", value: "Double Sided" },
    ],
  },
  {
    slug: "black-mu-ferro-sd-shielding-foil",
    name: "Black MU-Ferro-SD Shielding Foil",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "MU-Ferro-SD shielding foil for magnetic shielding applications, self adhesive and black in colour for industrial purpose.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Black" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Features", value: "Magnetic shielding" },
    ],
  },
  {
    slug: "conductive-non-woven-fabric",
    name: "CONDUCTIVE NON-WOVEN FABRIC",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "Conductive non-woven fabric, self adhesive and double sided, offered new for industrial EMI shielding purposes.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Black" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "I Deal In", value: "New Only" },
      { label: "Type", value: "Double Sided" },
    ],
  },
  {
    slug: "conductive-textile-tape",
    name: "Conductive Textile Tape",
    price: 13000,
    categorySlug: "emi-shielding-material",
    description:
      "Conductive textile tape from 3M, made in India, for EMI shielding and grounding applications in electronics assemblies.",
    specs: [
      { label: "Tape Width", value: "0-20 mm" },
      { label: "Tape Length", value: "10-20 m" },
      { label: "Color", value: "Black" },
      { label: "Brand", value: "3M" },
      { label: "Country of Origin", value: "Made in India" },
    ],
  },
  {
    slug: "contact-surface-tape",
    name: "Contact Surface Tape",
    price: 15400,
    categorySlug: "emi-shielding-material",
    description:
      "This contact surface tape is a double sided, self adhesive solution developed for reliable electrical contact surface applications.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Black" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Type", value: "Double Sided" },
    ],
  },
  {
    slug: "electrically-conductive-foam-tape",
    name: "Electrically Conductive Foam Tape",
    price: 15469,
    categorySlug: "emi-shielding-material",
    description:
      "Conductive foam tape that is self adhesive and double sided, providing electrical conductivity and EMI shielding for industrial use.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Black" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Type", value: "Double Sided" },
    ],
  },
  {
    slug: "mu-copper-tape",
    name: "MU-COPPER TAPE",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "Many EMI problems can be solved with MU copper tape - a self adhesive, double sided copper tape for packaging and shielding applications.",
    specs: [
      { label: "Type", value: "Double Sided" },
      { label: "Material", value: "Copper" },
      { label: "Size", value: "1 inch" },
      { label: "Usage/Application", value: "Packaging" },
      { label: "Adhesive", value: "Self Adhesive" },
    ],
  },
  {
    slug: "non-woven-semi-conductive-tape",
    name: "Non-Woven Semi Conductive Tape",
    price: 10000,
    categorySlug: "emi-shielding-material",
    description:
      "Non-woven semi conductive tape, self adhesive and double sided, for industrial EMI and static control applications.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Black" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Model Name/Number", value: "Double Sided" },
    ],
  },
  {
    slug: "semiconductive-conductor-separation-tape",
    name: "SEMICONDUCTIVE CONDUCTOR SEPARATION TAPE",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "Semiconductive conductor separation tape, self adhesive and double sided, offered new for industrial purpose applications.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Black" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "I Deal In", value: "New Only" },
      { label: "Type", value: "Double Sided" },
    ],
  },
  {
    slug: "silver-aluminum-foil",
    name: "Silver Aluminum Foil",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "Specially developed for aluminium housings and frames to prevent galvanic corrosion, with other applications in EMI shielding.",
    specs: [
      { label: "Material", value: "Aluminium" },
      { label: "Usage/Application", value: "Aluminium housings and frames" },
      { label: "Feature", value: "Prevents galvanic corrosion" },
    ],
  },

  // LUMINARY - GL SPECTIS
  {
    slug: "gl-spectis-1-0",
    name: "GL Spectis 1.0",
    price: 25000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-spectis-spectroradiometers",
    description:
      "GL Spectis 1.0 compact spectroradiometer for accurate photometric and colorimetric measurements of LED and general lighting sources.",
    specs: [
      { label: "Luminous Flux", value: "0.015 to 150 lm" },
      { label: "Signal to Noise Ratio", value: "1000:1" },
      { label: "Optical FWHM", value: "12 nm" },
      { label: "Weight", value: "120 gm" },
      { label: "Number of Pixels", value: "256" },
    ],
  },
  {
    slug: "gl-spectis-1-0-touch",
    name: "GL Spectis 1.0 Touch",
    price: 25000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-spectis-spectroradiometers",
    description:
      "GL Spectis 1.0 Touch spectroradiometer with an integrated touch interface for fast on-site spectral measurements.",
    specs: [
      { label: "Weight", value: "120 gm" },
      { label: "Power Consumption", value: "Greater than 100 mA" },
      { label: "Ambient Temperature", value: "5-35 Degree" },
      { label: "Dimensions", value: "115 mm x 72 mm x ..." },
    ],
  },
  {
    slug: "gl-spectis-5-0-touch",
    name: "GL Spectis 5.0 Touch",
    price: 25000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-spectis-spectroradiometers",
    description:
      "GL Spectis 5.0 Touch high performance spectroradiometer with lithium-ion battery power for portable spectral measurements.",
    specs: [
      { label: "Weight", value: "1500 gm" },
      { label: "Power", value: "Lithium-ion battery 4000 mAh" },
      {
        label: "Spectral Range",
        value: "340-850nm / 200-800nm / 380-1050nm / 200-1050nm",
      },
    ],
  },
  {
    slug: "gl-spectis-6-0",
    name: "GL Spectis 6.0",
    price: 25000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-spectis-spectroradiometers",
    description:
      "GL Spectis 6.0 research grade spectroradiometer with back-thinned CCD sensor for demanding photometric applications.",
    specs: [
      {
        label: "Spectral Range",
        value: "340-850nm / 200-800nm / 380-1050nm / 200-1050nm",
      },
      { label: "Sensor", value: "Back-thinned type CCD image sensor" },
    ],
  },
  {
    slug: "gl-spectis-8-0-spectroradiometer",
    name: "GL Spectis 8.0 Spectroradiometer",
    price: 25000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-spectis-spectroradiometers",
    description:
      "GL Spectis 8.0 premium spectroradiometer with 1 nm optical resolution for high accuracy laboratory spectral measurements.",
    specs: [
      { label: "Spectral Range", value: "360-830 nm" },
      { label: "Optical FWHM", value: "1 nm" },
      { label: "Detector", value: "Back-thinned type CCD image sensor" },
    ],
  },

  // LUMINARY - GL OPTIC SPHERE
  {
    slug: "aluminum-baso4-gl-optic-sphere-205",
    name: "Aluminum / BaSO4 GL Optic Sphere 205",
    price: 92000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-optic-sphere-integrating-sphere",
    description:
      "205 mm integrating sphere with aluminum body and BaSO4 coating for luminous flux and color measurements.",
    specs: [
      { label: "Material", value: "Aluminum / BaSO4" },
      { label: "Weight", value: "3.3 kg" },
      { label: "Sphere Inner Diameter", value: "205 mm" },
      { label: "Entrance Aperture Diameter", value: "50 mm" },
    ],
  },
  {
    slug: "baso4-gl-optic-sphere-1100",
    name: "BaSO4 GL Optic Sphere 1100",
    price: 92000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-optic-sphere-integrating-sphere",
    description:
      "1100 mm BaSO4 coated integrating sphere for large luminaire photometric and colorimetric testing.",
    specs: [
      { label: "Material", value: "BaSO4" },
      { label: "Weight", value: "60 kg" },
      { label: "Sphere Inside Diameter", value: "1100 mm" },
      { label: "Entrance Aperture Diameter", value: "168 mm" },
    ],
  },
  {
    slug: "baso4-gl-optic-sphere-500",
    name: "BaSO4 GL Optic Sphere 500",
    price: 92000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-optic-sphere-integrating-sphere",
    description:
      "500 mm BaSO4 coated integrating sphere, ideal for mid-size luminaire testing as per LM-79.",
    specs: [
      { label: "Material", value: "BaSO4" },
      { label: "Weight", value: "17.5 kg" },
      { label: "Sphere Inside Diameter", value: "500 mm" },
      { label: "Entrance Aperture Diameter", value: "80 mm" },
    ],
  },
  {
    slug: "gl-opti-sphere-48",
    name: "GL Opti Sphere 48",
    price: 92000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-optic-sphere-integrating-sphere",
    description:
      "Compact 48 mm integrating sphere with aluminum body and BaSO4 coating for small source measurements.",
    specs: [
      { label: "Material", value: "Aluminum / BaSO4" },
      { label: "Weight", value: "0.126 kg" },
      { label: "Sphere Inner Diameter", value: "48 mm" },
      { label: "Entrance Aperture Diameter", value: "9 mm" },
    ],
  },
  {
    slug: "gl-optic-sphere-2000",
    name: "GL Optic Sphere 2000",
    price: 720000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "gl-optic-sphere-integrating-sphere",
    description:
      "2000 mm carbon steel integrating sphere with barium sulfate coating for large scale photometric testing.",
    specs: [
      { label: "Material", value: "Carbon Steel / Barium sulfate (BaSO4)" },
      { label: "Weight", value: "200 kg" },
      { label: "Sphere Inside Diameter", value: "2000 mm" },
    ],
  },

  // SPRING HAMMER
  {
    slug: "spring-hammer-test-apparatus-as-per-iec-60068-2-75",
    name: "Spring Hammer Test Apparatus as per IEC 60068-2-75 (0.14 J / 0.2 J / 0.35 J / 0.5 J / 0.7 J and 1.0 J Impact Energy)",
    price: 120000,
    categorySlug: "spring-hammer-test-apparatus",
    description:
      "Spring impact hammer test apparatus delivering 0.14 J, 0.2 J, 0.35 J, 0.5 J, 0.7 J and 1.0 J impact energy as per IEC 60068-2-75.",
    specs: [
      { label: "Type of Hammer", value: "Spring Impact Hammer" },
      { label: "Finishing", value: "Polished" },
      { label: "Packaging Type", value: "Box" },
      { label: "Brand", value: "Standard Test Equipment" },
      { label: "Standard", value: "IEC 60068-2-75" },
    ],
  },
  {
    slug: "universal-spring-hammer-0-14-1-joule-as-per-iec-60068-2-75",
    name: "Universal Spring Hammer (0.14 - 1 Joule) as per IEC 60068-2-75",
    price: 121000,
    categorySlug: "spring-hammer-test-apparatus",
    description:
      "Universal spring hammer covering 0.14 to 1 Joule impact energy ranges as per IEC 60068-2-75 for enclosure impact testing.",
    specs: [
      { label: "Impact Energy", value: "0.14 - 1 Joule" },
      { label: "Standard", value: "IEC 60068-2-75" },
    ],
  },

  // IP TEST APPARATUS
  {
    slug: "ip-testing",
    name: "IP Testing",
    price: 30000,
    categorySlug: "ip-test-apparatus",
    description:
      "Complete IP testing solutions for ingress protection verification of enclosures, covering solid particle and water ingress testing.",
    specs: [
      { label: "Type of Product", value: "Business Products" },
      { label: "Chain of Activities", value: "Innovation" },
    ],
  },
  {
    slug: "rain-test-chamber-ip-x1-x2-as-per-iec-60529",
    name: "Rain Test Chamber (IP X1/X2) as per IEC 60529",
    price: 30000,
    categorySlug: "ip-test-apparatus",
    description:
      "Rain test chamber for IP X1 and IP X2 dripping water testing as per IEC 60529, manufactured by Standard Test Equipment.",
    specs: [
      { label: "Usage/Application", value: "For IP X1/X2 Testing" },
      { label: "Brand", value: "Standard Test Equipment" },
      { label: "Minimum Order Quantity", value: "1" },
      { label: "Standard", value: "IEC 60529" },
    ],
  },
  {
    slug: "sand-and-dust-chamber-as-per-iec-60529",
    name: "Sand and Dust Chamber as per IEC 60529",
    price: 30000,
    categorySlug: "ip-test-apparatus",
    description:
      "Sand and dust chamber for IP 5X and 6X dust protection testing as per IEC 60529 with structured design for reliable results.",
    specs: [
      { label: "Brand", value: "Standard Test Equipment" },
      { label: "Specifications", value: "IP 5X & 6X Testing" },
      { label: "Standard", value: "IEC 60529" },
    ],
  },
  {
    slug: "ss-ip-x7-x8-immersion-water-tank-as-per-60529",
    name: "SS Standard Test Equipment IP X7-X8 Immersion Water Tank as per 60529",
    price: 30000,
    categorySlug: "ip-test-apparatus",
    description:
      "Stainless steel immersion water tank for IP X7 and IP X8 water ingress testing as per IEC 60529.",
    specs: [
      { label: "Material", value: "SS" },
      { label: "Brand", value: "Standard Test Equipment" },
      { label: "Storage Material", value: "Water" },
      { label: "Diameter", value: "600 mm (approx.)" },
    ],
  },
  {
    slug: "turn-table-for-ip-testing-for-laboratory",
    name: "Turn Table for IP Testing, For Laboratory",
    price: 90000,
    categorySlug: "ip-test-apparatus",
    description:
      "Stainless steel turn table for laboratory IP testing with 15 kg load capacity, suitable for all IP degree tests.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Usage/Application", value: "Laboratory" },
      { label: "Type of Testing Machines", value: "IP Testing" },
      { label: "Load Capacity", value: "15 kg" },
    ],
  },

  // LABORATORY TEST APPARATUS
  {
    slug: "ball-pressure-test-apparatus",
    name: "Ball Pressure Test Apparatus",
    price: 20000,
    categorySlug: "laboratory-test-apparatus",
    description:
      "Ball pressure test apparatus made of stainless steel for verification of heat resistance of materials as per IEC 60695.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Packaging Type", value: "Box" },
      { label: "Display Type", value: "Analog" },
      { label: "I Deal In", value: "New Only" },
      { label: "Referred Standards", value: "IEC 60695" },
    ],
    latest: true,
  },
  {
    slug: "dielectric-strength-tester-as-per-iec-62368",
    name: "Dielectric Strength Tester as per IEC 62368",
    price: 35000,
    categorySlug: "laboratory-test-apparatus",
    description:
      "Dielectric strength tester for industrial applications as per IEC 62368, built by Standard Test Equipment for accurate hi-pot testing.",
    specs: [
      { label: "Usage/Application", value: "Industrial" },
      { label: "Brand", value: "Standard Test Equipment" },
      { label: "Metal Pole Diameter", value: "5 ± 0.1 mm" },
      { label: "Metal Club Weight", value: "100 ± 2 g" },
      { label: "Max Measure Range", value: "20 mm" },
      { label: "Max Strength", value: "< 12 KV (altitude below 2000 m)" },
      { label: "Creepage Distances", value: "> 35 mm" },
      { label: "Standard", value: "IEC 60065" },
    ],
    latest: true,
  },
  {
    slug: "salt-spray-test-chamber",
    name: "Salt Spray Test Chamber",
    price: 30000,
    categorySlug: "laboratory-test-apparatus",
    description:
      "Salt spray test chamber for corrosion resistance testing available in multiple inner box sizes: 600 x 450 x 400 mm, 900 x 600 x 500 mm and more.",
    specs: [
      {
        label: "Inner Box Size Options",
        value:
          "600 x 450 x 400 (W x D x H) mm / 900 x 600 x 500 (W x D x H) mm",
      },
      { label: "Test", value: "Salt Spray / NSS" },
    ],
    latest: true,
  },
];

export const productImages: Record<string, string> = {
  "black-test-probe-13-short-test-pin-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791613912/7._Test_Probe_-13_Fig-9_as_per_IEC_61032_q2jxgn.jpg",
  "ip-1x-test-probe-as-per-a-as-iec-60529-and-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791614244/iec-60529-and-61032-ip-1x-test-probe-500x500-330x409_kix3wa.jpg",
  "ip4x-test-probe-d-as-per-iec-60259-and-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791778109/unnamed_fkptu2.jpg",
  "test-probe-11-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791778335/unnamed_pblpf0.jpg",
  "test-probe-12-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791778404/unnamed_gi6nda.jpg",
  "ball-pressure-test-apparatus":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791779142/d9816ece-9273-4af3-8bd4-8717add63777_ydynqd.png",
  "dielectric-strength-tester-as-per-iec-62368":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791779126/unnamed_nvzlsu.jpg",
  "salt-spray-test-chamber":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791779792/9f59f11f-72bd-48ca-8aa2-24d881d02bf6_okgyoi.png",
  "3mm-long-test-pin-probe-as-per-iec-61010":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791779701/unnamed_dzreb4.jpg",
  "4mm-long-test-pin-probe-as-per-iec-61010":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791779907/unnamed_pbltiz.jpg",
  "test-probe-14-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791779976/unnamed_oet4vp.jpg",
  "test-probe-17-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791780066/unnamed_tnofyz.jpg",
  "test-probe-31-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791780210/11._Test_Probe_31_Fig-14_as_per_IEC_61032_rqfqwy.jpg",
  "test-probe-32-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791780249/12._Test_Probe_32_as_per_IEC_61032_gb1u2h.jpg",
  "test-probe-43-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791780316/14._Test_Probe_43_as_per_IEC_61032_jskzgx.jpg",
  "test-probe-with-round-end-as-per-iec-60529":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791780378/15._Test_Prob-B_Test_finger_Fig.-2._IEC_60529_61032._k75hwb.jpg",
  "test-probe-41-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791780540/16._Test_prob-41_Fig-16_as_per_IEC_61032_w2dw2k.jpg",
  "aluminium-tape":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791782545/aluminium-tape-330x409_yzi5xx.jpg",
  "amucor-foil-and-tape":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791782650/amucor-foil-and-tape-330x409_vsifsd.jpg",
  "black-amucor-foil-with-a-reinforcement-net":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783118/amucor-foil-with-a-reinforcement-net-500x500-330x409_hs4vsv.jpg",
  "black-mounting-tape":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783167/mounting-tape-330x409_yqxthc.jpg",
  "black-mu-ferro-sd-shielding-foil":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783207/mu-ferro-sd-shielding-foil-330x409_xp9vsa.jpg",
  "conductive-non-woven-fabric":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783237/conductive-non-woven-fabric-500x500-330x409_dsvbwc.jpg",
  "conductive-textile-tape":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783316/conductive-textile-330x409_wi1scw.jpg",
  "contact-surface-tape":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783350/contact-surface-tape-330x409_aactuk.png",
  "electrically-conductive-foam-tape":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783403/electrically-conductive-foam-tape-330x409_f4h7ad.jpg",
  "mu-copper-tape":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783438/mu-copper-tape-330x409_rtcxes.jpg",
  "non-woven-semi-conductive-tape":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783474/semiconductive-non-woven-330x409_le6m8x.jpg",
  "semiconductive-conductor-separation-tape":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783474/semiconductive-non-woven-330x409_le6m8x.jpg",
  "ip-testing":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783797/ip-testing-1000x1000-330x409_pizaaa.png",
  "rain-test-chamber-ip-x1-x2-as-per-iec-60529":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783863/rain-test-chamber-330x409_u2dpxq.jpg",
  "sand-and-dust-chamber-as-per-iec-60529":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783969/dust-chamber-pic-330x409_wqpesj.jpg",
  "ss-ip-x7-x8-immersion-water-tank-as-per-60529":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791784123/img-20190112-110525-330x409_jgw71g.jpg",
  "turn-table-for-ip-testing-for-laboratory":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791784342/unnamed_hgydhd.jpg",
  "spring-hammer-test-apparatus-as-per-iec-60068-2-75":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791784480/0-2-j-1-j-spring-hammer-test-apparatus-500x500-330x409_yi7olu.jpg",
  "universal-spring-hammer-0-14-1-joule-as-per-iec-60068-2-75":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791784526/universal-spring-hammer-0-14-0-7-joule--330x409_asyltz.jpg",
  "gl-spectis-1-0":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791784676/1-330x409_lianuh.jpg",
  "gl-spectis-1-0-touch":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791784809/image_0901-330x409_dn46lx.jpg",
  "gl-spectis-6-0":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791785205/32-330x409_jgdh2a.jpg",
  "gl-spectis-5-0-touch":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791785676/34-330x409_drhg5j.jpg",
  "gl-spectis-8-0-spectroradiometer":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791785676/34-330x409_drhg5j.jpg",
  "aluminum-baso4-gl-optic-sphere-205":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791786286/gl-opti-sphere-205-330x409_bxusfn.jpg",
  "baso4-gl-optic-sphere-1100":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791786389/gl-opti-sphere-1100-330x409_sw0nt3.jpg",
  "baso4-gl-optic-sphere-500":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791786594/gl-opti-sphere-500-330x409_kavb3h.jpg",
  "gl-opti-sphere-48":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791786767/48-gl-optic-sphere-500x500-330x409_k4row9.jpg",
  "gl-optic-sphere-2000":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791786807/gl-opti-sphere-2000-330x409_ee1wog.jpg",
  "white-ip-2x-test-finger-test-probe-b-as-per-iec-60529-and-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791786934/iec-60529-and-61032-ip-2x-test-finger-test-probe-500x500-330x409_qnykvj.jpg",
  "white-stainless-steel-ip3x-test-probe-c-as-per-iec-60529-and-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791786978/iec-60529-and-61032-ip3x-test-probe-500x500-330x409_ytv2ms.jpg",
};

export function formatPrice(price: number): string {
  return `Rs ${price.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getSubcategory(slug: string): Subcategory | undefined {
  return subcategories.find((s) => s.slug === slug);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((p) => p.categorySlug === slug);
}

export function getProductsBySubcategory(slug: string): Product[] {
  return products.filter((p) => p.subcategorySlug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getLatestProducts(): Product[] {
  return products.filter((p) => p.latest);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter(
      (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug,
    )
    .slice(0, limit);
}
