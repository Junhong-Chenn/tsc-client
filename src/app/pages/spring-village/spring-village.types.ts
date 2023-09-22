import {BeneficiaryComponent} from "./beneficiary/beneficiary.component";
import {NavigatorsComponent} from "./navigators/navigators.component";

export enum SpringVillageTypes {
  Beneficiary = 'Beneficiary',
  Staff = 'Staff',
  Cabins = 'Cabins',
  Services = 'Services',
  Test = 'Test',
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
