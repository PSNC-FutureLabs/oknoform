export const steps = [
  {
    id: "Step 1",
    name: "Informacje o pacjencie",
    fields: ["birthday", "gender", "disease", "hospitalWard"],
  },
  {
    id: "Step 2",
    name: "Niepokojące objawy",
    fields: ["temperature", "measurement-place", "symptoms"],
  },
  {
    id: "Step 3",
    name: "Aktualne badania",
    fields: [
      "examination-date",
      ["HGB", "HGBunit"],
      "WBC",
      "PLT",
      "ALT",
      "AST",
      ["NEUT", "NEUTunit"],
    ],
  },
  {
    id: "Step 4",
    name: "Poprzednie badania",
    fields: [],
  },
];

export const genderOptions: RadioOptionsType[] = [
  {
    label: "Kobieta",
    value: "female",
  },
  {
    label: "Mężczyzna",
    value: "male",
  },
  {
    label: "Inna",
    value: "other",
  },
];

export const measurementPlaceOptions: RadioOptionsType[] = [
  {
    label: "Czoło",
    value: "forehead",
  },
  {
    label: "Pacha",
    value: "pacha",
  },
];

export const diseaseOptions: DropdownOptionsType[] = [
  {
    label: "Choroba nr 1",
    value: "1",
  },
  {
    label: "Choroba nr 2",
    value: "2",
  },
];

export const hospitalWardOptions: DropdownOptionsType[] = [
  {
    label: "Odział szpitalny nr 1",
    value: "1",
  },
  {
    label: "Odział szpitalny nr 2",
    value: "2",
  },
];

export const symptomsOptions: MultiCheckboxOptionsType[] = [
  {
    label: "Dreszcze",
    value: "1",
  },
  {
    label: "Senność/osłabienie",
    value: "2",
  },
  {
    label: "Krwawienia/wybroczyny/zasinienie",
    value: "3",
  },
  {
    label: "Toksyczności śluzkówkowe",
    value: "4",
  },
  {
    label: "Nudności lub wymioty",
    value: "5",
  },
  {
    label: "Inne",
    value: "6",
  },
];

export const HGBunits: MultiButtonOptionType[] = [
  { value: "g/dl", label: "g/dl" },
  { value: "mmol/l", label: "mmol/l" },
];

export type RadioOptionsType = {
  label: string;
  value: string;
};
export type MultiCheckboxOptionsType = {
  label: string;
  value: string;
};

export type DropdownOptionsType = {
  label: string;
  value: string;
};

export type MultiButtonOptionType = {
  label: string;
  value: string;
};
