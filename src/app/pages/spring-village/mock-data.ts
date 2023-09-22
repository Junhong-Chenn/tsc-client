import { SpringVillageTypes } from "./spring-village.types";

export const MockData = {
  [SpringVillageTypes.Beneficiary]: [
    {
      "name": "Rebecca, Lyons",
      "dateOfBirth": "1976-03-09",
      "email": "",
      "role": "Beneficiary",
      "contactNumber": "123-456-7890",
      "gender":"Female",
      "moveInDate": "2021-09-21",
      "cabinNumber": 1,
      "developGoal": ["Mental Health", "Substance Use"],
      "conditionSummary": "Rebecca has opiate use history and addiction, she needs rehab.",
      "assignedNavigator": "Julie, Warren",
      "inTcs": true,
      "servicePlanList": [
        {
          "serviceName":"MentalHealth",
          "serviceProvider": "PROMISE",
          "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720",
          "serviceCategory": "MentalHealth",
          "serviceDate": "2022-09-22",
          "serviceStatus": "Completed",
          "serviceComments": "Rebecca has completed mental cure session.",
          "serviceFeedback": "Rebecca feels better.",
          "caseWorker": "Joe, Collins"
        }
      ],
      "caseClosure": {
        "leaveDate": "",
        "leaveReason": "",
        "closureComments": ""
      }
    },
    {
      "name": "Lynn, Watter",
      "dateOfBirth": "1974-03-09",
      "email": "",
      "role": "Beneficiary",
      "contactNumber": "123-456-7890",
      "gender":"Female",
      "moveInDate": "2021-09-21",
      "cabinNumber": 2,
      "developGoal": ["Mental Health", "Substance Use"],
      "conditionSummary": "Lynn has opiate use history and addiction, she needs rehab.",
      "assignedNavigator": "Julie, Warren",
      "servicePlanList": [
        {
          "serviceName":"MentalHealth",
          "serviceProvider": "PROMISE",
          "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720",
          "serviceCategory": "MentalHealth",
          "serviceDate": "2022-09-21",
          "serviceStatus": "Completed",
          "serviceComments": "Lynn has completed mental cure session.",
          "serviceFeedback": "Lynn needs another session.",
          "caseWorker": "Joe, Collins"
        },
        {
          "serviceName":"MentalHealth",
          "serviceProvider": "PROMISE",
          "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720",
          "serviceCategory": "MentalHealth",
          "serviceDate": "2022-10-21",
          "serviceStatus": "Completed",
          "serviceComments": "Lynn has completed mental cure session.",
          "serviceFeedback": "Lynn is healthy now.",
          "caseWorker": "Joe, Collins"
        }
      ],
      "caseClosure": {
        "leaveDate": "2023-09-21",
        "leaveReason": "Permanent Housing",
        "closureComments": "Lynn has found permanent housing."
      }
    }
  ],
  [SpringVillageTypes.Staff]: [
    {"name": "Julie, Warren",
      "email": "julie@gmail.com",
      "role": "Navigator",
      "organizationName": "TSC",
      "contactNumber": "123-456-7890",
      "gender":"Female",
      "onboardDate": "2021-09-21"
    },
    {"name": "Will, Collins",
      "email": "collins@gmail.com",
      "role": "Navigator",
      "organizationName": "TSC",
      "contactNumber": "223-456-7890",
      "onboardDate": "2021-09-21"
    },
    {"name": "Dirk, Fisher",
      "email": "ryanfisher@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Emily, Chou",
      "email": "amychou@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Zack, Davis",
      "email": "mikedavis@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Howard, Myers",
      "email": "katemyers@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Albert, Dawn",
      "email": "lukedawn@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Bob, Fan",
      "email": "bobfan@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Chris, Sheen",
      "email": "vincent@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Tom, Duan",
      "email": "shawnduan@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Taylor, Wong",
      "email": "jameswong@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Sky, Song",
      "email": "maxsong@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Larry, Chen",
      "email": "giachen@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Jim, Chen",
      "email": "junhong@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Tina, Wei",
      "email": "phoebewei@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Sally, Chen",
      "email": "sallychen@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Adam, Zhang",
      "email": "adamzhang@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Peter, Yang",
      "email": "luceneyang@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Norman, Huang",
      "email": "teeniehuang@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Cecily, Wu",
      "email": "harrywu@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Naomie, Wong",
      "email": "tabriswong@gmail.com",
      "contactNumber": "123-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    },
    {"name": "Frank, Martens",
      "email": "markmartens@gmail.com",
      "contactNumber": "223-456-7890",
      "role": "Navigator",
      "organizationName": "TSC",
      "onboardDate": "2021-09-21"
    }

  ],
  [SpringVillageTypes.Cabins]: [
    {
      "number": 1,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Rebecca, Lyons"]
    },
    {
      "number": 2,
      "available": true,
      "location": "Delaware",
      "facility": "regular",
      "tenant": []
    },
    {
      "number": 3,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Bobby, Terry"]
    },
    {
      "number": 4,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Joyce, Freck"]
    },
    {
      "number": 5,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Kathleen, Baker"]
    },
    {
      "number": 6,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Jacob, Morris"]
    },
    {
      "number": 7,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Freddie, Carswel"]
    },
    {
      "number": 8,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Jacqueline, Tolbert", "James, Fisher"]
    },
    {
      "number": 9,
      "available": true,
      "location": "Delaware",
      "facility": "regular",
      "tenant": []
    },
    {
      "number": 10,
      "available": true,
      "location": "Delaware",
      "facility": "regular",
      "tenant": []
    },
    {
      "number": 11,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Joy, Warner"]
    },
    {
      "number": 12,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Jeffrey, Botts"]
    },
    {
      "number": 13,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Wendy, Armstrong"]
    },
    {
      "number": 14,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Jessica, Wagner", "Anner, Perez"]
    },
    {
      "number": 15,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Kevin, Roberts"]
    },
    {
      "number": 16,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Eunice, Carter"]
    },
    {
      "number": 7,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Kristen, Stevenson"]
    },
    {
      "number": 18,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Wendy, Bowen", "Clyde, Parker"]
    },
    {
      "number": 19,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Margaret, Carter"]
    },
    {
      "number": 20,
      "available": false,
      "location": "Delaware",
      "facility": "regular",
      "tenant": ["Darrell, Stanley"]
    }
  ],
  [SpringVillageTypes.Services]: [
    {
      "serviceName": "New Medical",
      "description": "Description of this service.",
      "organizationName": "La Red Health Center",
      "serviceAvailability": "provided",
      "serviceCategory": "Physical Health",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Mental Health",
      "description": "Description of this service.",
      "organizationName": "PROMISE",
      "serviceAvailability": "provided",
      "serviceCategory": "Mental Health",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Substance Use Treatment",
      "description": "Description of this service.",
      "organizationName": "The DSAMH Bridge Clinic",
      "serviceAvailability": "provided",
      "serviceCategory": "Substance Use",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Banking Services",
      "description": "Description of this service.",
      "organizationName": "Del-One Credit Union",
      "serviceAvailability": "provided",
      "serviceCategory": "Financial",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Online Peer Support",
      "description": "Description of this service.",
      "organizationName": "Marigold",
      "serviceAvailability": "provided",
      "serviceCategory": "Social Support",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Veterinary Care",
      "description": "Description of this service.",
      "organizationName": "Brandywine Valley SPCA",
      "serviceAvailability": "provided",
      "serviceCategory": "Mental Health",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Pet Food",
      "description": "Description of this service.",
      "organizationName": "Bone and Yarn",
      "serviceAvailability": "provided",
      "serviceCategory": "Other",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Holistic Recovery Services",
      "description": "Description of this service.",
      "organizationName": "ACT Team",
      "serviceAvailability": "provided",
      "serviceCategory": "Physical Health",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Addiction Treatment",
      "description": "Description of this service.",
      "organizationName": "Brandywine Counseling and Community Services",
      "serviceAvailability": "provided",
      "serviceCategory": "Substance Use",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Case Management",
      "description": "Description of this service.",
      "organizationName": "FSCAA",
      "serviceAvailability": "provided",
      "serviceCategory": "Social Security",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "Social Support",
      "description": "Description of this service.",
      "organizationName": "Joyfully Connected Foundation",
      "serviceAvailability": "provided",
      "serviceCategory": "Social Support",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    },
    {
      "serviceName": "NET Centers",
      "description": "Description of this service.",
      "organizationName": "NET MARRV",
      "serviceAvailability": "provided",
      "serviceCategory": "Other",
      "organizationAddress": "Sussex County 308 N.Railroad Avenue Georgetown, DE 19947, DE19720"
    }
  ],
}
