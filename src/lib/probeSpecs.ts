export type ProbeDimension = {
  parameter: string;
  value: string;
  tolerance: string;
};

export type ProbeMaterial = { part: string; material: string };

export type ProbeUse = { standard: string; clause: string; test: string };

export type ProbeSpecFields = {
  standard: string;
  figure: string;
  probeCode: string;
  definition: string;
  dimensions: ProbeDimension[];
  materials: ProbeMaterial[];
  testForce: string;
  usedIn: ProbeUse[];
  supplied: string;
};

export const sharedProbeNote =
  "IEC 61032 clause 7: metal surfaces have Ra <= 1.6 um, and parts that touch the test sample have a hardness of at least 50 HRC.";

const inspectionReport =
  "Dimensional inspection report (not an accredited calibration certificate)";

const iec61032Use = (figure: string, test: string): ProbeUse => ({
  standard: "IEC 61032",
  clause: figure,
  test,
});

export const probeSpecs: Record<string, ProbeSpecFields> = {
  "ip1x-test-probe-a-50-mm-sphere-as-per-iec-60529-and-61032": {
    standard: "IEC 61032 / IEC 60529",
    figure: "Fig. 1",
    probeCode: "A",
    definition:
      "Rigid 50 mm sphere probe that verifies a hand cannot reach hazardous parts through an enclosure opening.",
    dimensions: [
      { parameter: "Sphere diameter", value: "50 mm", tolerance: "+0.05 / 0" },
      { parameter: "Guard diameter", value: "45 mm", tolerance: "not specified" },
      { parameter: "Guard thickness", value: "4 mm", tolerance: "not specified" },
      { parameter: "Handle diameter", value: "10 mm", tolerance: "not specified" },
      { parameter: "Handle length", value: "approximately 100 mm", tolerance: "not specified" },
    ],
    materials: [
      { part: "Sphere and guard", material: "Stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "50 N",
    usedIn: [
      iec61032Use("Fig. 1", "Test Probe A, access by the back of the hand"),
      { standard: "IEC 60529", clause: "IP1X", test: "protection against access by the back of the hand" },
    ],
    supplied: inspectionReport,
  },
  "white-ip-2x-test-finger-test-probe-b-as-per-iec-60529-and-61032": {
    standard: "IEC 61032 / IEC 60529",
    figure: "Fig. 2",
    probeCode: "B",
    definition:
      "Two-joint articulated test finger that verifies a finger cannot reach hazardous live or moving parts.",
    dimensions: [
      { parameter: "Finger diameter", value: "12 mm", tolerance: "not specified" },
      { parameter: "Finger length from stop face", value: "80 mm", tolerance: "not specified" },
      { parameter: "Stop face diameter", value: "50 mm", tolerance: "not specified" },
      { parameter: "Stop face thickness", value: "20 mm", tolerance: "not specified" },
      { parameter: "Joint rotation, each way", value: "90 deg", tolerance: "0 / +10 deg" },
      { parameter: "Tip radius 1", value: "R2 mm", tolerance: "+/- 0.05" },
      { parameter: "Tip radius 2", value: "R4 mm", tolerance: "+/- 0.05" },
      { parameter: "Linear dimension <= 25 mm", value: "as drawn", tolerance: "0 / -0.05" },
      { parameter: "Linear dimension > 25 mm", value: "as drawn", tolerance: "+/- 0.2" },
    ],
    materials: [
      { part: "Finger", material: "Hardened stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "10 N",
    usedIn: [
      iec61032Use("Fig. 2", "Test Probe B, articulated test finger"),
      { standard: "IEC 60529", clause: "IP2X", test: "protection against access by a finger" },
    ],
    supplied: inspectionReport,
  },
  "test-probe-b-test-finger-fig-2-with-measuring-unit": {
    standard: "IEC 61032 / IEC 60529",
    figure: "Fig. 2",
    probeCode: "B",
    definition:
      "Articulated Test Probe B supplied with a force measuring unit so the 10 N test force can be read during access testing.",
    dimensions: [
      { parameter: "Finger diameter", value: "12 mm", tolerance: "not specified" },
      { parameter: "Finger length from stop face", value: "80 mm", tolerance: "not specified" },
      { parameter: "Stop face diameter", value: "50 mm", tolerance: "not specified" },
      { parameter: "Joint rotation, each way", value: "90 deg", tolerance: "0 / +10 deg" },
      { parameter: "Tip radii", value: "R2 and R4 mm", tolerance: "+/- 0.05" },
      { parameter: "Force measuring unit", value: "supplied with probe; range stated on quotation", tolerance: "confirm with supplier" },
    ],
    materials: [
      { part: "Finger", material: "Hardened stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "10 N",
    usedIn: [
      iec61032Use("Fig. 2", "Test Probe B with applied-force measurement"),
      { standard: "IEC 60529", clause: "IP2X", test: "protection against access by a finger" },
    ],
    supplied: "Dimensional inspection report and force measuring unit documentation",
  },
  "white-stainless-steel-ip3x-test-probe-c-as-per-iec-60529-and-61032": {
    standard: "IEC 61032 / IEC 60529",
    figure: "Fig. 3",
    probeCode: "C",
    definition:
      "2.5 mm spherical-ended rod that verifies small tools cannot reach hazardous parts.",
    dimensions: [
      { parameter: "Rod diameter", value: "2.5 mm", tolerance: "+0.05 / 0" },
      { parameter: "Rod length", value: "100 mm", tolerance: "+/- 0.2" },
      { parameter: "Stop sphere diameter", value: "35 mm", tolerance: "+/- 0.2" },
      { parameter: "Handle diameter", value: "10 mm", tolerance: "not specified" },
      { parameter: "Handle length", value: "approximately 100 mm", tolerance: "not specified" },
      { parameter: "Edges", value: "free from burrs", tolerance: "not applicable" },
    ],
    materials: [
      { part: "Rod and stop sphere", material: "Stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "3 N",
    usedIn: [
      iec61032Use("Fig. 3", "Test Probe C"),
      { standard: "IEC 60529", clause: "IP3X", test: "protection against access by a tool" },
    ],
    supplied: inspectionReport,
  },
  "ip4x-test-probe-d-as-per-iec-60529-and-61032": {
    standard: "IEC 61032 / IEC 60529",
    figure: "Fig. 4",
    probeCode: "D",
    definition:
      "1.0 mm test wire that verifies thin wires cannot reach hazardous live or moving parts.",
    dimensions: [
      { parameter: "Wire diameter", value: "1.0 mm", tolerance: "+0.05 / 0" },
      { parameter: "Wire length", value: "100 mm", tolerance: "+/- 0.2" },
      { parameter: "Stop sphere diameter", value: "35 mm", tolerance: "+/- 0.2" },
      { parameter: "Handle diameter", value: "10 mm", tolerance: "not specified" },
      { parameter: "Handle length", value: "approximately 100 mm", tolerance: "not specified" },
    ],
    materials: [
      { part: "Wire and stop sphere", material: "Stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "1 N",
    usedIn: [
      iec61032Use("Fig. 4", "Test Probe D"),
      { standard: "IEC 60529", clause: "IP4X", test: "protection against access by a wire" },
    ],
    supplied: inspectionReport,
  },
  "test-probe-1-sphere-50mm-fig-5": {
    standard: "IEC 61032",
    figure: "Fig. 5",
    probeCode: "1",
    definition:
      "Handle-less rigid 50 mm sphere object probe used to check access by the back of a hand.",
    dimensions: [
      { parameter: "Sphere diameter", value: "50 mm", tolerance: "+0.05 / 0" },
      { parameter: "Construction", value: "rigid sphere, no handle", tolerance: "not applicable" },
    ],
    materials: [{ part: "Sphere", material: "Hardened stainless steel" }],
    testForce: "50 N",
    usedIn: [iec61032Use("Fig. 5", "Test Probe 1, handle-less object probe")],
    supplied: inspectionReport,
  },
  "test-probe-2-sphere-12-5-mm-fig-6": {
    standard: "IEC 61032",
    figure: "Fig. 6",
    probeCode: "2",
    definition:
      "Handle-less rigid 12.5 mm sphere object probe used to check access by a finger tip.",
    dimensions: [
      { parameter: "Sphere diameter", value: "12.5 mm", tolerance: "+0.2 / 0" },
      { parameter: "Construction", value: "rigid sphere, no handle", tolerance: "not applicable" },
    ],
    materials: [{ part: "Sphere", material: "Hardened stainless steel" }],
    testForce: "30 N",
    usedIn: [iec61032Use("Fig. 6", "Test Probe 2, handle-less finger-tip object probe")],
    supplied: inspectionReport,
  },
  "test-probe-11-as-per-iec-61032": {
    standard: "IEC 61032",
    figure: "Fig. 7",
    probeCode: "11",
    definition:
      "Rigid unjointed test finger with a 50 mm stop face for checking access to hazardous parts.",
    dimensions: [
      { parameter: "Finger diameter", value: "12 mm", tolerance: "not specified" },
      { parameter: "Finger length", value: "80 mm", tolerance: "not specified" },
      { parameter: "Stop face diameter", value: "50 mm", tolerance: "not specified" },
      { parameter: "Tip profile", value: "as Fig. 2", tolerance: "per Fig. 2" },
    ],
    materials: [
      { part: "Finger", material: "Hardened stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "50 N",
    usedIn: [iec61032Use("Fig. 7", "Test Probe 11, rigid test finger")],
    supplied: inspectionReport,
  },
  "test-probe-12-as-per-iec-61032": {
    standard: "IEC 61032",
    figure: "Fig. 8",
    probeCode: "12",
    definition:
      "Long cylindrical test pin that verifies a tool cannot touch hazardous live or moving parts.",
    dimensions: [
      { parameter: "Pin diameter", value: "4 mm", tolerance: "+/- 0.05" },
      { parameter: "Pin length", value: "50 mm", tolerance: "+/- 0.15" },
      { parameter: "Guard diameter", value: "25 mm", tolerance: "+/- 0.2" },
      { parameter: "Guard thickness", value: "4 mm", tolerance: "not specified" },
      { parameter: "Handle diameter", value: "10 mm", tolerance: "not specified" },
      { parameter: "Handle length", value: "20 mm", tolerance: "not specified" },
    ],
    materials: [
      { part: "Pin", material: "Hardened stainless steel" },
      { part: "Handle and guard", material: "Insulating plastic" },
    ],
    testForce: "Without appreciable force",
    usedIn: [iec61032Use("Fig. 8", "Test Probe 12, long test pin")],
    supplied: inspectionReport,
  },
  "test-probe-13-short-test-pin-as-per-iec-61032": {
    standard: "IEC 61032",
    figure: "Fig. 9",
    probeCode: "13",
    definition:
      "Short conical test pin that verifies small openings do not allow access to hazardous parts.",
    dimensions: [
      { parameter: "Pin diameter at guard", value: "4 mm", tolerance: "0 / -0.05" },
      { parameter: "Pin diameter at tip", value: "3 mm", tolerance: "0 / -0.05" },
      { parameter: "Pin length", value: "15 mm", tolerance: "0 / -0.1" },
      { parameter: "Guard diameter", value: "25 mm", tolerance: "+/- 0.2" },
      { parameter: "Guard thickness", value: "4 mm", tolerance: "not specified" },
      { parameter: "Handle diameter", value: "10 mm", tolerance: "not specified" },
      { parameter: "Handle length", value: "20 mm", tolerance: "not specified" },
    ],
    materials: [
      { part: "Pin", material: "Hardened stainless steel" },
      { part: "Handle and guard", material: "Insulating plastic" },
    ],
    testForce: "Without appreciable force",
    usedIn: [iec61032Use("Fig. 9", "Test Probe 13, short conical test pin")],
    supplied: inspectionReport,
  },
  "test-probe-14-as-per-iec-61032": {
    standard: "IEC 61032",
    figure: "Fig. 10",
    probeCode: "14",
    definition:
      "Flat test bar used to check that socket-outlet shutters do not permit access to live parts.",
    dimensions: [
      { parameter: "Bar width", value: "3 mm", tolerance: "0 / -0.03" },
      { parameter: "Bar thickness", value: "1 mm", tolerance: "+0.05 / 0" },
      { parameter: "Bar length", value: "80 mm", tolerance: "+/- 0.5" },
      { parameter: "Tip radius", value: "R 0.2 mm", tolerance: "+/- 0.05" },
    ],
    materials: [
      { part: "Bar", material: "Hardened stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "20 N",
    usedIn: [iec61032Use("Fig. 10", "Test Probe 14, socket-outlet shutter test")],
    supplied: inspectionReport,
  },
  "test-probe-17-as-per-iec-61032": {
    standard: "IEC 61032",
    figure: "Fig. 11",
    probeCode: "17",
    definition:
      "Fine 0.5 mm test wire used to check electrical toys for access to hazardous live parts.",
    dimensions: [
      { parameter: "Wire diameter", value: "0.5 mm", tolerance: "0 / -0.05" },
    ],
    materials: [
      { part: "Wire", material: "Hardened stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "Without appreciable force",
    usedIn: [iec61032Use("Fig. 11", "Test Probe 17, fine-wire access test")],
    supplied: inspectionReport,
  },
  "test-probe-18-small-finger-probe-dia-8-6mm": {
    standard: "IEC 61032",
    figure: "Fig. 12",
    probeCode: "18",
    definition:
      "8.6 mm small finger probe with two joints used to verify access protection by a child's finger.",
    dimensions: [
      { parameter: "Finger diameter", value: "8.6 mm", tolerance: "+/- 0.1" },
      { parameter: "Finger length", value: "57.9 mm", tolerance: "+/- 0.15" },
      { parameter: "Collar section", value: "101.6 mm", tolerance: "+/- 0.3" },
      { parameter: "Handle extension length", value: "451.6 mm", tolerance: "+/- 0.8" },
      { parameter: "Handle extension diameter", value: "38.1 mm", tolerance: "+/- 0.3" },
      { parameter: "Joints", value: "two joints, 90 deg each", tolerance: "not specified" },
    ],
    materials: [
      { part: "Finger", material: "Hardened stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "10 N",
    usedIn: [iec61032Use("Fig. 12", "Test Probe 18, small finger access test")],
    supplied: inspectionReport,
  },
  "test-probe-19-small-finger-probe-dia-5-6mm": {
    standard: "IEC 61032",
    figure: "Fig. 13",
    probeCode: "19",
    definition:
      "5.6 mm small finger probe with two joints used to verify access protection by a small finger.",
    dimensions: [
      { parameter: "Finger diameter", value: "5.6 mm", tolerance: "+/- 0.1" },
      { parameter: "Finger length", value: "44 mm", tolerance: "+/- 0.15" },
      { parameter: "Tip radius", value: "R 2.8 mm", tolerance: "+/- 0.05" },
      { parameter: "Collar section", value: "101.6 mm", tolerance: "+/- 0.3" },
      { parameter: "Handle extension length", value: "464.3 mm", tolerance: "+/- 0.8" },
      { parameter: "Handle extension diameter", value: "25.4 mm", tolerance: "+/- 0.2" },
      { parameter: "Joints", value: "two joints, 90 deg each", tolerance: "not specified" },
    ],
    materials: [
      { part: "Finger", material: "Hardened stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "10 N",
    usedIn: [iec61032Use("Fig. 13", "Test Probe 19, small finger access test")],
    supplied: inspectionReport,
  },
  "test-probe-31-as-per-iec-61032": {
    standard: "IEC 61032",
    figure: "Fig. 14",
    probeCode: "31",
    definition:
      "Tapered test cone used to verify access to hazardous mechanical parts of food waste disposal units.",
    dimensions: [
      { parameter: "Cone large diameter", value: "110 mm", tolerance: "+/- 0.2" },
      { parameter: "Cone small diameter", value: "60 mm", tolerance: "+/- 0.2" },
      { parameter: "Shaft diameter", value: "25 mm", tolerance: "+/- 0.2" },
      { parameter: "Shaft length", value: "80 mm", tolerance: "+/- 0.2" },
      { parameter: "Overall length", value: "150 mm", tolerance: "+/- 0.2" },
    ],
    materials: [
      { part: "Cone", material: "Material not specified by IEC 61032 Fig. 14" },
      { part: "Shaft", material: "Metal" },
    ],
    testForce: "50 N",
    usedIn: [iec61032Use("Fig. 14", "Test Probe 31, food waste disposal grinder access test")],
    supplied: inspectionReport,
  },
  "test-probe-32-as-per-iec-61032": {
    standard: "IEC 61032",
    figure: "Fig. 15",
    probeCode: "32",
    definition:
      "25 mm metal rod used to verify fan guards prevent access to hazardous moving parts.",
    dimensions: [
      { parameter: "Rod diameter", value: "25 mm", tolerance: "+/- 0.2" },
      { parameter: "Construction", value: "metal rod", tolerance: "not applicable" },
    ],
    materials: [{ part: "Rod", material: "Metal" }],
    testForce: "30 N",
    usedIn: [iec61032Use("Fig. 15", "Test Probe 32, fan guard access test")],
    supplied: inspectionReport,
  },
  "test-probe-41-as-per-iec-61032": {
    standard: "IEC 61032",
    figure: "Fig. 16",
    probeCode: "41",
    definition:
      "Body and conical metal rod probe used to verify that hot or glowing parts cannot be reached.",
    dimensions: [
      { parameter: "Body diameter", value: "50 mm", tolerance: "+/- 0.2" },
      { parameter: "Body length", value: "80 mm", tolerance: "+/- 1" },
      { parameter: "Metal rod diameter", value: "30 mm", tolerance: "+/- 0.05" },
      { parameter: "Metal rod length", value: "80 mm", tolerance: "+/- 0.2" },
      { parameter: "Conical tip length", value: "21.5 mm", tolerance: "0 / -0.05" },
    ],
    materials: [
      { part: "Body", material: "Material not specified by IEC 61032 Fig. 16" },
      { part: "Rod and conical tip", material: "Metal" },
    ],
    testForce: "Without appreciable force",
    usedIn: [iec61032Use("Fig. 16", "Test Probe 41, hot and glowing parts access test")],
    supplied: inspectionReport,
  },
  "test-probe-43-as-per-iec-61032": {
    standard: "IEC 61032",
    figure: "Fig. 17",
    probeCode: "43",
    definition:
      "Flat metal bar used to verify that visibly glowing radiant heaters do not allow access to hot surfaces.",
    dimensions: [
      { parameter: "Bar width", value: "50 mm", tolerance: "+/- 0.15" },
      { parameter: "Bar thickness", value: "5 mm", tolerance: "+/- 0.05" },
    ],
    materials: [
      { part: "Bar", material: "Stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "Without appreciable force",
    usedIn: [iec61032Use("Fig. 17", "Test Probe 43, radiant heater access test")],
    supplied: inspectionReport,
  },
  "4mm-long-test-pin-probe-as-per-iec-61010": {
    standard: "IEC 61010-1:2010+AMD1:2016",
    figure: "Not an IEC 61032 figure",
    probeCode: "4 mm pin",
    definition:
      "Freely hanging 4 mm metal pin used to check that openings above live parts do not permit access.",
    dimensions: [
      { parameter: "Pin diameter", value: "4 mm", tolerance: "not specified in clause 6.2.3" },
      { parameter: "Pin length", value: "100 mm", tolerance: "not specified in clause 6.2.3" },
      { parameter: "Application", value: "hung freely", tolerance: "no applied force" },
    ],
    materials: [
      { part: "Pin", material: "Stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "Hung freely, no applied force",
    usedIn: [
      {
        standard: "IEC 61010-1:2010+AMD1:2016",
        clause: "6.2.3",
        test: "openings above live parts",
      },
    ],
    supplied: inspectionReport,
  },
  "3mm-long-test-pin-probe-as-per-iec-61010": {
    standard: "IEC 61010-1:2010+AMD1:2016",
    figure: "Not an IEC 61032 figure",
    probeCode: "3 mm pin",
    definition:
      "3 mm metal pin used in openings for pre-set controls to verify access protection is maintained.",
    dimensions: [
      { parameter: "Pin diameter", value: "3 mm", tolerance: "not specified in clause 6.2.4" },
      { parameter: "Pin length", value: "100 mm", tolerance: "as manufactured; confirm to drawing" },
      { parameter: "Application", value: "openings for pre-set controls", tolerance: "not applicable" },
    ],
    materials: [
      { part: "Pin", material: "Stainless steel" },
      { part: "Handle", material: "Insulating plastic" },
    ],
    testForce: "Applied by hand; clause 6.2.4 states no numerical force",
    usedIn: [
      {
        standard: "IEC 61010-1:2010+AMD1:2016",
        clause: "6.2.4",
        test: "openings for pre-set controls",
      },
    ],
    supplied: inspectionReport,
  },
};
