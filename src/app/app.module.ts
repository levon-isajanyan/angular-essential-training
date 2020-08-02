import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Import app compnent


NgModule({
  // Import & register variety modules from angular
  imports: [
    BrowserModule
  ],
  // Make availble for module directive and pipes
  declarations: [
    AppComponent
  ],
  // Root or entry point from which compoenent to start
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
