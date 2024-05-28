// encounter.service.ts
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Encounter } from '../encounter';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EncounterService {
  private apiUrl = 'http://localhost:3000/encounters';

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<Encounter[]> {
    console.error('An error occurred', error);
    return of([]); // Return an empty array on error
  }

  getEncounters(): Observable<Encounter[]> {
    return this.http
      .get<Encounter[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }
}
