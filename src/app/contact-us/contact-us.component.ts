import { Component, HostListener, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

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
    private router: Router
  ) {}

  ngOnInit() {
    this.ContactUs = this.fb.group({
      first_name: ["", [Validators.required, Validators.pattern("^[A-Za-z]+")]],
      last_name: ["", [Validators.required, Validators.pattern("^[A-Za-z]+")]],
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      comments: ["", [Validators.required, Validators.pattern("^[A-Za-z]+")]],
    });
  }

  onSubmited() {
    if (this.ContactUs.valid) {
      this.afStorage
        .collection("Contact")
        .add(this.ContactUs.value)
        .then((res) => {
          this.toastr.success(
            "Saved Successfully",
            "Record Saved Successfully....!",
            { timeOut: 5000 }
          );
          this.ContactUs.reset();
        });
    } else {
      this.toastr.error("Record not Save", "please check all the fields....!", {
        timeOut: 5000,
      });
    }
  }
}
