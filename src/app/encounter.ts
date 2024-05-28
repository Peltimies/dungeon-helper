// encounter.ts
export interface Encounter {
  id: any;
  name: string;
  dice: string;
  entities: {
    entity: string;
    roll: string;
  }[];
  result?: any;
}
