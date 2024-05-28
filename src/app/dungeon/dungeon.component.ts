import { Component, ChangeDetectorRef } from '@angular/core';
import { EncounterService } from '../services/encounter.service';
import { Encounter } from '../encounter';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css'],
})
export class DungeonComponent {
  items = Array.from({ length: 6 }, () => ({ label: '', checked: false }));
  encounterTable: Encounter[] = [];
  encounterMessage: string | null = null;
  turnMessage: string | null = null;
  allChecked = false;
  turns = 0;
  showResult = false;

  constructor(
    private encounterService: EncounterService,
    private cdr: ChangeDetectorRef
  ) {
    this.fetchEncounters();
  }

  fetchEncounters(): void {
    this.encounterService.getEncounters().subscribe({
      next: (data) => (this.encounterTable = data),
      error: (error) => console.error('There was an error!', error),
    });
  }

  checkEncounters(): void {
    const problematicChecked = this.items
      .filter((_, index) => index !== 2 && index !== 5)
      .some((item) => item.checked);

    if (this.items[2].checked || !problematicChecked) {
      const encounterChance = Math.floor(Math.random() * 6);
      console.log(encounterChance, 'encounterChance');
      if (encounterChance === 0) {
        const randomEncounterIndex = Math.floor(
          Math.random() * this.encounterTable.length
        );
        const selectedEncounter = this.encounterTable[randomEncounterIndex];
        const randomEntityIndex = Math.floor(
          Math.random() * selectedEncounter.entities.length
        );
        const randomEntity =
          selectedEncounter.entities[randomEntityIndex].entity;
        this.encounterMessage = `Encounter: ${randomEntity}`;
        this.showResult = true;
      } else {
        this.encounterMessage = null;
      }
    }

    if (this.items[5].checked) {
      this.turns++;
      this.turnMessage = `One dungeon turn has passed. Total turns: ${this.turns}`;
    } else {
      this.turnMessage = null;
    }

    this.checkAllChecked();

    if (!this.items[2].checked && !this.items[5].checked) {
      this.encounterMessage = null;
    }
  }

  checkAllChecked(): void {
    this.allChecked = this.items.every((item) => item.checked);
    if (this.allChecked) {
      this.resetCheckboxes();
    }
  }

  resetCheckboxes(): void {
    setTimeout(() => {
      this.items.forEach((item) => (item.checked = false));
      this.allChecked = false;
    }, 500); // Delay to show the last interaction before reset
  }

  onCheckboxClick(item: any, event: any): void {
    if (item.checked) {
      event.preventDefault(); // Prevent deselection
    }
  }
}
