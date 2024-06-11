// encounter.service.ts
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Encounter } from '../encounter';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class EncounterService {
  private apiUrl = 'http://localhost:3000/encounters';

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error);
    return error.message || error; // Return an empty array on error
  }

  getEncounters(): Observable<Encounter[]> {
    return this.http
      .get<Encounter[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  delEncounter(id: string): Observable<Encounter> {
    const url = `${this.apiUrl}/${id}`;
    const mytoken = JSON.parse(sessionStorage['accesstoken']);
    const tokenheaders = {
      headers: new HttpHeaders({ 'x-access-token': mytoken.token }),
    };
    return this.http
      .delete<Encounter>(url, tokenheaders)
      .pipe(catchError(this.handleError));
  }
}
