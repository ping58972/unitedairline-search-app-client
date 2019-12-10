import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FlightService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get("//localhost:8088/search");
  }
  getByFlightNumber(id: Number): Observable<any> {
    return this.http.get(`//localhost:8088/search/${id}`);
  }
  getByDepartureDate(date: Date): Observable<any> {
    return this.http.get(`//localhost:8088/search/date/${date}`);
  }
}
