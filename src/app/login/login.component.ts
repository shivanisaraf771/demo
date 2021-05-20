import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AngularFirestore } from "@angular/fire/firestore";
@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  Username = "";
  Password = "";
  loginForm: any;
  result: any[] = [];
  constructor(
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private toastr: ToastrService,
    private route: Router,
    private afStorage: AngularFirestore,
    private dialogRef: MatDialogRef<LoginComponent>
  ) {}

  ngOnInit(): void {
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
    let temp;
    this.auth
      .signInWithEmailAndPassword(
        this.loginForm.value["email"],
        this.loginForm.value["password"]
      )
      .then(
        (res) => {
          localStorage.setItem("email", this.loginForm.value["email"]);
          var prom = new Promise((resolve, rejects) => {
            this.afStorage
              .collection("registration", (ref) =>
                ref.where("email", "==", localStorage.getItem("email"))
              )
              .valueChanges()
              .subscribe((val) => {
                console.log("VAL", val);
                this.result.push(val);
                console.log("res1", this.result);
                resolve("res");
              });
          }).then(() => {
            if (this.result[0][0]["Type"] == "job_seeker") {
              this.route.navigate(["/profile"]);
            } else {
              this.route.navigate(["/job-provider"]);
            }
          });

          this.dialogRef.close();
        },
        (errr) => {
          this.toastr.error(
            "Username and password not found please register first !!!!",
            "Error",
            {
              timeOut: 5000,
            }
          );
        }
      );
  }
  onNoClick() {
    this.dialogRef.close();
  }
}
