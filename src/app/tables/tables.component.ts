// tables.component.ts
import { ChangeDetectorRef, Component } from '@angular/core';
import { EncounterService } from '../services/encounter.service';
import { Encounter } from '../encounter';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent {
  encounters: Encounter[] = [];
  showResult = false;
  rolledAmount: number = 0;

  constructor(
    private encounterService: EncounterService,
    private cdr: ChangeDetectorRef
  ) {
    this.encounterService.getEncounters().subscribe(
      (data) => (this.encounters = data),
      (error) => console.error('There was an error!', error)
    );
  }

  rollForEntity(encounter: Encounter): void {
    const randomNumber = Math.floor(Math.random() * 6);
    const randomEntity = encounter.entities[randomNumber].entity;
    console.log(randomNumber);
    console.log(encounter.entities[randomNumber].entity);
    encounter.result = randomEntity; // Store the result in the encounter object
    this.cdr.detectChanges(); // Update the view
    this.showResult = true;
  }

  rollAmount(): number {
    return Math.floor(Math.random() * 6);
  }

  private getRandomEntity(): string {
    const entities = [
      'Bandits',
      'Anturai',
      'Wild animals',
      'Rangers',
      'Hunters',
      'Cultists',
    ]; // Define your entities
    const randomIndex = Math.floor(Math.random() * entities.length);
    return entities[randomIndex];
  }
}
