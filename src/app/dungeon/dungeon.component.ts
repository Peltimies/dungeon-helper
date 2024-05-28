import { Component } from '@angular/core';

@Component({
  selector: 'app-dungeon',
  templateUrl: './dungeon.component.html',
  styleUrl: './dungeon.component.css',
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
}
