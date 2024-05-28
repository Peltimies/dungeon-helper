import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root',
})
export class InMemoryService implements InMemoryDbService {
  constructor() {}
  createDb() {
    return {
      encounters: [
        {
          id: 1,
          name: 'Bandits',
          amount: '',
        },
        {
          id: 2,
          name: 'Anturai',
          amount: '',
        },
        {
          id: 3,
          name: 'Wild animals',
          amount: '',
        },
        {
          id: 4,
          name: 'Hunters',
          amount: '',
        },
        {
          id: 5,
          name: 'Rangers',
          amount: '',
        },
        {
          id: 6,
          name: 'Cultist',
          amount: '',
        },
      ],
    };
  }
}
