import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.scss"],
})
export class ClientsComponent implements OnInit {
  constructor() {}
  images: any;
  ngOnInit(): void {
    this.images = [
      {
        path:
          "https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg",
      },
      {
        path: "https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg",
      },
      {
        path:
          "https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg",
      },
      {
        path:
          "https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg",
      },
      {
        path: "https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg",
      },
      {
        path:
          "https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg",
      },
      {
        path:
          "https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg",
      },
      {
        path:
          "https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg",
      },
      {
        path:
          "https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg",
      },
      {
        path:
          "https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg",
      },
      {
        path:
          "https://image.freepik.com/free-vector/retro-label-on-rustic-background_82147503374.jpg",
      },
    ];
  }
}
