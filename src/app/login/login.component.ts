import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AngularFirestore } from "@angular/fire/firestore";
import { ServiceService } from "../services/service.service";
@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  Username = "";
  Password = "";
  listRegistration = <any>[];
  loginForm: any;
  result: any[] = [];
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private route: Router,
    private _service: ServiceService,
    private afStorage: AngularFirestore,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {
    this.listRegistration = this._service.getRegistration();

    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
        ],
      ],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  Login() {
    // let temp;

    var prom = new Promise((resolve, rejects) => {
      resolve("res");
    }).then(() => {
      let email = this.GetIndexByValue(
        this.listRegistration,
        this.loginForm.value.email
      );
      let password = this.GetIndexByValue(
        this.listRegistration,
        this.loginForm.value.password
      );
      if (typeof email == "object" && typeof password == "object") {
        if (email["Type"] == "job_seeker") {
          this.route.navigate(["/profile"]);
        } else if (email["Type"] == "job_provider") {
          this.route.navigate(["/job-provider"]);
        }
        localStorage.setItem("email", email["email"]);
      } else {
        this.toastr.error(
          "Username and password not found please register first !!!!",
          "Error",
          {
            timeOut: 5000,
          }
        );
        this.route.navigate(["/home"]);
      }
    });

    this.dialogRef.close();
  }
  GetIndexByValue(arrayName: any, value: any) {
    for (var i = 0; i < arrayName.length; i++) {
      for (var key in arrayName[i]) {
        if (arrayName[i][key] == value) {
          return arrayName[i];
        }
      }
    }

    return -1;
    //console.log(index);
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
