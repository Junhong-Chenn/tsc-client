import {BeneficiaryComponent} from "./beneficiary/beneficiary.component";
import {NavigatorsComponent} from "./navigators/navigators.component";

export enum SpringVillageTypes {
  Beneficiary = 'Beneficiary',
  Staff = 'Staff',
  Cabins = 'Cabins',
  Services = 'Services',
  // Test = 'Test',
  // Statistics = 'Statistics',
}

// export const SpringVillageComponents = {
//   [SpringVillageTypes.Beneficiary]: BeneficiaryComponent,
//   [SpringVillageTypes.Navigators]: NavigatorsComponent,
//   [SpringVillageTypes.Cabins]: BeneficiaryComponent,
//   [SpringVillageTypes.Services]: BeneficiaryComponent,
//   [SpringVillageTypes.Test]: BeneficiaryComponent,
// }

export type SpringVillageTypeKey = keyof typeof SpringVillageTypes;
export type SpringVillageType = typeof SpringVillageTypes[SpringVillageTypeKey];

export interface TableData {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  [key: string]: any;
}

export const ServiceTypeMapping: any = {
  "serviceName": "Service Name",
  "serviceProvider": "Service Provider",
  "organizationAddress": "Organization Address",
  "serviceCategory": "Service Category",
  "serviceDate": "Service Date",
  "serviceStatus": "Service Status",
  "serviceComments": "Service Comments",
  "serviceFeedback": "Service Feedback",
  "caseWorker": "Case Worker"
};

export const ServiceTypes = Object.keys(ServiceTypeMapping);

import type { JSON2SheetOpts, WritingOptions, BookType } from 'xlsx';

export interface ExcelData<T = any> {
  header: string[];
  results: T[];
  meta: { sheetName: string };
}

export interface JsonToSheet<T = any> {
  data: T[];
  header?: T;
  filename?: string;
  json2sheetOpts?: JSON2SheetOpts;
  write2excelOpts?: WritingOptions;
}

export interface AoAToSheet<T = any> {
  data: T[][];
  header?: T[];
  filename?: string;
  write2excelOpts?: WritingOptions;
}

export interface ExportModalResult {
  filename: string;
  bookType: BookType;
}

export const DEF_FILE_NAME = 'excel-list.xlsx';
