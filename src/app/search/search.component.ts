import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}
  btnClick() {
    this.router.navigateByUrl("/search");
  }

  ngOnInit(): void {}
  logout() {
    localStorage.clear();
    this.router.navigate(["/home"]);
  }
}
