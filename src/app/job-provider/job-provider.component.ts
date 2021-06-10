import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { GridColumnStyleBuilder } from "@angular/flex-layout/grid/typings/column/column";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ServiceService } from "../services/service.service";
import { Jobs } from "./../user";

@Component({
  selector: "app-job-provider",
  templateUrl: "./job-provider.component.html",
  styleUrls: ["./job-provider.component.scss"],
})
export class JobProviderComponent implements OnInit {
  jobprovider: any;
  constructor(
    private fb: FormBuilder,
    private afStorage: AngularFirestore,
    private storage: AngularFireStorage,
    private toastr: ToastrService,
    private auth: AngularFireAuth,
    private route: Router,
    private _service: ServiceService
  ) {}

  ngOnInit(): void {
    this.jobprovider = this.fb.group({
      Company_Name: ["", [Validators.required]],
      Role: ["", [Validators.required]],
      Skills: ["", [Validators.required]],
      date: ["", [Validators.required]],
    });
  }
  send() {
    if (this.jobprovider.valid) {
      const newUser: Jobs = Object.assign({}, this.jobprovider.value);
      this._service.saveJobs(newUser).subscribe((res: any) => {});
      this.jobprovider.reset();
    } else {
      this.toastr.error("Record not Save", "please check all the fields....!", {
        timeOut: 5000,
      });
    }
    // this.submitted = true;
  }
  logout() {
    localStorage.clear();
    this.route.navigate(["/home"]);
  }
  appliedJobs() {
    this.route.navigate(["/applied-jobs"]);
  }
}
