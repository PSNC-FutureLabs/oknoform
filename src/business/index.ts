import { FormFields } from "./form-schema";
import { DropdownOptionsType, MultiCheckboxOptionsType, RadioOptionsType, UnitType } from "./types";

export const versionTag = {
	majorNo: 0,
	minorNo: 4,
	patchNo: 0,
	status: "alpha",	
	date: "2024.06.22",
};

export type StepType = {
	id: number;
	name: string;
	fields: Array<string | Array<string>>;
};

export const steps: Array<StepType> = [
	{
		id: 1,
		name: "Informacje o pacjencie",
		fields: ["dateOfBirth", "gender", "disease", "hospitalWard"],
	},
	{
		id: 2,
		name: "Niepokojące objawy",
		fields: ["temperature", "symptoms"],
	},
	{
		id: 3,
		name: "Aktualne badania",
		fields: [
			"examination-date",
			["HGB.value", "HGB.unit"],
			"WBC",
			"PLT",
			"ALT",
			"AST",
			["NEUT.value", "NEUT.unit"],
		],
	},
	{
		id: 4,
		name: "Poprzednie badania",
		fields: [
			"examination-date2",
			["HGB2", "Hgb2Unit"],
			"WBC2",
			"PLT2",
			"ALT2",
			"AST2",
			["NEUT2.value", "NEUT2.unit"],
		],
	},
];

export const genderOptions: RadioOptionsType[] = [
	{
		label: "kobieta",
		value: "female",
	},
	{
		label: "mężczyzna",
		value: "male",
	},
	{
		label: "inna",
		value: "other",
	},
];

// to be removed if no longer needed
export const measurementPlaceOptions: RadioOptionsType[] = [
	{
		label: "czoło",
		value: "forehead",
	},
	{
		label: "pacha",
		value: "armpit",
	},
];

export const diseaseOptions: DropdownOptionsType[] = [
	{
		label: "ALL (ostra białaczka limfoblastyczna)",
		value: "all",
	},
	{
		label: "AML (ostra białaczka mieloblastyczna/szpikowa)",
		value: "aml",
	},
	{
		label: "CML (przewlekły nowotwór mieloproliferacyjny)",
		value: "cml",
	},
	{
		label: "Guzy germinalne",
		value: "germ-cell-tumors",
	},
	{
		label: "Chłoniak Hodgkina",
		value: "hodgkin-lymphoma",
	},
	{
		label: "Chłoniak Burkitta",
		value: "burkitt-lymphoma",
	},
	{
		label: "Inne chłoniaki",
		value: "other-lymphomas",
	},
	{
		label: "Neuroblastoma",
		value: "neuroblastoma",
	},
	{
		label: "Guz Wilmsa",
		value: "wilms-tumor",
	},
	{
		label: "Mięsaki tkanek miękkich",
		value: "soft-tissue-sarcomas",
	},
	{
		label: "Guzy OUN",
		value: "central-nervous-systems-tumors",
	},
	{
		label: "MDS (zespoły mielodysplastyczne)",
		value: "mds",
	},
	{
		label: "HLH (limfohistiocytoza hemofagocytowa)",
		value: "hlh",
	},
];

export const hospitalWardOptions: DropdownOptionsType[] = [
	{
		label: "Oddział III",
		value: "o3",
	},
	{
		label: "Oddział V",
		value: "o5",
	},
	{
		label: "Oddział TSK",
		value: "otsk",
	},
	{
		label: "Oddział Dzienny V/D",
		value: "odvd",
	},
	{
		label: "Poradnia Onkologiczna",
		value: "po",
	},
	{
		label: "Poradnia TSK",
		value: "ptsk",
	},
];

export const symptomsOptions: MultiCheckboxOptionsType[] = [
	{
		label: "dreszcze",
		value: "chills",
	},
	{
		label: "senność/osłabienie",
		value: "drowsiness-weakness",
	},
	{
		label: "ból głowy",
		value: "headache",
	},
	{
		label: "toksyczności śluzówkowe",
		value: "mucosal-toxicities",
	},
	{
		label: "utrzymujące się wymioty",
		value: "vomiting",
	},
	{
		label: "biegunka",
		value: "diarrhea",
	},
	{
		label: "krwawienie",
		value: "bleeding",
	},
	{
		label: "nowe/świeże wybroczyny",
		value: "fresh-petechiae",
	},
	{
		label: "sinica lub zasinienie ciała",
		value: "cyanosis-or-body-bruising",
	},
	{
		label: "nasilone obrzęki obwodowe",
		value: "severe-peripheral-edema",
	},
	{
		label: "drgawki / brak kontaktu",
		value: "seizures-unresponsiveness",
	},
	{
		label: "zaburzenia widzenia",
		value: "vision-disturbances",
	},
	{
		label: "ból / niepokój",
		value: "pain-anxiety",
	},
];

export const HgbUnits: UnitType[] = ["g/dl", "mmol/l"];
export const NeutUnits: UnitType[] = ["%", "μl"];

export const defaultFromValues: Partial<FormFields> = {
	disease: "",
	hospitalWard: "",
	symptoms: [],
	HGB: {
		value: 0,
		unit: "g/dl",
	},
	WBC: { value: 0 },
	PLT: { value: 0 },
	ALT: { value: 0 },
	AST: { value: 0 },
	NEUT: {
		value: 0,
		unit: "%",
	},
	HGB2: {
		value: 0,
		unit: "g/dl",
	},
	WBC2: { value: 0 },
	PLT2: { value: 0 },
	ALT2: { value: 0 },
	AST2: { value: 0 },
	NEUT2: {
		value: 0,
		unit: "%",
	},
};
