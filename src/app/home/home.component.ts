import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
import { RegistrationComponent } from "../registration/registration.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  title = "demo";
  color = "accent";
  checked: boolean = false;

  constructor(config: NgbCarouselConfig, public dialog: MatDialog) {
    //
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }
  ngOnInit() {}
  openDialog(): void {
    const dialogRef = this.dialog.open(RegistrationComponent, {
      width: "640px",
      height: "800px",
      disableClose: true,
    });
  }
}
