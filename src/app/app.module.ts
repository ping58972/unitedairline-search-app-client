import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HttpClientModule } from "@angular/common/http";
import { FlightListComponent } from "./flight-list/flight-list.component";

@NgModule({
  declarations: [FlightListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [FlightListComponent]
})
export class AppModule {}
