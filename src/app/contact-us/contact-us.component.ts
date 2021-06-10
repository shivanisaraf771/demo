import { Component, HostListener, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ServiceService } from "../services/service.service";
import { ContactUs } from "../user";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.scss"],
})
export class ContactUsComponent implements OnInit {
  submitted = false;
  ContactUs: any;

  constructor(
    private fb: FormBuilder,
    private afStorage: AngularFirestore,
    private toastr: ToastrService,
    private auth: AngularFireAuth,
    private router: Router,
    private _service: ServiceService
  ) {}

  ngOnInit() {
    this.ContactUs = this.fb.group({
      name: ["", [Validators.required, Validators.pattern("^[A-Za-z]+")]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      message: ["", [Validators.required, Validators.pattern("^[A-Za-z]+")]],
    });
  }
  onSubmited() {
    if (this.ContactUs.valid) {
      const newUser: ContactUs = Object.assign({}, this.ContactUs.value);
      this._service.saveContactUs(newUser).subscribe((res: any) => {});

      this.toastr.success(
        "Saved Successfully",
        "Record Saved Successfully....!",
        { timeOut: 2000 }
      );
      this.ContactUs.reset();
    } else {
      this.toastr.error("Record not Save", "please check all the fields....!", {
        timeOut: 5000,
      });
    }
  }
  logout() {
    localStorage.clear();
    this.router.navigate(["/home"]);
  }
}
