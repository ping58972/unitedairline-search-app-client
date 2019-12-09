import { Component, OnInit } from "@angular/core";
import { FlightService } from "../search/flight/flight.service";

@Component({
  selector: "app-root", //"app-flight-list",
  templateUrl: "./flight-list.component.html",
  styleUrls: ["./flight-list.component.css"]
})
export class FlightListComponent implements OnInit {
  flights: Array<any>;
  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.flightService.getAll().subscribe(data => {
      this.flights = data;
    });
  }
}
