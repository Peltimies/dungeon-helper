// encounter.ts
export interface Encounter {
  _id: any;
  encounter: Encounter[];
  id: any;
  name: string;
  dice: string;
  entities: {
    entity: string;
    roll: string;
  }[];
  result?: any;
}
