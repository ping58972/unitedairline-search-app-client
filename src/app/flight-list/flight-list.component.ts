import { Component, OnInit } from "@angular/core";
import { FlightService } from "../search/flight/flight.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root", //"app-flight-list",
  templateUrl: "./flight-list.component.html",
  styleUrls: ["./flight-list.component.css"]
})
export class FlightListComponent implements OnInit {
  flights: Array<any>;
  flight: any;
  constructor(private flightService: FlightService) {}

  ngOnInit() {
    this.flightService.getAll().subscribe(data => {
      this.flights = data;
    });
  }
  getByFlightNumber(form: NgForm) {
    this.flightService
      .getByFlightNumber(form.value.flightNumber)
      .subscribe(data => {
        if (Array.isArray(data)) {
          this.flights = data;
        } else {
          this.flights = [data];
        }
      });
    this.flightService
      .getByDepartureDate(form.value.departure)
      .subscribe(date => {});
    console.log(form);
  }
  log(x: NgForm) {
    console.log(x.value.flightNumber);
  }
}
