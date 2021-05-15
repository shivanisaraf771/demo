import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  loginDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "450px",
      height: "500px",
      disableClose: true,
    });
  }
}
