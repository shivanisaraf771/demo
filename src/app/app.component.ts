import { Component } from "@angular/core";
import {
  NavigationStart,
  Router,
  Event as NavigationEvent,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "demo";
  current_url: boolean = false;
  constructor(private router: Router) {
    this.router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        if (
          event.url == "/home" ||
          event.url == "/about-us" ||
          event.url == "/jobs" ||
          event.url == "/clients" ||
          event.url == "/employers" ||
          event.url == "/contact-us" ||
          event.url == "/"
        )
          this.current_url = true;
        else this.current_url = false;
      }
    });
  }
}
