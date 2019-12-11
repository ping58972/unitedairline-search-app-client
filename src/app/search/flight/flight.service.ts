import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, config } from "rxjs";

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
    let str = date.toString() + "T00:00:00";
    // let strDate =
    //   "" +
    //   date.getFullYear().toString() +
    //   "-" +
    //   date.getMonth().toString() +
    //   "-" +
    //   date.getDate().toString() +
    //   "T00:00:00";
    let dateStr = { departure: str };
    console.log(dateStr);
    return this.http.post("//localhost:8088/search/date", dateStr);
  }
}
