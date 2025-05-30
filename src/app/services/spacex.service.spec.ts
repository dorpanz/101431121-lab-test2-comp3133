import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceXService {
  private baseUrl = 'https://api.spacexdata.com/v3/launches'; 

  constructor(private http: HttpClient) {}

  getAllMissions(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getMissionById(flightNumber: string | number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${flightNumber}`);
  }
  
}
