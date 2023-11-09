export interface PetInterface {
  id: any;
  category: {
    id: any;
    name: string;
  };
  name: string;
  photoUrls: [string];
  tags: [
    {
      id: any;
      name: string;
    }
  ];
  status: string;
}
// === FIRST VERSION of Interface ===
// export interface PetInterface {
//   id: number;
//   category: PetCategory;
//   name: string;
//   photoUrls: string[];
//   tags: PetTag[];
//   status: string;
// }

// export interface PetCategory {
//   id: number;
//   name: string;
// }

// export interface PetTag {
//   id: number;
//   name: string;
// }

// === API SERVER - EXAMPLE ===

// {
//   "id": 0,
//   "category": {
//     "id": 0,
//     "name": "string"
//   },
//   "name": "doggie",
//   "photoUrls": [
//     "string"
//   ],
//   "tags": [
//     {
//       "id": 0,
//       "name": "string"
//     }
//   ],
//   "status": "available"
// }