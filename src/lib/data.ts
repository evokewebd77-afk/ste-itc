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

export type DetailItem = { title: string; text: string };

export type Product = {
  slug: string;
  name: string;
  price: number;
  categorySlug: string;
  subcategorySlug?: string;
  description: string;
  specs?: { label: string; value: string }[];
  keyFeatures?: DetailItem[];
  whatItDoes?: DetailItem[];
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
  email: "sales@standardtestequipment.net",
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
  heroBg: "",
  intro:
    "Welcome to Standard Test Equipment. Please read these terms and conditions carefully before using our website, or services.",
};

export const categories: Category[] = [
  {
    slug: "test-probes-and-test-pins",
    name: "Test Probes & Test Pins",
    description:
      "We manufacture the complete range of IEC 60529 and IEC 61032 test probes and test pins from Mohali, India — IP 1X Test Probe A (50 mm sphere), IP 2X Test Finger Probe B, IP 3X Test Probe C, IP 4X Test Probe D, the round-end probe as per IEC 60529, Test Probes 11, 12, 13, 14, 17, 31, 32, 41 and 43, plus 3 mm and 4 mm long test pin probes as per IEC 61010. These standardised test appliances verify protection against access to hazardous parts in household appliances, controlgear, luminaires and enclosures.",
    count: 25,
  },
  {
    slug: "emi-shielding-material",
    name: "EMI Shielding Material",
    description:
      "Pioneers in the industry, we offer conductive non-woven fabric, contact surface tape, non-woven semi conductive tape, Amucor foil and tape, electrically conductive foam tape and conductive textile tape from India.",
    count: 13,
  },
  {
    slug: "testing-apparatus-luminary-test",
    name: "Luminaire Testing Apparatus (IES LM-79 and more)",
    description:
      "Photometric and spectroradiometric testing solutions for luminaire testing as per LM-79 and more, including spectroradiometers, integrating spheres and standard test lamp sources.",
    count: 11,
  },
  {
    slug: "spring-hammer-test-apparatus",
    name: "Spring Hammer Test Apparatus",
    description:
      "Our product range includes a wide range of Universal Spring Hammer (0.14 - 1 Joule) as per IEC 60068-2-75 and Spring Hammer Test Apparatus as per IEC 60068-2-75.",
    count: 2,
  },
  {
    slug: "ip-test-apparatus",
    name: "IP Test Apparatus",
    description:
      "Manufacturer of a wide range of products which include the IPX7/IPX8 Immersion Water Tank as per IEC 60529, Rain Test Chamber (IP X1/X2) as per IEC 60529, Sand and Dust Chamber as per IEC 60529 and Turn Table for IP Testing.",
    count: 12,
  },
  {
    slug: "laboratory-test-apparatus",
    name: "Laboratory Test Apparatus",
    description:
      "Laboratory test apparatus for ball pressure, dielectric strength and salt spray corrosion testing as per applicable IEC standards.",
    count: 8,
  },
];

export const subcategories: Subcategory[] = [
  {
    slug: "gl-spectis-spectroradiometers",
    name: "GL Spectis (Spectroradiometers)",
    parentId: "testing-apparatus-luminary-test",
  },
  {
    slug: "gl-optic-sphere-integrating-sphere",
    name: "GL OPTI SPHERE (Integrating Sphere)",
    parentId: "testing-apparatus-luminary-test",
  },
  {
    slug: "standard-test-lamp-sources",
    name: "Standard Test Lamp Sources",
    parentId: "testing-apparatus-luminary-test",
  },
];

export const products: Product[] = [
  // TEST PROBES & TEST PINS
  {
    slug: "3mm-long-test-pin-probe-as-per-iec-61010",
    name: "3mm Long Test Pin Probe as per IEC 61010",
    price: 12000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "The 3 mm Long Test Pin Probe is a rigid, insulated-handle test pin manufactured in-house to IEC 61010 for verifying that pre-set controls and small openings in laboratory and industrial equipment cannot be reached by a thin tool. A 3 mm stainless steel pin with a plastic head and circular stop baffle is supplied in a protective storage box, allowing safe, repeatable access-protection testing in accredited test laboratories.",
    specs: [
      { label: "Size", value: "3mm" },
      { label: "Material", value: "Steel" },
      { label: "Color", value: "White" },
      { label: "Packaging Type", value: "Box" },
      { label: "Handle Material", value: "Plastic" },
    ],
    keyFeatures: [
      {
        title: "Shape and Size",
        text: "Rigid stainless steel pin 3 mm in diameter, manufactured to the dimensions specified in IEC 61010 for testing pre-set controls under Clause 6.2.4, supplied in a protective storage box.",
      },
      {
        title: "Handle and Stop",
        text: "Fitted with an insulated plastic handle and a circular stop (baffle) that prevents the tester from pushing the pin in too far, keeping hands away from live internals.",
      },
      {
        title: "Testing Force",
        text: "Gently inserted into openings with light, controlled pressure (about 1 Newton) to simulate a thin tool or probe reaching past the enclosure barrier.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "Used to verify that pre-set controls and small openings in laboratory equipment, power supplies and control panels cannot be reached by a thin tool that could contact a hazardous live part inside.",
      },
      {
        title: "Pass / Fail",
        text: "If the 3 mm pin touches a live terminal or hazardous circuit inside the enclosure, the product fails the IEC 61010 safety test and must be redesigned so users are protected from electric shock.",
      },
    ],
  },
  {
    slug: "4mm-long-test-pin-probe-as-per-iec-61010",
    name: "4mm Long Test Pin Probe as per IEC 61010",
    price: 10000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "The 4 mm Long Test Pin Probe is manufactured to IEC 61010 as a rigid 4 mm diameter stainless steel pin, 100 mm long, fitted with a plastic head, insulated handle and limiting stop for controlled insertion into openings. It is used by test houses and manufacturers to confirm that openings in laboratory equipment, control panels and power supplies do not allow access to hazardous live parts, and is supplied in protective boxed packaging for laboratory use.",
    specs: [
      { label: "Size", value: "4mm" },
      { label: "Material", value: "Steel" },
      { label: "Packaging Type", value: "Box" },
      { label: "Color", value: "White" },
      { label: "Head Material", value: "Plastic" },
    ],
    keyFeatures: [
      {
        title: "Shape and Size",
        text: "Rigid stainless steel pin, 4 mm in diameter and 100 mm long as described in the IEC 61010 product standard for testing access to hazardous parts through equipment openings.",
      },
      {
        title: "Handle and Stop",
        text: "Insulated plastic head with a circular protective guard (baffle) so the pin cannot be inserted past its intended depth and the tester is shielded from shock.",
      },
      {
        title: "Testing Force",
        text: "Applied to openings with light, controlled pressure (about 1 Newton), mimicking a thin tool or finger probing the casing without deforming it.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "Testers push this pin into any top or side openings of lab equipment, power supplies or control panels to confirm the enclosure stops access to internal live parts.",
      },
      {
        title: "Pass / Fail",
        text: "If the pin contacts a dangerous live wire or terminal inside, the product fails the safety test and the enclosure design must be corrected before the product can be certified.",
      },
    ],
  },
  {
    slug: "black-test-probe-13-short-test-pin-as-per-iec-61032",
    name: "Brown Test Probe 13 (Short Test Pin) as per IEC 61032",
    price: 7000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 13 is the short test pin of Figure 9 of IEC 61032, manufactured in hardened steel with an insulated handle and a circular stop baffle that limits insertion depth. It is the specified appliance for verifying protection against access to hazardous parts — live conductors and hazardous moving mechanisms — through the openings of household appliances, controlgear and IT equipment, and is finished in brown for clear identification on the test bench.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 9)" },
      { label: "Type", value: "Short Test Pin" },
      { label: "Color", value: "Brown" },
    ],
    featured: true,
    keyFeatures: [
      {
        title: "Standardised Design",
        text: "Built exactly to Figure 9 (Test Probe 13) of IEC 61032 — a rigid 4 mm diameter short test pin with a limiting stop for repeatable, standard-compliant testing.",
      },
      {
        title: "Construction",
        text: "Hardened steel pin with an insulated handle and circular stop baffle that controls insertion depth, finished in brown for easy identification in the test lab.",

      },
      {
        title: "Application Range",
        text: "Supplemental probe used across household appliance, IT equipment and machinery standards wherever IEC 61032 access protection is required.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The probe is inserted into enclosure openings to verify that openings smaller than 12 mm (and larger than 4 mm) do not allow access to hazardous moving or live parts.",
      },
      {
        title: "Pass / Fail",
        text: "If the pin passes through an opening and reaches a hazardous part, the enclosure fails the access-protection test and the opening must be reduced, baffled or guarded.",
      },
    ],
  },
  {
    slug: "ip1x-test-probe-a-50-mm-sphere-as-per-iec-60529-and-61032",
    name: "IP1X Test Probe A (50 mm Sphere) as per IEC 60529 & IEC 61032",
    price: 12000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "The IP1X Test Probe A is the 50 mm diameter rigid sphere specified for the first digit of the IP code in IEC 60529 and IEC 61032, built from precision-machined stainless steel on an insulated handle and supplied boxed for laboratory use. It is pressed against enclosure openings to confirm that the back of a hand cannot reach live or moving parts, making it an essential instrument for ingress-protection and access-safety testing laboratories.",
    specs: [
      { label: "Standard", value: "IEC 60529 & IEC 61032" },
      { label: "Probe Number", value: "Test Probe A (IP1X)" },
      { label: "Packaging Type", value: "Box" },
    ],
    featured: true,
    keyFeatures: [
      {
        title: "Standardised Design",
        text: "Test Probe A (IP1X) per IEC 60529 and IEC 61032 — a 50 mm diameter rigid sphere representing the back of a human hand, the specified test object for the first IP digit.",
      },
      {
        title: "Construction",
        text: "Precision-machined stainless steel sphere on an insulated handle, supplied boxed for laboratory use and repeatable calibration checks.",
      },
      {
        title: "Force Control",
        text: "Tested against the enclosure with the standard specified force so results are consistent between laboratories and manufacturers.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The probe is pressed against enclosure openings to verify protection against ingress of the back of a hand — confirming openings larger than 50 mm are guarded so a hand cannot reach live or moving parts.",
      },
      {
        title: "Pass / Fail",
        text: "If the 50 mm sphere enters the enclosure and can access a hazardous part, the product fails the IP1X test and the openings must be reduced or guarded.",
      },
    ],
  },
  {
    slug: "ip4x-test-probe-d-as-per-iec-60529-and-61032",
    name: "IP4X Test Probe D as per IEC 60529 & IEC 61032",
    price: 15000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "The IP4X Test Probe D is manufactured to IEC 60529 and IEC 61032 as a rigid 1.0 mm diameter, 100 mm long stainless steel wire with handle and depth stop, built to the tolerances required for consistent pass/fail results. It is applied to control panels, luminaires, enclosures and household electronics to verify protection against access with small tools and wires, and every unit is checked and packed at our Mohali facility.",
    specs: [
      { label: "Standard", value: "IEC 60529 & IEC 61032" },
      { label: "Probe Number", value: "Test Probe D (IP4X)" },
    ],
    featured: true,
    keyFeatures: [
      {
        title: "Standardised Design",
        text: "Test Probe D (IP4X) per IEC 60529 and IEC 61032 — a rigid 1.0 mm diameter wire, 100 mm long, the specified test object for the fourth IP digit.",
      },
      {
        title: "Construction",
        text: "Straight stainless steel wire with handle and depth stop, manufactured to the tolerance required by the standard for consistent pass/fail results.",
      },
      {
        title: "Application Range",
        text: "Used on control panels, luminaires, enclosures and household electronics to verify protection against access with small tools and wires.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The 1.0 mm wire is inserted into enclosure openings (down to 1 mm) to confirm that neither wires nor tools can reach hazardous live or moving parts inside.",
      },
      {
        title: "Pass / Fail",
        text: "If the probe enters an opening and contacts a hazardous part, the enclosure fails the IP4X access test and the opening size must be reduced or blocked internally.",
      },
    ],
  },
  {
    slug: "test-probe-11-as-per-iec-61032",
    name: "Test Probe 11 as per IEC 61032",
    price: 7000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 11 is the rigid unjointed test finger of IEC 61032 Figure 7, 12 mm in diameter and 80 mm long with a 50 mm baffle, applied with a 50 N test force. It verifies protection of persons against access to hazardous live or mechanical parts, and is also used to check the mechanical strength of openings in enclosures and internal barriers. Supplied by Standard Test Equipment, Mohali, and referenced by product safety standards such as IEC 60335 and IEC 61010.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 7)" },
      { label: "Probe Number", value: "11" },
      { label: "Type", value: "Unjointed test finger" },
      { label: "Finger Diameter", value: "12 mm" },
      { label: "Finger Length", value: "80 mm" },
      { label: "Test Force", value: "50 N" },
    ],
    featured: true,
    keyFeatures: [
      {
        title: "IEC 61032 Figure 7 Design",
        text: "Rigid unjointed test finger 12 mm in diameter and 80 mm long, with a 50 mm diameter stop baffle, made to the dimensions in IEC 61032 Figure 7.",
      },
      {
        title: "50 N Test Force",
        text: "Applied with the 50 N force specified in the standard so the finger cannot be forced past openings or barriers in a way that would give a false pass.",
      },
      {
        title: "Access and Strength Checks",
        text: "Used to verify protection against access to hazardous parts and to check the mechanical strength of enclosure openings and internal barriers.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The unjointed finger is pressed into slots, seams and ventilation openings of household and similar electrical equipment to check that hazardous live or moving parts cannot be touched.",
      },
      {
        title: "Pass / Fail",
        text: "If the finger reaches a live part or hazardous moving mechanism, the product fails its access-protection requirement and the enclosure must be redesigned.",
      },
    ],
  },
  {
    slug: "test-probe-12-as-per-iec-61032",
    name: "Test Probe 12 As Per IEC 61032",
    price: 8000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 12 is the long test pin of IEC 61032 Figure 8 — a 4 mm diameter cylindrical pin, 50 mm long, with a 25 mm stop baffle. It is intended for appliances, verifying that hazardous live or mechanical parts cannot be touched accidentally by a tool such as a screwdriver or similar pointed object in normal use. The precision steel pin with an insulated handle is manufactured to the standard dimensions so results match those of accredited test houses.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 8)" },
      { label: "Probe Number", value: "12" },
      { label: "Type", value: "Long test pin" },
      { label: "Pin Diameter", value: "4 mm" },
      { label: "Pin Length", value: "50 mm" },
    ],
    featured: true,
    keyFeatures: [
      {
        title: "IEC 61032 Figure 8 Design",
        text: "Long test pin with a 4 mm diameter cylindrical pin, 50 mm long, and a 25 mm stop baffle, made to IEC 61032 Figure 8.",
      },
      {
        title: "Tool-Access Simulation",
        text: "Represents a screwdriver or similar pointed tool that could accidentally touch hazardous live or mechanical parts in normal use.",
      },
      {
        title: "Precision Construction",
        text: "Precision steel pin with an insulated handle, manufactured to IEC 61032 dimensions so results match those of accredited test houses.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The 4 mm long pin is pushed into openings of appliances to verify that a tool of that size cannot reach hazardous live parts or moving mechanisms inside the enclosure.",
      },
      {
        title: "Pass / Fail",
        text: "Contact with a hazardous part means the enclosure fails the access test; openings must be shrunk, baffled or made non-accessible before certification.",
      },
    ],
  },
  {
    slug: "test-probe-14-as-per-iec-61032",
    name: "Test Probe 14 as per IEC 61032",
    price: 6000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 14 is the test bar of IEC 61032 Figure 10, 3 mm wide, 1 mm thick and 80 mm long, applied with a 20 N force. It is intended to verify protection against access to hazardous live parts of socket-outlets through shutters, and is manufactured from hardened steel with an insulated handle and depth stop.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 10)" },
      { label: "Probe Number", value: "14" },
      { label: "Type", value: "Test bar" },
      { label: "Dimensions", value: "3 mm × 1 mm × 80 mm" },
      { label: "Test Force", value: "20 N" },
    ],
    keyFeatures: [
      {
        title: "IEC 61032 Figure 10 Design",
        text: "Test bar 3 mm wide, 1 mm thick and 80 mm long, made to the dimensions in IEC 61032 Figure 10.",
      },
      {
        title: "Socket-Outlet Shutter Testing",
        text: "Intended to verify protection against access to hazardous live parts of socket-outlets through shutters, using the 20 N force specified in the standard.",
      },
      {
        title: "Construction",
        text: "Hardened steel bar with an insulated handle and depth stop for controlled, repeatable insertion.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The 3 mm × 1 mm bar is presented to socket-outlet shutters to verify that the shutter cannot be defeated and no path leads to a hazardous live part.",
      },
      {
        title: "Pass / Fail",
        text: "If the bar passes the shutter and touches a hazardous part, the product fails the access test and the shutter geometry must be corrected.",
      },
    ],
  },
  {
    slug: "test-probe-17-as-per-iec-61032",
    name: "Test Probe 17 as per IEC 61032",
    price: 15000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 17 is the single 0.5 mm diameter test wire of IEC 61032 Figure 11, mounted in an insulated handle. It is intended to verify protection against access to hazardous live parts of electrical toys, where a fine wire rather than a rigid finger is the access hazard. Supplied by Standard Test Equipment, Mohali.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 11)" },
      { label: "Probe Number", value: "17" },
      { label: "Type", value: "Test wire" },
      { label: "Wire Diameter", value: "0.5 mm" },
    ],
    keyFeatures: [
      {
        title: "IEC 61032 Figure 11 Design",
        text: "Single 0.5 mm diameter test wire, made to the wire diameter and geometry specified in IEC 61032 Figure 11.",
      },
      {
        title: "Electrical Toy Testing",
        text: "Intended to verify protection against access to hazardous live parts of electrical toys, where a fine wire is the specified access hazard.",
      },
      {
        title: "Insulated Handle",
        text: "The test wire is mounted in an insulated handle for safe, controlled application during access testing.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The 0.5 mm test wire is inserted into openings of electrical toys to check that a fine wire cannot reach hazardous live internal parts.",
      },
      {
        title: "Pass / Fail",
        text: "If the test wire touches a hazardous part, the toy fails the access test and the design must block fine-wire entry — for example with baffles or finer mesh.",
      },
    ],
  },
  {
    slug: "test-probe-31-as-per-iec-61032",
    name: "Test Probe 31 as per IEC 61032",
    price: 13000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 31 is the test cone of IEC 61032 Figure 14, with a 25 mm diameter probe rod 80 mm long, a 60 mm front baffle and a 110 mm rear baffle, applied with a 50 N force. It is intended to verify protection against access to hazardous mechanical parts of the grinding system of food waste disposal units.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 14)" },
      { label: "Probe Number", value: "31" },
      { label: "Type", value: "Test cone" },
      { label: "Rod Diameter", value: "25 mm" },
      { label: "Rod Length", value: "80 mm" },
      { label: "Baffle Diameters", value: "60 mm / 110 mm" },
      { label: "Test Force", value: "50 N" },
    ],
    keyFeatures: [
      {
        title: "IEC 61032 Figure 14 Test Cone",
        text: "Cone with a 25 mm diameter rod, 60 mm front baffle and 110 mm rear baffle, made to the dimensions in IEC 61032 Figure 14.",
      },
      {
        title: "50 N Test Force",
        text: "Applied with the 50 N force specified in the standard for repeatable access checks.",
      },
      {
        title: "Food Waste Disposal Grinders",
        text: "Intended to verify protection against access to hazardous mechanical parts of the grinding system of food waste disposal units.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The cone is applied to the grinding-system openings of food waste disposal units to verify that hazardous mechanical parts cannot be reached.",
      },
      {
        title: "Pass / Fail",
        text: "Contact with the hazardous part means a fail — the opening or guard must be redesigned so the test cone cannot gain access.",
      },
    ],
  },
  {
    slug: "test-probe-32-as-per-iec-61032",
    name: "Test Probe 32 as per IEC 61032",
    price: 11000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 32 is the test thorn (rod) of IEC 61032 Figure 15 — a 25 mm diameter rod with a 50 mm stop baffle, applied with a 30 N force. It is intended to verify the protection provided by fan guards against access to hazardous mechanical parts. The precision-machined rod with an insulated handle is manufactured to the figure dimensions so results are comparable with accredited laboratories.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 15)" },
      { label: "Probe Number", value: "32" },
      { label: "Type", value: "Test thorn (rod)" },
      { label: "Rod Diameter", value: "25 mm" },
      { label: "Baffle Diameter", value: "50 mm" },
      { label: "Test Force", value: "30 N" },
    ],
    keyFeatures: [
      {
        title: "IEC 61032 Figure 15 Test Thorn",
        text: "25 mm diameter rod with a 50 mm stop baffle, made to the dimensions in IEC 61032 Figure 15.",
      },
      {
        title: "30 N Test Force",
        text: "Applied with the 30 N force specified in the standard for consistent access checks.",
      },
      {
        title: "Fan Guard Protection",
        text: "Intended to verify the protection provided by fan guards against access to hazardous mechanical parts.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The test thorn is presented to fan guards to confirm that hazardous mechanical parts cannot be reached through the guard.",
      },
      {
        title: "Pass / Fail",
        text: "If the rod reaches a hazardous moving part, the product fails the access-protection test and the guard must be redesigned.",
      },
    ],
  },
  {
    slug: "test-probe-41-as-per-iec-61032",
    name: "Test Probe 41 As Per IEC 61032",
    price: 13000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 41 is the test cone of IEC 61032 Figure 16, a 30 mm diameter probe with an insulated handle, used without appreciable force. It is intended to verify protection against access to hot or glowing heating elements, and is manufactured to the dimensions and tolerances of the standard for laboratory-grade repeatability.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 16)" },
      { label: "Probe Number", value: "41" },
      { label: "Type", value: "Test cone" },
      { label: "Diameter", value: "30 mm" },
    ],
    keyFeatures: [
      {
        title: "IEC 61032 Figure 16 Test Cone",
        text: "30 mm diameter test cone, made to the dimensions in IEC 61032 Figure 16.",
      },
      {
        title: "Hot and Glowing Parts",
        text: "Intended to verify protection against access to hot or glowing heating elements, applied without appreciable force.",
      },
      {
        title: "Insulated Handle",
        text: "Durable steel construction with an insulated handle for safe, repeatable testing.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The test cone is presented to openings around hot or glowing heating elements to verify that they cannot be reached.",
      },
      {
        title: "Pass / Fail",
        text: "Touching a hot or glowing part with the probe is a failure; the opening, guard or interlock must be redesigned until the probe no longer gains access.",
      },
    ],
  },
  {
    slug: "test-probe-43-as-per-iec-61032",
    name: "Test Probe 43 as per IEC 61032",
    price: 13000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 43 is the test bar of IEC 61032 Figure 17, 50 mm wide, 5 mm thick and 80 mm long, used without appreciable force. It is intended to verify the protection of fixed and portable visibly glowing radiant heaters against access to hot surfaces, and is supplied boxed for safe storage and transport between test stations.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig. 17)" },
      { label: "Probe Number", value: "43" },
      { label: "Type", value: "Test bar" },
      { label: "Dimensions", value: "50 mm × 5 mm × 80 mm" },
      { label: "Material", value: "Stainless Steel" },
    ],
    keyFeatures: [
      {
        title: "IEC 61032 Figure 17 Test Bar",
        text: "Test bar 50 mm wide, 5 mm thick and 80 mm long, made to the dimensions in IEC 61032 Figure 17.",
      },
      {
        title: "Radiant Heater Protection",
        text: "Intended to verify the protection of fixed and portable visibly glowing radiant heaters against access to hot surfaces.",
      },
      {
        title: "Construction",
        text: "Polished stainless steel bar with an insulated handle, supplied boxed for safe storage and transport.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The test bar is presented to the openings and guards of visibly glowing radiant heaters to verify that hot surfaces cannot be reached.",
      },
      {
        title: "Pass / Fail",
        text: "If the bar reaches a hot surface, the product fails and the opening, guard or clearance must be redesigned to block access.",
      },
    ],
  },
  {
    slug: "test-probe-with-round-end-as-per-iec-60529",
    name: "Test Probe With Round End As Per IEC 60529",
    price: 10000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "The Test Probe with Round End is manufactured to IEC 60529 for ingress-protection and access testing of enclosures, with a polished stainless steel body and rounded head and end so that the probe never cuts, gouges or damages seals and mating surfaces. It is used in IP testing laboratories wherever a smooth, rounded rigid probe is specified for opening and access checks, and is packed in a protective box.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Color", value: "White" },
      { label: "Pack Type", value: "Box" },
      { label: "Finish Type", value: "Polished" },
      { label: "Head Shape", value: "Round" },
      { label: "End Shape", value: "Round" },
    ],
    keyFeatures: [
      {
        title: "Standardised Design",
        text: "Round-end test probe manufactured to the requirements of IEC 60529 for ingress-protection and access testing of enclosures.",
      },
      {
        title: "Construction",
        text: "Polished stainless steel body with rounded head and end so the probe cannot cut or gouge the enclosure, packed in a protective box.",
      },
      {
        title: "Application Range",
        text: "Used in IP testing laboratories wherever a smooth, rounded rigid probe is specified for opening and access checks.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The probe is applied to enclosure openings to verify access protection, with its rounded end ensuring the test does not damage seals or surfaces while still detecting unsafe openings.",
      },
      {
        title: "Pass / Fail",
        text: "If the probe reaches a hazardous part inside the enclosure, the product fails the access test and the opening must be reduced, baffled or guarded.",
      },
    ],
  },
  {
    slug: "white-ip-2x-test-finger-test-probe-b-as-per-iec-60529-and-61032",
    name: "White IP 2X-Test Finger Test Probe B As Per IEC 60529 and 61032",
    price: 18000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "The IP 2X-Test Finger Test Probe B is the articulated test finger specified in IEC 60529 and IEC 61032 for the second IP digit, built from stainless steel with two joints that mirror a human finger, an insulated handle and a contact indicator, finished in white as per catalogue specification. Applied with the contact force specified by the standard, it is worked into openings, gaps and around guards to prove that no finger can reach live parts, making it a key instrument for IP and access-safety certification.",
    specs: [
      { label: "Standard", value: "IEC 60529 & IEC 61032" },
      { label: "Probe Number", value: "Test Finger Probe B (IP2X)" },
    ],
    keyFeatures: [
      {
        title: "Standardised Design",
        text: "Test Probe B (IP2X) per IEC 60529 and IEC 61032 — a jointed test finger approximately 12 mm in diameter, the specified test object for the second IP digit.",
      },
      {
        title: "Construction",
        text: "Articulated stainless steel finger with two joints (mirroring a human finger), insulated handle and contact indicator, finished in white as per catalogue specification.",
      },
      {
        title: "Force Control",
        text: "Applied with the standard's specified contact force so the jointed finger behaves consistently and results are reproducible.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The jointed finger is worked into openings, gaps and around guards to simulate a person's finger probing the enclosure, checking for access to live parts (>12.5 mm openings).",
      },
      {
        title: "Pass / Fail",
        text: "If the finger touches a live or hazardous part, the product fails the IP2X test and the opening or guard must be redesigned to block finger access.",
      },
    ],
  },
  {
    slug: "white-stainless-steel-ip3x-test-probe-c-as-per-iec-60529-and-61032",
    name: "White Stainless Steel IP3X-Test Probe C As Per IEC 60529 and 61032",
    price: 12000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "The IP3X-Test Probe C is the rigid 2.5 mm diameter, 100 mm long stainless steel rod specified in IEC 60529 and IEC 61032 for the third IP digit, machined to standard tolerances with a handle and depth stop for repeatable laboratory and factory testing. It is inserted into control panels, luminaires, enclosures and electronics to confirm that tools and similar objects cannot reach hazardous live or moving parts, and is supplied in white finish as per catalogue specification.",
    specs: [
      { label: "Standard", value: "IEC 60529 & IEC 61032" },
      { label: "Probe Number", value: "Test Probe C (IP3X)" },
      { label: "Material", value: "Stainless Steel" },
    ],
    keyFeatures: [
      {
        title: "Standardised Design",
        text: "Test Probe C (IP3X) per IEC 60529 and IEC 61032 — a rigid 2.5 mm diameter rod, 100 mm long, the specified test object for the third IP digit.",
      },
      {
        title: "Construction",
        text: "Solid stainless steel rod with handle and depth stop, machined to standard tolerances for repeatable laboratory and factory testing.",
      },
      {
        title: "Application Range",
        text: "Used on control panels, luminaires, enclosures and electronics to verify protection against access with tools of intermediate size.",
      },
    ],
    whatItDoes: [
      {
        title: "Safety Check",
        text: "The 2.5 mm rod is inserted into enclosure openings (down to 2.5 mm) to confirm that tools and similar objects cannot reach hazardous live or moving parts.",
      },
      {
        title: "Pass / Fail",
        text: "If the probe passes an opening and contacts a hazardous part, the enclosure fails the IP3X test and the opening must be shrunk or baffled internally.",
      },
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
    keyFeatures: [
      {
        title: "Material and Construction",
        text: "Aluminium foil carrier engineered specifically for aluminium housings and frames, available in widths over 100 mm and rolls longer than 50 m for continuous seams.",
      },
      {
        title: "Bonding to Aluminium",
        text: "Formulated adhesive bonds permanently to aluminium surfaces without promoting galvanic attack, maintaining shield integrity at the joint.",
      },
      {
        title: "Industrial Reliability",
        text: "3M-branded material proven in industrial EMI shielding applications, delivering consistent conductivity roll after roll.",
      },
    ],
    whatItDoes: [
      {
        title: "Shielding Continuity",
        text: "Taped over seams, joints and lid edges of aluminium enclosures, it restores the Faraday cage so EMI/RFI cannot leak in or out through the enclosure breaks.",
      },
      {
        title: "Pass / Fail",
        text: "If emissions or immunity measurements fail after assembly, uncovered seams are a common cause — sealing them with this tape must bring the product back within its EMC limits.",
      },
    ],
  },
  {
    slug: "amucor-foil-and-tape",
    name: "Amucor Foil and Tape",
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
    keyFeatures: [
      {
        title: "Double-Sided Shielding",
        text: "Conductive adhesive on both faces means the foil shields and electrically bonds the two surfaces it joins, with no additional fasteners or conductive paste required.",
      },
      {
        title: "Self-Adhesive Application",
        text: "Peel-and-stick application cuts assembly time — no curing, clamping or special surface preparation beyond standard cleaning.",
      },
      {
        title: "Industrial Grade",
        text: "Designed for demanding industrial EMI problems, from enclosure seams and cable-shield terminations to chassis bonding straps.",
      },
    ],
    whatItDoes: [
      {
        title: "EMI Problem Solver",
        text: "Applied wherever an EMI leak or ground-loop problem exists: it closes seams, bonds shield foils, and creates conductive gaskets between metal surfaces.",
      },
      {
        title: "Pass / Fail",
        text: "After shielding with Amucor foil, emissions and immunity are re-measured; the product passes only when radiated and conducted levels sit within the applicable EMC limits.",
      },
    ],
  },
  {
    slug: "black-amucor-foil-with-a-reinforcement-net",
    name: "Amucor Foil With a Reinforcement Net",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "Amucor foil with a reinforcement net for applications in EMI shielding, self adhesive and designed for industrial purpose.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Beige / Silver" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Features", value: "Applications EMI shielding" },
    ],
    keyFeatures: [
      {
        title: "Reinforced Construction",
        text: "Embedded reinforcement net gives the foil exceptional tear and stretch resistance, so it survives handling on curved surfaces and around corners without splitting.",
      },
      {
        title: "Self-Adhesive Backing",
        text: "Conductive self-adhesive backing bonds on contact and maintains electrical continuity between the foil and the substrate.",
      },
      {
        title: "Surface Finish",
        text: "Beige/silver finish suited to visible surfaces where a bright metallic foil would be cosmetically unacceptable.",
      },
    ],
    whatItDoes: [
      {
        title: "Durable EMI Sealing",
        text: "Seals large or irregular enclosure openings and reinforcement areas where standard foil would tear, keeping the shielding envelope intact under vibration and handling.",
      },
      {
        title: "Pass / Fail",
        text: "The shielded assembly must still pass EMC emission and immunity scans after installation — any uncovered or torn area becomes a leak path and a potential fail.",
      },
    ],
  },
  {
    slug: "black-mounting-tape",
    name: "Mounting Tape",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "A double-sided self adhesive mounting tape for industrial EMI shielding and general purpose bonding applications.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Beige / Silver" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Type", value: "Double Sided" },
    ],
    keyFeatures: [
      {
        title: "Double-Sided Bonding",
        text: "Two adhesive faces mount gaskets, foils and PCBs directly to enclosure walls while helping maintain electrical contact between the mounted item and the chassis.",
      },
      {
        title: "Self-Adhesive Convenience",
        text: "Peel-and-stick application replaces mechanical fasteners, clips and wet adhesives on the assembly line.",
      },
      {
        title: "Industrial Durability",
        text: "Formulated for industrial environments — resists working temperatures, ageing and the vibration typical of equipment in service.",
      },
    ],
    whatItDoes: [
      {
        title: "Mounting and Shielding",
        text: "Used to mount shielding gaskets, conductive foils and components inside enclosures, holding them in place while preserving the grounding and shielding path.",
      },
      {
        title: "Pass / Fail",
        text: "If EMC tests fail after assembly, poor bonding at mounted shielding elements is a likely cause — the mounting tape must provide both adhesion and a reliable conductive path.",
      },
    ],
  },
  {
    slug: "black-mu-ferro-sd-shielding-foil",
    name: "MU-Ferro-SD Shielding Foil",
    price: 12000,
    categorySlug: "emi-shielding-material",
    description:
      "MU-Ferro-SD shielding foil for magnetic shielding applications, self adhesive for industrial purpose.",
    specs: [
      { label: "Adhesive Type", value: "Self Adhesive" },
      { label: "Color", value: "Silver" },
      { label: "Usage/Application", value: "Industrial Purpose" },
      { label: "Features", value: "Magnetic shielding" },
    ],
    keyFeatures: [
      {
        title: "Magnetic Shielding",
        text: "Ferrous foil formulation provides high permeability, attenuating low-frequency magnetic fields that ordinary aluminium or copper foils cannot stop.",
      },
      {
        title: "Self-Adhesive Application",
        text: "Adhesive backing allows the foil to be applied directly to transformer walls, sensor housings and enclosure interiors without mechanical fixings.",
      },
      {
        title: "Surface Finish",
        text: "Silver metallic finish for discreet installation on visible or semi-visible surfaces.",
      },
    ],
    whatItDoes: [
      {
        title: "Magnetic Field Control",
        text: "Wraps around sources of stray magnetic fields — transformers, motors, power supplies — or shields sensitive sensors and circuits from external magnetic interference.",
      },
      {
        title: "Pass / Fail",
        text: "Field-strength measurements before and after installation determine success: the product passes when stray magnetic flux at the protected location drops below the specified limit.",
      },
    ],
  },
  {
    slug: "conductive-non-woven-fabric",
    name: "Conductive Non-Woven Fabric",
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
    keyFeatures: [
      {
        title: "Conductive Fabric Base",
        text: "Non-woven fabric carrier impregnated with conductive material, combining the conformability of a textile with electrical conductivity across its surface.",
      },
      {
        title: "Double-Sided Adhesive",
        text: "Self-adhesive on both faces for instant bonding to irregular surfaces, gasket edges and enclosure frames.",
      },
      {
        title: "Conformability",
        text: "Flexible fabric conforms to curves, corners and textured surfaces where rigid foils would wrinkle or lift.",
      },
    ],
    whatItDoes: [
      {
        title: "Flexible EMI Shielding",
        text: "Forms conductive gaskets, seam seals and bonding patches that follow the enclosure contour, maintaining shielding effectiveness across joints and moving interfaces.",
      },
      {
        title: "Pass / Fail",
        text: "Shielded assemblies are re-scanned for emissions and immunity; the fabric must provide a continuous conductive path, otherwise gaps become leak paths and the product fails.",
      },
    ],
  },
  {
    slug: "conductive-textile-tape",
    name: "Conductive Textile Tape",
    price: 13000,
    categorySlug: "emi-shielding-material",
    description:
      "Conductive textile tape, made in India, for EMI shielding and grounding applications in electronics assemblies.",
    specs: [
      { label: "Tape Width", value: "0-20 mm" },
      { label: "Tape Length", value: "10-20 m" },
      { label: "Color", value: "Black" },
      { label: "Country of Origin", value: "Made in India" },
    ],
    keyFeatures: [
      {
        title: "Conductive Textile Carrier",
        text: "Woven textile base with conductive fibres, offering flexibility and strength together with a stable surface resistance for shielding and grounding.",
      },
      {
        title: "Compact Formats",
        text: "Available in widths up to 20 mm and roll lengths of 10–20 m, suited to taping cable shields, small seams and connector boots.",
      },
      {
        title: "Consistent Quality, Made in India",
        text: "Conductive textile material converted and supplied from India for consistent quality and short lead times.",
      },
    ],
    whatItDoes: [
      {
        title: "Grounding and Shielding",
        text: "Wraps cable shields to their terminations, seals small enclosure gaps and bonds conductive surfaces, providing a low-impedance path to ground for EMI currents.",
      },
      {
        title: "Pass / Fail",
        text: "Cable and enclosure assemblies must pass conducted and radiated EMC tests after taping; a loose or non-conductive termination will show up as a fail and must be redone.",
      },
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
    keyFeatures: [
      {
        title: "Reliable Contact Surfaces",
        text: "Engineered to create dependable electrical contact between mating surfaces — lids, panels and access doors that must be opened and closed yet remain bonded.",
      },
      {
        title: "Double-Sided Adhesive",
        text: "Self-adhesive on both faces, it bonds the contact surfaces on assembly while the conductive adhesive maintains electrical continuity across the joint.",
      },
      {
        title: "Reusable Interface",
        text: "Withstands repeated opening and closing cycles of service panels without losing conductivity at the contact face.",
      },
    ],
    whatItDoes: [
      {
        title: "Contact Continuity",
        text: "Applied to lid and panel mating surfaces, it keeps enclosure segments electrically continuous so the Faraday cage is not broken by the panel gaps.",
      },
      {
        title: "Pass / Fail",
        text: "Shielding effectiveness and contact resistance are measured across the joint; if readings drift, the tape application must be redone until the joint meets its conductivity spec.",
      },
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
    keyFeatures: [
      {
        title: "Compressible Foam Core",
        text: "Conductive foam compresses to fill uneven gaps between mating surfaces, ensuring full contact even on rough or warped enclosure faces.",
      },
      {
        title: "Double-Sided Conductivity",
        text: "Conductive adhesive on both faces carries EMI currents across the joint while cushioning vibration between the bonded parts.",
      },
      {
        title: "Gap Filling",
        text: "Compensates for tolerance stack-up in sheet-metal enclosures, eliminating the air gaps that let high-frequency noise escape.",
      },
    ],
    whatItDoes: [
      {
        title: "Conductive Gasketing",
        text: "Serves as a compressible conductive gasket for doors, lids and panel joints, sealing EMI leak paths while absorbing mechanical vibration.",
      },
      {
        title: "Pass / Fail",
        text: "After assembly the enclosure is scanned for emissions; any leak through the gasketed joint is a fail, corrected by reseating or replacing the foam tape.",
      },
    ],
  },
  {
    slug: "mu-copper-tape",
    name: "MU-Copper Tape",
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
    keyFeatures: [
      {
        title: "Copper Construction",
        text: "Pure copper foil delivers excellent conductivity and solderability, with one-inch width sized for standard seam, cable and packaging shielding tasks.",
      },
      {
        title: "Double-Sided Adhesive",
        text: "Self-adhesive on both faces for instant conductive bonding between the foil and the substrate without solder or clips.",
      },
      {
        title: "Solderable Surface",
        text: "Exposed copper surface accepts solder, allowing shield terminations and ground straps to be attached directly over the tape.",
      },
    ],
    whatItDoes: [
      {
        title: "EMI Sealing and Packaging",
        text: "Seals enclosure seams and cable shields, and lines packaging that must protect electronic assemblies from electrostatic discharge and EMI during transit.",
      },
      {
        title: "Pass / Fail",
        text: "Shielded or packaged assemblies are tested for leakage and field exposure; uncovered edges or lifted tape are failure paths that must be corrected before release.",
      },
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
    keyFeatures: [
      {
        title: "Semi-Conductive Surface Resistivity",
        text: "Tuned resistivity between conductor and insulator — ideal for controlled static bleed and EMI attenuation without the shorting risk of fully conductive tape.",
      },
      {
        title: "Non-Woven Carrier",
        text: "Soft, conformable non-woven base that drapes over edges and uneven surfaces without cracking or lifting.",
      },
      {
        title: "Double-Sided Adhesive",
        text: "Self-adhesive both sides for quick bonding in assembly-line static-control and EMI applications.",
      },
    ],
    whatItDoes: [
      {
        title: "Static and EMI Control",
        text: "Provides a controlled leak path for electrostatic charge and attenuates radiated noise on film edges, cable assemblies and internal partitions of electronic products.",
      },
      {
        title: "Pass / Fail",
        text: "Surface resistivity and ESD decay measurements confirm performance; charge decay outside the specified window means the material or application must be revised.",
      },
    ],
  },
  {
    slug: "semiconductive-conductor-separation-tape",
    name: "Semiconductive Conductor Separation Tape",
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
    keyFeatures: [
      {
        title: "Conductor Separation",
        text: "Semiconductive layer separates adjacent conductors while bleeding off charge gradually, preventing both arcing and abrupt discharge events.",
      },
      {
        title: "Self-Adhesive, Double-Sided",
        text: "Peel-and-stick application on both faces secures the tape between conductive layers during assembly and through the product's service life.",
      },
      {
        title: "Industrial Grade",
        text: "Supplied new for demanding industrial cabling, motor and battery applications where conductor separation and static management are both required.",
      },
    ],
    whatItDoes: [
      {
        title: "Insulation and Charge Management",
        text: "Inserted between conductors — in cable terminations, battery packs and windings — it prevents direct contact while dissipating charge build-up that could cause partial discharge or noise.",
      },
      {
        title: "Pass / Fail",
        text: "Dielectric and partial-discharge tests verify the separation; any breakdown or discharge above the specified level is a fail and the tape layout must be corrected.",
      },
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
    keyFeatures: [
      {
        title: "Galvanic Corrosion Barrier",
        text: "Silver-faced aluminium construction stops the galvanic reaction that occurs when dissimilar metals meet on aluminium housings, protecting joint integrity over the product lifetime.",
      },
      {
        title: "EMI Shielding",
        text: "Aluminium body provides the conductive coverage needed for Faraday-cage sealing of seams and joints on aluminium enclosures.",
      },
      {
        title: "Housing-Specific Design",
        text: "Developed specifically for aluminium housings and frames, matching their thermal expansion and surface characteristics.",
      },
    ],
    whatItDoes: [
      {
        title: "Corrosion-Free Shielding",
        text: "Applied at metal-to-metal interfaces on aluminium enclosures, it shields against EMI while preventing the white oxide and pitting that galvanic contact causes.",
      },
      {
        title: "Pass / Fail",
        text: "The joint must pass both EMC scans and salt-spray corrosion checks; corrosion at the interface or rising transfer resistance means the barrier failed and the design must change.",
      },
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
    keyFeatures: [
      {
        title: "Compact Spectroradiometer",
        text: "256-pixel array with 12 nm optical FWHM, sized to fit in a hand at just 120 gm while delivering laboratory-grade spectral measurements.",
      },
      {
        title: "Wide Flux Range",
        text: "Measures luminous flux from 0.015 lm to 150 lm with a 1000:1 signal-to-noise ratio, covering everything from single LEDs to small luminaires.",
      },
      {
        title: "Photometric and Colorimetric",
        text: "Simultaneous spectral power distribution, luminous flux, colour temperature, CRI and chromaticity coordinates in a single measurement.",
      },
    ],
    whatItDoes: [
      {
        title: "Light Source Characterisation",
        text: "Captures the full spectrum of LED and general lighting sources and computes the photometric and colorimetric values required by LM-79 and CIE specifications.",
      },
      {
        title: "Pass / Fail",
        text: "Measured flux, CCT, CRI and chromaticity are compared with the manufacturer's declared ratings; values outside the tolerance band mean the luminaire batch fails its specification.",
      },
    ],
  },
  {
    slug: "gl-spectis-1-0-touch",
    name: "GL Spectis 1.0 Touch",
    price: 575000,
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
    keyFeatures: [
      {
        title: "Integrated Touch Interface",
        text: "Built-in touch screen lets the operator trigger and review measurements on the spot — no laptop tethered to the instrument on the factory floor or at the installation site.",
      },
      {
        title: "Portable Form Factor",
        text: "120 gm and pocket-sized (115 x 72 mm), designed for field verification of installed lighting and production-line sampling.",
      },
      {
        title: "Field-Ready Operating Range",
        text: "Rated for ambient temperatures from 5 to 35 °C for use in warehouses, factories and outdoor test rigs.",
      },
    ],
    whatItDoes: [
      {
        title: "On-Site Spectral Measurement",
        text: "Measures the spectrum, flux and colour of luminaires where they are installed, replacing subjective visual checks with objective, logged data.",
      },
      {
        title: "Pass / Fail",
        text: "On-screen results are compared with the luminaire's rated values; out-of-tolerance colour or flux identifies defective lamps and drivers before the site is handed over.",
      },
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
    keyFeatures: [
      {
        title: "High Performance Spectroscopy",
        text: "Choose from four spectral ranges — 340–850 nm, 200–800 nm, 380–1050 nm or 200–1050 nm — to match visible, UV or near-IR characterisation needs.",
      },
      {
        title: "Battery Powered Portability",
        text: "4000 mAh lithium-ion battery frees the instrument from mains power for full-shift measurements around the plant or at customer sites.",
      },
      {
        title: "Touch Operation",
        text: "Integrated touch interface for configuration, measurement and review in the field, with the 1.5 kg body still hand-portable.",
      },
    ],
    whatItDoes: [
      {
        title: "Versatile Spectral Characterisation",
        text: "Measures spectral power distribution, flux and colour across a configurable wavelength window, supporting LED binning checks, SSL product development and LM-79 reporting.",
      },
      {
        title: "Pass / Fail",
        text: "Measured wavelength peaks, flux and colour coordinates are checked against bin limits and product datasheets; out-of-bin samples are rejected before packaging.",
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
    keyFeatures: [
      {
        title: "Research-Grade Sensor",
        text: "Back-thinned CCD image sensor delivers high quantum efficiency across the full spectral range, with the sensitivity needed for low-light and UV measurements.",
      },
      {
        title: "Configurable Spectral Range",
        text: "Four selectable wavelength windows from 200 nm UV to 1050 nm near-IR, one instrument covering visible, UV and NIR characterisation programs.",
      },
      {
        title: "High Accuracy",
        text: "Research-grade optics and electronics built for demanding photometric work — spectral libraries, calibration labs and SSL R&D.",
      },
    ],
    whatItDoes: [
      {
        title: "Precision Photometry",
        text: "Acquires high-fidelity spectral power distributions for LED research, spectral matching, phosphor characterisation and reference-laboratory photometry.",
      },
      {
        title: "Pass / Fail",
        text: "Reference measurements from the instrument establish the golden spectrum; production samples outside the defined spectral tolerance envelope fail binning.",
      },
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
    keyFeatures: [
      {
        title: "1 nm Optical Resolution",
        text: "1 nm FWHM resolves the narrow emission lines of LEDs and lasers that coarser instruments blur, revealing true peak wavelengths and narrow-band features.",
      },
      {
        title: "Premium Detector",
        text: "Back-thinned CCD sensor with high quantum efficiency over the 360–830 nm photometric range for accurate CIE photopic-weighted measurements.",
      },
      {
        title: "Laboratory Accuracy",
        text: "The top of the GL Spectis range, specified for reference laboratories, certification bodies and high-end SSL development.",
      },
    ],
    whatItDoes: [
      {
        title: "High-Resolution Spectrometry",
        text: "Delivers laboratory-grade spectra and derived photometric/colorimetric quantities — flux, CCT, Duv, CRI, TM-30 values — for LED and luminaire characterisation.",
      },
      {
        title: "Pass / Fail",
        text: "Results are checked against IES LM-79 and CIE tolerances; spectra outside the permitted uncertainty or product limits are flagged as failures.",
      },
    ],
  },

  // LUMINARY - GL OPTIC SPHERE
  {
    slug: "aluminum-baso4-gl-optic-sphere-205",
    name: "GL OPTI SPHERE 205 (Aluminum / BaSO4)",
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
    keyFeatures: [
      {
        title: "205 mm BaSO4 Sphere",
        text: "205 mm inner diameter barium-sulphate-coated cavity with a 50 mm entrance aperture, sized for small to medium light sources.",
      },
      {
        title: "Aluminum Body",
        text: "Lightweight aluminium construction keeps the sphere at 3.3 kg for benchtop and portable measurement setups.",
      },
      {
        title: "High-Reflectance Coating",
        text: "BaSO4 diffuse coating provides a uniform, wavelength-stable reflective surface essential for accurate spatial integration of the source output.",
      },
    ],
    whatItDoes: [
      {
        title: "Total Flux Collection",
        text: "Collects and spatially homogenises all light emitted by the source, allowing a single spectroradiometer reading at the detector port to represent the total luminous flux and colour.",
      },
      {
        title: "Pass / Fail",
        text: "Flux and colour measured through the sphere are compared with the luminaire's rated values under LM-79; samples outside tolerance fail the bin or the batch.",
      },
    ],
  },
  {
    slug: "baso4-gl-optic-sphere-1100",
    name: "BaSO₄ GL OPTI SPHERE 1100",
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
    keyFeatures: [
      {
        title: "1100 mm Large-Aperture Sphere",
        text: "1.1 m inner diameter with a 168 mm entrance aperture, accommodating large luminaires, high-bay fixtures and street-lighting products whole.",
      },
      {
        title: "BaSO4 Coating",
        text: "Barium-sulphate diffuse coating maintains high, uniform reflectance for repeatable photometric and colorimetric measurements.",
      },
      {
        title: "Laboratory Scale",
        text: "60 kg bench-mounted sphere designed for photometric test rooms and certification laboratories running full LM-79 programmes.",
      },
    ],
    whatItDoes: [
      {
        title: "Large Luminaire Flux Measurement",
        text: "Integrates the complete output of large luminaires so total luminous flux, power distribution and colour can be measured without goniometric scanning.",
      },
      {
        title: "Pass / Fail",
        text: "Measured efficacy (lm/W), flux and colour rendering are checked against the product's declared class and standard tolerances; non-conforming luminaires fail certification.",
      },
    ],
  },
  {
    slug: "baso4-gl-optic-sphere-500",
    name: "BaSO₄ GL OPTI SPHERE 500",
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
    keyFeatures: [
      {
        title: "500 mm Mid-Size Sphere",
        text: "500 mm cavity with 80 mm entrance aperture — the workhorse size for downlights, tubes, bulbs and mid-size LED luminaires as per LM-79.",
      },
      {
        title: "BaSO4 Coating",
        text: "High-reflectance barium-sulphate interior for stable, repeatable spatial integration of the emitted light.",
      },
      {
        title: "Portable Weight",
        text: "At 17.5 kg the sphere can be moved between test benches without crane handling while remaining rigid enough for repeatable setups.",
      },
    ],
    whatItDoes: [
      {
        title: "LM-79 Flux and Colour Testing",
        text: "Holds the luminaire under test while the spectroradiometer at the detector port records total flux, spectral power distribution and colour metrics per IES LM-79.",
      },
      {
        title: "Pass / Fail",
        text: "Results are compared with the product's rated efficacy, flux and colour class; samples outside the standard tolerance bands fail batch acceptance.",
      },
    ],
  },
  {
    slug: "gl-opti-sphere-48",
    name: "GL OPTI SPHERE 48",
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
    keyFeatures: [
      {
        title: "Ultra-Compact 48 mm Sphere",
        text: "48 mm cavity with 9 mm aperture, purpose-built for bare LED chips, emitters and miniature indicator sources.",
      },
      {
        title: "Aluminum / BaSO4 Construction",
        text: "Aluminium shell with BaSO4 diffuse coating at just 126 gm — light enough for probe-station and integrating-into OEM fixtures use.",
      },
      {
        title: "Small-Source Accuracy",
        text: "Cavity-to-source proportions chosen to minimise self-absorption errors that plague large spheres when measuring tiny emitters.",
      },
    ],
    whatItDoes: [
      {
        title: "LED Chip Characterisation",
        text: "Measures the flux, spectrum and colour of individual LED emitters at the die and package level for binning and research applications.",
      },
      {
        title: "Pass / Fail",
        text: "Emitter measurements are compared against bin chromaticity and flux limits; chips outside their assigned bin are rejected or re-binned.",
      },
    ],
  },
  {
    slug: "gl-optic-sphere-2000",
    name: "GL OPTI SPHERE 2000",
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
    keyFeatures: [
      {
        title: "2000 mm Full-Size Sphere",
        text: "2 m inner diameter accommodates the largest luminaires — high-bay, floodlight, street-light and stage-light fixtures — with room to spare.",
      },
      {
        title: "Carbon Steel / BaSO4 Build",
        text: "Rigid carbon steel shell coated with barium sulphate, engineered for permanent installation in photometric test facilities.",
      },
      {
        title: "200 kg Laboratory Fixture",
        text: "A fixed 200 kg installation forming the core of a full photometric laboratory alongside GL Spectis spectroradiometers.",
      },
    ],
    whatItDoes: [
      {
        title: "Full-Scale Photometric Testing",
        text: "Integrates the total output of large luminaires for total flux, efficacy, spectral power distribution and colour measurements per LM-79 and CIE standards.",
      },
      {
        title: "Pass / Fail",
        text: "Certification decisions are made from its measurements — luminaires outside the declared flux, efficacy or colour tolerances fail and are withheld from shipment.",
      },
    ],
  },

  // SPRING HAMMER
  {
    slug: "spring-hammer-test-apparatus-as-per-iec-60068-2-75",
    name: "Spring Hammer Test Apparatus as per IEC 60068-2-75 (0.14 J / 0.2 J / 0.35 J / 0.5 J / 0.7 J and 1.0 J Impact Energy)",
    price: 60000,
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
    keyFeatures: [
      {
        title: "Graded Impact Energies",
        text: "Covers the six standard energies 0.14 J, 0.2 J, 0.35 J, 0.5 J, 0.7 J and 1.0 J specified in IEC 60068-2-75 for different enclosure mass and class of equipment.",
      },
      {
        title: "Spring Impact Mechanism",
        text: "Calibrated spring releases a defined strike energy independent of operator technique, so results are repeatable between labs and operators.",
      },
      {
        title: "Construction and Finish",
        text: "Polished spring-loaded impact head on a rigid body, branded by Standard Test Equipment and supplied boxed with its energy settings.",
      },
    ],
    whatItDoes: [
      {
        title: "Impact Resistance Check",
        text: "Strikes the equipment enclosure — covers, grilles, user interfaces — with a measured blow to simulate accidental knocks and drops a product meets in service.",
      },
      {
        title: "Pass / Fail",
        text: "After the strike, the enclosure must not crack, shatter or open such that a live or hazardous part becomes accessible; if it does, the housing fails and must be strengthened.",
      },
    ],
  },
  {
    slug: "universal-spring-hammer-0-14-1-joule-as-per-iec-60068-2-75",
    name: "Universal Spring Hammer (0.14 - 1 Joule) as per IEC 60068-2-75",
    price: 135000,
    categorySlug: "spring-hammer-test-apparatus",
    description:
      "Universal spring hammer covering 0.14 to 1 Joule impact energy ranges as per IEC 60068-2-75 for enclosure impact testing.",
    specs: [
      { label: "Impact Energy", value: "0.14 - 1 Joule" },
      { label: "Standard", value: "IEC 60068-2-75" },
    ],
    keyFeatures: [
      {
        title: "Universal Energy Range",
        text: "Single adjustable instrument covering 0.14 J to 1 J, replacing several fixed-energy hammers and matching the impact levels required by most appliance and IT standards.",
      },
      {
        title: "IEC 60068-2-75 Compliant",
        text: "Delivers strikes within the tolerances defined in IEC 60068-2-75 so test reports are accepted internationally.",
      },
      {
        title: "Adjustable Setting",
        text: "Energy is selected on the instrument, letting the lab move quickly between enclosure classes without swapping tools.",
      },
    ],
    whatItDoes: [
      {
        title: "Enclosure Impact Testing",
        text: "Applies a controlled spring-driven impact to every vulnerable surface of the enclosure to verify mechanical integrity under foreseeable mishandling.",
      },
      {
        title: "Pass / Fail",
        text: "A pass requires no rupture, no exposed hazardous parts and no impaired safety functions after impact; any breach of these conditions is a failure requiring a stronger enclosure.",
      },
    ],
  },

  // IP TEST APPARATUS
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
    keyFeatures: [
      {
        title: "IP X1 / IP X2 Drip Testing",
        text: "Simulates vertically falling and tilted dripping water — the first two water-ingress degrees of IEC 60529 — with controlled drop rate and drip tray.",
      },
      {
        title: "Tiltable Specimen Mounting",
        text: "Supports the 75° tilt position required for the IP X2 test so the enclosure is bombarded with drips from an angle as the standard specifies.",
      },
      {
        title: "Standard-Compliant Flow",
        text: "Delivers the drip rates defined in IEC 60529 Table 5, ensuring the severity of the exposure matches the rating being tested.",
      },
    ],
    whatItDoes: [
      {
        title: "Drip Water Ingress Test",
        text: "Exposes the enclosure to vertically falling (IP X1) and tilted (IP X2) dripping water to verify protection against rain-like conditions.",
      },
      {
        title: "Pass / Fail",
        text: "After the timed exposure the enclosure must show no water ingress that would impair safety or function; any internal moisture beyond the permitted traces is a fail.",
      },
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
    keyFeatures: [
      {
        title: "IP 5X / IP 6X Dust Testing",
        text: "Built for the two dust-ingress degrees of IEC 60529 — dust-protected (5X) and dust-tight (6X) — using talcum powder as the ingress medium.",
      },
      {
        title: "Partial Vacuum Method",
        text: "Supports the negative-pressure (partial vacuum) cycling the standard requires, drawing airborne dust into any enclosure leak paths.",
      },
      {
        title: "Structured, Reliable Design",
        text: "Controlled dust suspension and defined exposure time deliver repeatable severity, so dust-ingress results are consistent between runs.",
      },
    ],
    whatItDoes: [
      {
        title: "Dust Ingress Test",
        text: "Circulates fine airborne dust around the enclosure under specified conditions, with internal partial vacuum, to challenge every seal, gasket and vent.",
      },
      {
        title: "Pass / Fail",
        text: "On opening, the interior must be free of dust beyond the permitted trace for IP 5X, and entirely free of dust for IP 6X; deposits inside beyond that mean the seal failed.",
      },
    ],
  },
  {
    slug: "stainless-steel-ipx7-ipx8-immersion-water-tank-as-per-iec-60529",
    name: "Stainless Steel IPX7/IPX8 Immersion Water Tank as per IEC 60529",
    price: 275000,
    categorySlug: "ip-test-apparatus",
    description:
      "Stainless steel immersion water tank for IPX7 and IPX8 water ingress testing as per IEC 60529.",
    specs: [
      { label: "Material", value: "SS" },
      { label: "Brand", value: "Standard Test Equipment" },
      { label: "Storage Material", value: "Water" },
      { label: "Diameter", value: "600 mm (approx.)" },
    ],
    keyFeatures: [
      {
        title: "IP X7 / IP X8 Immersion",
        text: "Purpose-built tank for the immersion degrees of IEC 60529 — temporary immersion (X7) and continuous immersion at depth (X8).",
      },
      {
        title: "Stainless Steel Build",
        text: "SS construction resists corrosion from continuous water contact and maintains a clean, contaminant-free test bath over years of use.",
      },
      {
        title: "Sized for Enclosure Testing",
        text: "Approximately 600 mm working dimension accommodates typical enclosures, sensors and outdoor equipment for full submersion.",
      },
    ],
    whatItDoes: [
      {
        title: "Water Immersion Test",
        text: "Submerges the enclosure to the depth and duration defined for IP X7 or X8, forcing water against every seam, gland and connector under hydrostatic pressure.",
      },
      {
        title: "Pass / Fail",
        text: "After removal and wipe-down, no water may be found inside beyond the permitted trace, and the unit must operate normally; any ingress is a fail and the sealing must be improved.",
      },
    ],
  },
  {
    slug: "turn-table-for-ip-testing-for-laboratory",
    name: "Turn Table for IP Testing, For Laboratory",
    price: 135000,
    categorySlug: "ip-test-apparatus",
    description:
      "Stainless steel turn table for laboratory IP testing with 15 kg load capacity, suitable for all IP degree tests.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Usage/Application", value: "Laboratory" },
      { label: "Type of Testing Machines", value: "IP Testing" },
      { label: "Load Capacity", value: "15 kg" },
    ],
    keyFeatures: [
      {
        title: "Rotating Specimen Platform",
        text: "Turns the enclosure under test so water sprays, drips and dust jets reach every face without the operator repositioning the sample by hand.",
      },
      {
        title: "15 kg Load Capacity",
        text: "Stainless steel table rated to 15 kg, covering the majority of enclosures, luminaires and consumer electronics tested for IP degrees.",
      },
      {
        title: "Suitable for All IP Degrees",
        text: "Used with rain, spray, dust and jet apparatus across the full IEC 60529 range, one platform serving every ingress test in the lab.",
      },
    ],
    whatItDoes: [
      {
        title: "Uniform Test Exposure",
        text: "Rotates the specimen at a controlled rate during ingress testing, ensuring each side receives equal exposure so the IP result reflects the whole enclosure, not one face.",
      },
      {
        title: "Pass / Fail",
        text: "By guaranteeing all-round exposure, the turntable removes operator bias; the enclosure then passes or fails on the standard's ingress criteria for the degree claimed.",
      },
    ],
  },

  // LABORATORY TEST APPARATUS
  {
    slug: "ball-pressure-test-apparatus",
    name: "Ball Pressure Test Apparatus",
    price: 22000,
    categorySlug: "laboratory-test-apparatus",
    description:
      "Ball pressure test apparatus made of stainless steel for verification of heat resistance of materials as per IEC 60695-10-2.",
    specs: [
      { label: "Material", value: "Stainless Steel" },
      { label: "Packaging Type", value: "Box" },
      { label: "Display Type", value: "Analog" },
      { label: "I Deal In", value: "New Only" },
      { label: "Referred Standards", value: "IEC 60695-10-2" },
    ],
    latest: true,
    keyFeatures: [
      {
        title: "IEC 60695 Ball Pressure Test",
        text: "Implements the ball pressure test of IEC 60695-10-2, checking that non-metallic materials used in enclosures soften too little under elevated temperature.",
      },
      {
        title: "Stainless Steel Construction",
        text: "SS ball and fixture resist oxidation and maintain accurate contact geometry through repeated heating cycles in the test oven.",
      },
      {
        title: "Analog Indication",
        text: "Analog display for straightforward monitoring, supplied boxed for laboratory use.",
      },
    ],
    whatItDoes: [
      {
        title: "Heat Resistance Verification",
        text: "A heated steel ball is pressed into a specimen of the enclosure material inside an oven; the diameter of the resulting indentation indicates how much the material softened at the test temperature.",
      },
      {
        title: "Pass / Fail",
        text: "The indentation must not exceed 2.0 mm after the specified time and temperature; a larger mark means the material softens too much and is unsuitable for that part of the enclosure.",
      },
    ],
  },
  {
    slug: "dielectric-strength-tester-as-per-iec-62368",
    name: "Dielectric Strength Tester as per IEC 62368",
    price: 30000,
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
      { label: "Standard", value: "IEC 62368-1" },
    ],
    latest: true,
    keyFeatures: [
      {
        title: "Hi-Pot Dielectric Testing",
        text: "Applies a high test voltage — up to 12 kV below 2000 m altitude — between mains and accessible parts to verify the insulation withstands it without breakdown.",
      },
      {
        title: "Standard-Defined Geometry",
        text: "5 mm test electrode and 100 g club weight, with creepage distances over 35 mm, built to the electrode and clearance requirements referenced by IEC 62368-1.",
      },
      {
        title: "Industrial Build",
        text: "Designed for production-line and laboratory hi-pot routines, with a 20 mm measurement range for accurate voltage and leakage readings.",
      },
    ],
    whatItDoes: [
      {
        title: "Insulation Withstand Test",
        text: "Raises the voltage between live circuits and accessible metalwork to a level well above working voltage, stressing the insulation, clearances and creepage paths.",
      },
      {
        title: "Pass / Fail",
        text: "The insulation passes if no breakdown or excessive leakage current occurs at the test voltage; a spark-over or trip means the insulation is inadequate and the product must be redesigned.",
      },
    ],
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
    keyFeatures: [
      {
        title: "Neutral Salt Spray (NSS)",
        text: "Runs neutral salt fog corrosion testing, atomising a saline solution into a uniform fog that settles on all exposed specimen surfaces.",
      },
      {
        title: "Multiple Chamber Sizes",
        text: "Inner box options from 600 x 450 x 400 mm up to 900 x 600 x 500 mm, letting the lab choose capacity for small components or larger assemblies.",
      },
      {
        title: "Continuous Fog Exposure",
        text: "Maintains the defined fog density and chamber temperature for the hours or days a corrosion rating requires, unattended.",
      },
    ],
    whatItDoes: [
      {
        title: "Corrosion Resistance Testing",
        text: "Exposes coatings, platings and finished parts to continuous salt fog to accelerate corrosion, ranking how long a finish protects the underlying material.",
      },
      {
        title: "Pass / Fail",
        text: "Specimens are assessed for red rust, blistering or base-metal corrosion after the specified exposure hours; appearance beyond the acceptance criteria is a fail and the finish must be revised.",
      },
    ],
  },
  {
    slug: "water-jet-nozzle-ipx5-x6-fig-6",
    name: "Water Jet Nozzle IPX5/X6, Fig-6",
    price: 37000,
    categorySlug: "ip-test-apparatus",
    description:
      "Water jet nozzle built to Figure 6 of IEC 60529 for IPX5 and IPX6 jet tests. The nozzle delivers the specified jet stream at the standard distance and flow rate to verify that water projected against the enclosure does not cause harmful ingress.",
    specs: [
      { label: "HSN", value: "8424" },
      { label: "Standard", value: "IEC 60529 (Fig-6)" },
      { label: "Tests", value: "IPX5 / IPX6" },
    ],
    keyFeatures: [
      {
        title: "Standard Jet Geometry",
        text: "Nozzle bore and profile machined to Figure 6 of IEC 60529 so the jet matches the specified IPX5/IPX6 stream.",
      },
      {
        title: "IPX5 and IPX6 Testing",
        text: "Suitable for the 6.3 mm IPX5 jet and the 12.5 mm IPX6 jet when fitted with the matching nozzle tip.",
      },
    ],
  },
  {
    slug: "water-jet-nozzle-ipx5-or-x6-fig-6",
    name: "Water Jet Nozzle IPX5 or X6, Fig-6",
    price: 33000,
    categorySlug: "ip-test-apparatus",
    description:
      "Water jet nozzle as per Figure 6 of IEC 60529, configured for either IPX5 or IPX6 testing. Supplied for use with the appropriate nozzle tip to produce the standard jet for enclosure ingress testing.",
    specs: [
      { label: "HSN", value: "8424" },
      { label: "Standard", value: "IEC 60529 (Fig-6)" },
      { label: "Tests", value: "IPX5 or IPX6" },
    ],
  },
  {
    slug: "water-jet-nozzle-tip-for-ipx5-dia-6-3-mm",
    name: "Water Jet Nozzle Tip for IPX5 (Dia-6.3 mm)",
    price: 8000,
    categorySlug: "ip-test-apparatus",
    description:
      "Replacement nozzle tip with a 6.3 mm bore for the IEC 60529 IPX5 water jet test. Fits the standard water jet nozzle to deliver the specified jet stream.",
    specs: [
      { label: "HSN", value: "8424" },
      { label: "Standard", value: "IEC 60529" },
      { label: "Bore Diameter", value: "6.3 mm" },
      { label: "Test", value: "IPX5" },
    ],
  },
  {
    slug: "water-jet-nozzle-tip-for-ipx6-dia-12-5-mm",
    name: "Water Jet Nozzle Tip for IPX6 (Dia-12.5 mm)",
    price: 8000,
    categorySlug: "ip-test-apparatus",
    description:
      "Replacement nozzle tip with a 12.5 mm bore for the IEC 60529 IPX6 water jet test. Fits the standard water jet nozzle to deliver the specified jet stream.",
    specs: [
      { label: "HSN", value: "8424" },
      { label: "Standard", value: "IEC 60529" },
      { label: "Bore Diameter", value: "12.5 mm" },
      { label: "Test", value: "IPX6" },
    ],
  },
  {
    slug: "flow-meter-iec-60529",
    name: "Flow Meter",
    price: 14000,
    categorySlug: "ip-test-apparatus",
    description:
      "Flow meter for measuring water flow during IEC 60529 jet and spray tests, allowing the nozzle delivery rate to be set and verified against the standard.",
    specs: [
      { label: "HSN", value: "9026" },
      { label: "Standard", value: "IEC 60529" },
      { label: "Application", value: "IP water flow measurement" },
    ],
  },
  {
    slug: "dust-powder-per-kg-iec-60068-2-68",
    name: "Dust Powder (Per Kg)",
    price: 2200,
    categorySlug: "ip-test-apparatus",
    description:
      "Standard dust powder for sand and dust testing as per IEC 60068-2-68, supplied per kilogram. Used to charge dust test chambers for IP5X/IP6X and related ingress tests.",
    specs: [
      { label: "HSN", value: "2526 2000" },
      { label: "Standard", value: "IEC 60068-2-68" },
      { label: "Quantity", value: "Per Kg" },
    ],
  },
  {
    slug: "ip-x3-x4-spray-nozzle-iec-60529",
    name: "IP X3/X4 Spray Nozzle",
    price: 32000,
    categorySlug: "ip-test-apparatus",
    description:
      "Spray nozzle for IPX3 and IPX4 water spray testing as per IEC 60529, producing the specified spray pattern for enclosure ingress verification.",
    specs: [
      { label: "HSN", value: "84249000" },
      { label: "Standard", value: "IEC 60529" },
      { label: "Tests", value: "IPX3 / IPX4" },
    ],
  },
  {
    slug: "spillage-tester-as-per-iec-60335-2",
    name: "Spillage Tester as per IEC 60335-2",
    price: 35000,
    categorySlug: "ip-test-apparatus",
    description:
      "Spillage tester for IEC 60335-2 appliance testing, used to apply the specified liquid spillage over appliances to verify that liquid does not reach live parts or cause a hazard.",
    specs: [
      { label: "Standard", value: "IEC 60335-2" },
      { label: "Application", value: "Liquid spillage test" },
    ],
  },
  {
    slug: "test-probe-b-test-finger-fig-2-with-measuring-unit",
    name: "Test Probe B, Test Finger Fig-2 with Measuring Unit",
    price: 30000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe B (test finger) of Figure 2 of IEC 61032 supplied with a measuring unit. The jointed finger verifies protection against access to hazardous parts, while the measuring unit allows the applied force and access condition to be assessed during the test.",
    specs: [
      { label: "HSN", value: "8543" },
      { label: "Standard", value: "IEC 61032 (Fig-2)" },
      { label: "Probe Number", value: "Test Probe B" },
      { label: "Accessory", value: "Measuring unit" },
    ],
  },
  {
    slug: "test-probe-1-sphere-50mm-fig-5",
    name: "Test Probe 1 (Sphere 50 mm) Fig-5",
    price: 7000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 1 is the 50 mm rigid sphere of Figure 5 of IEC 61032, used to verify protection against access to hazardous parts by the back of a hand.",
    specs: [
      { label: "HSN", value: "9030" },
      { label: "Standard", value: "IEC 61032 (Fig-5)" },
      { label: "Probe Number", value: "Test Probe 1" },
      { label: "Sphere Diameter", value: "50 mm" },
    ],
  },
  {
    slug: "test-hook-fig-7-as-per-iec-60601",
    name: "Test Hook Fig-7 (LWH = 180 x 5 x 1 mm)",
    price: 4000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test hook of Figure 7 as per IEC 60601, 180 x 5 x 1 mm, used to check that hazardous parts cannot be reached by a hook-shaped object.",
    specs: [
      { label: "HSN", value: "9030" },
      { label: "Standard", value: "IEC 60601 (Fig-7)" },
      { label: "Dimensions", value: "180 x 5 x 1 mm" },
    ],
  },
  {
    slug: "wedge-probe-fig-ee-1-as-per-iec-62368-1",
    name: "Wedge Probe (Fig EE.1) as per IEC 62368-1 / IS 13252 Pt-1",
    price: 15000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Wedge probe built to Figure EE.1 of IEC 62368-1 / IS 13252 Pt-1 for verifying that openings in IT equipment enclosures do not permit access to hazardous parts.",
    specs: [
      { label: "Standard", value: "IEC 62368-1 / IS 13252 Pt-1" },
      { label: "Figure", value: "EE.1" },
    ],
  },
  {
    slug: "test-probe-18-small-finger-probe-dia-8-6mm",
    name: "Test Probe 18 (Small Finger Probe Dia 8.6 mm)",
    price: 16000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 18 of Figure 12 of IEC 61032, a small finger probe with an 8.6 mm diameter, used to verify protection against access to hazardous parts by a child's finger.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig-12)" },
      { label: "Probe Number", value: "Test Probe 18" },
      { label: "Diameter", value: "8.6 mm" },
    ],
  },
  {
    slug: "test-probe-19-small-finger-probe-dia-5-6mm",
    name: "Test Probe 19 (Small Finger Probe Dia 5.6 mm)",
    price: 18000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Test Probe 19 of Figure 13 of IEC 61032, a small finger probe with a 5.6 mm diameter, used to verify protection against access to hazardous parts by a small finger.",
    specs: [
      { label: "Standard", value: "IEC 61032 (Fig-13)" },
      { label: "Probe Number", value: "Test Probe 19" },
      { label: "Diameter", value: "5.6 mm" },
    ],
  },
  {
    slug: "b22-lampholder-insertion-gauge-iec-60061-3",
    name: "B22 Lampholder Insertion Gauge as per IEC 60061-3 (Sheet 38)",
    price: 15000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "B22 lampholder gauge for testing the insertion of lamp caps in lampholders as per IEC 60061-3 (sheet 38).",
    specs: [
      { label: "Standard", value: "IEC 60061-3 (Sheet 38)" },
    ],
  },
  {
    slug: "b22-not-go-gauge-finished-lamps-iec-60061-3",
    name: "B22 Not-Go Gauge for Finished Lamps as per IEC 60061-3 (Sheet 41)",
    price: 15000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "B22 not-go gauge for caps on finished lamps as per IEC 60061-3 (sheet 41), used to confirm that lamp caps do not exceed the specified limit dimensions.",
    specs: [
      { label: "Standard", value: "IEC 60061-3 (Sheet 41)" },
    ],
  },
  {
    slug: "conduit-gauge-for-plastic-pipe-iec-61386-23",
    name: "Conduit Gauge (For Plastic Pipe)",
    price: 8000,
    categorySlug: "test-probes-and-test-pins",
    description:
      "Conduit gauge for plastic conduit pipe as per IEC 61386-23, used to verify conduit dimensions and fit during routine testing.",
    specs: [
      { label: "Standard", value: "IEC 61386-23" },
      { label: "Application", value: "Plastic conduit pipe" },
    ],
  },
  {
    slug: "weld-bend-jig",
    name: "Weld Bend Jig",
    price: 75000,
    categorySlug: "laboratory-test-apparatus",
    description:
      "Weld bend jig for bending welded test specimens to the specified angle and radius, used to assess weld integrity and ductility in the laboratory.",
    specs: [
      { label: "Application", value: "Weld bend testing" },
    ],
  },
  {
    slug: "spindle-of-50mm-radius-and-u-block-for-25mm",
    name: "Spindle of 50 mm Radius and U Block for 25 mm",
    price: 35000,
    categorySlug: "laboratory-test-apparatus",
    description:
      "Bending spindle of 50 mm radius supplied with a U block for 25 mm specimens, used as the tooling set for weld bend tests.",
    specs: [
      { label: "Spindle Radius", value: "50 mm" },
      { label: "U Block", value: "For 25 mm" },
    ],
  },
  {
    slug: "cone-tool-iec-60601-2-52",
    name: "Cone Tool as per IEC 60601-2-52 (Medical)",
    price: 12000,
    categorySlug: "laboratory-test-apparatus",
    description:
      "Cone tool specified in IEC 60601-2-52 for testing medical beds and related equipment, used to check entrapment hazards with the standard cone geometry.",
    specs: [
      { label: "Standard", value: "IEC 60601-2-52" },
      { label: "Application", value: "Medical equipment testing" },
      { label: "Tool", value: "Cone" },
    ],
  },
  {
    slug: "cylinder-tool-iec-60601-2-52",
    name: "Cylinder Tool as per IEC 60601-2-52 (Medical)",
    price: 10000,
    categorySlug: "laboratory-test-apparatus",
    description:
      "Cylinder tool specified in IEC 60601-2-52 for testing medical beds and related equipment, used to check entrapment hazards with the standard cylinder geometry.",
    specs: [
      { label: "Standard", value: "IEC 60601-2-52" },
      { label: "Application", value: "Medical equipment testing" },
      { label: "Tool", value: "Cylinder" },
    ],
  },
  {
    slug: "wedge-tool-iec-60601-2-52",
    name: "Wedge Tool as per IEC 60601-2-52 (Medical)",
    price: 35000,
    categorySlug: "laboratory-test-apparatus",
    description:
      "Wedge tool specified in IEC 60601-2-52 for testing medical beds and related equipment, used to check entrapment hazards with the standard wedge geometry.",
    specs: [
      { label: "Standard", value: "IEC 60601-2-52" },
      { label: "Application", value: "Medical equipment testing" },
      { label: "Tool", value: "Wedge" },
    ],
  },
  {
    slug: "standard-test-lamp-100w-24v",
    name: "Standard Test Lamp, 100W/24V",
    price: 30000,
    categorySlug: "testing-apparatus-luminary-test",
    subcategorySlug: "standard-test-lamp-sources",
    description:
      "Standard test lamp source, 100 W / 24 V, for photometric and spectroradiometric calibration and luminaire testing as per LM-79 and related standards.",
    specs: [
      { label: "HSN", value: "8539" },
      { label: "Power", value: "100 W" },
      { label: "Voltage", value: "24 V" },
      { label: "Application", value: "Standard test lamp source" },
    ],
  },
];

categories.forEach((c) => {
  c.count = products.filter((p) => p.categorySlug === c.slug).length;
});

export const getProductCode = (product: Product): string => {
  const prefixByCategory: Record<string, string> = {
    "test-probes-and-test-pins": "TP",
    "emi-shielding-material": "EMI",
    "testing-apparatus-luminary-test": "LUM",
    "spring-hammer-test-apparatus": "SH",
    "ip-test-apparatus": "IP",
    "laboratory-test-apparatus": "LAB",
  };
  const prefix = prefixByCategory[product.categorySlug] ?? "PRD";
  const index = products.findIndex((p) => p.slug === product.slug) + 1;
  return `${prefix}-${String(index).padStart(4, "0")}`;
};

export const productImages: Record<string, string> = {
  "black-test-probe-13-short-test-pin-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791613912/7._Test_Probe_-13_Fig-9_as_per_IEC_61032_q2jxgn.jpg",
  "ip1x-test-probe-a-50-mm-sphere-as-per-iec-60529-and-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791614244/iec-60529-and-61032-ip-1x-test-probe-500x500-330x409_kix3wa.jpg",
  "ip4x-test-probe-d-as-per-iec-60529-and-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791778109/unnamed_fkptu2.jpg",
  "test-probe-11-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791778335/unnamed_pblpf0.jpg",
  "test-probe-12-as-per-iec-61032":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791778404/unnamed_gi6nda.jpg",
  "ball-pressure-test-apparatus":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1794547250/ball-pressure-test-apparatus-500x500-330x409_n1ikxa.png",
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

  "rain-test-chamber-ip-x1-x2-as-per-iec-60529":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783863/rain-test-chamber-330x409_u2dpxq.jpg",
  "sand-and-dust-chamber-as-per-iec-60529":
    "https://res.cloudinary.com/didtfhfme/image/upload/v1791783969/dust-chamber-pic-330x409_wqpesj.jpg",
  "stainless-steel-ipx7-ipx8-immersion-water-tank-as-per-iec-60529":
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


