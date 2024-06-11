export class Encounter {
  public id: any;
  public name: string;
  public dice: string;
  public entities: {
    entity: string;
    roll: string;
  }[];
  result?: any;

  constructor(name: string) {
    this.name = name;
    this.dice = ''; // Initialize the dice property with an empty string
    this.entities = [];
  }
}
