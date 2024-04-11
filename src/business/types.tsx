import {
  Control,
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { symptomsOptions } from ".";

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

export type UnitType = "g/dl" | "mmol/l" | "%" | "μl";

export type FormInputProps = {
  name: string;
  control: Control<FieldValues, any>;
  label: string;
  placeholder?: string;
};

export type InputRadioProps = FormInputProps & {
  options: RadioOptionsType[];
};
export type InputDropdownProps = FormInputProps & {
  options: DropdownOptionsType[];
};

export type FormInputMultiCheckboxProps = FormInputProps & {
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
};

export type MarkerRowProps = {
  control: Control<FieldValues, any>;
  markerName: string;
  label: string;
  options: UnitType[];
};

export type AlarmingSymptoms = (typeof symptomsOptions)[number]["value"][];

export type ResultType = {
  summary:
    | "examinationIn3days"
    | "examinationIn2days"
    | "urgentConsultation"
    | "consultation";
  alarmingSymptoms: AlarmingSymptoms;
};
