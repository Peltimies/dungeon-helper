import { Component } from '@angular/core';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrls: ['./dungeon.component.css'],
})
export class DungeonComponent {
  items = [
    { label: '', checked: false },
    { label: '', checked: false },
    { label: '', checked: false },
    { label: '', checked: false },
    { label: '', checked: false },
    { label: '', checked: false },
  ];

  encounterMessage: string | null = null;
  turnMessage: string | null = null;
  allChecked = false;
  turns = 0;

  encounterTable = [
    'Bandits',
    'Anturai',
    'Wild animals',
    'Rangers',
    'Hunters',
    'Cultists',
  ];

  checkEncounters(): void {
    const firstChecked = this.items[0].checked;
    const secondChecked = this.items[1].checked;
    const thirdChecked = this.items[2].checked;
    const fourthChecked = this.items[3].checked;
    const fifthChecked = this.items[4].checked;
    const sixthChecked = this.items[5].checked;
    const isProblematicChecked =
      firstChecked ||
      secondChecked ||
      sixthChecked ||
      fourthChecked ||
      fifthChecked;

    if (thirdChecked || !isProblematicChecked) {
      const encounterChance = Math.floor(Math.random() * 6);
      console.log(encounterChance, 'encounterChance');

      if (encounterChance === 0) {
        // 1 in 6 chance
        const randomEncounterIndex = Math.floor(
          Math.random() * this.encounterTable.length
        );
        this.encounterMessage = `Encounter: ${this.encounterTable[randomEncounterIndex]}`;
      }
    }

    if (sixthChecked) {
      this.turns++;
      this.turnMessage = `One dungeon turn has passed. Total turns: ${this.turns}`;
    } else {
      this.turnMessage = null;
    }

    this.checkAllChecked();

    if (!thirdChecked && !sixthChecked) {
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
