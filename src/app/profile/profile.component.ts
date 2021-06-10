import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { ChangeDetectionStrategy } from "@angular/core";
import { ServiceService } from "../services/service.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  private basePath = "/uploads";
  listRegistration = <any>[];
  data: any;
  constructor(
    private route: Router,
    private db: AngularFireDatabase,
    private _service: ServiceService,
    private afStorage: AngularFirestore,
    private storage: AngularFireStorage
  ) {}
  result: any;
  jobs = <any>[];
  uploadTask: any;
  ngOnInit(): void {
    this.listRegistration = this._service.getRegistration();
    this.result = this.GetIndexByValue(
      this.listRegistration,
      localStorage.getItem("email")
    );

    var temp = "uploads" + "/" + localStorage.getItem("email");
    this.uploadTask = this.storage.ref(temp).getDownloadURL();

    //jobs details fetch from firebase

    this.jobs = this._service.getJobs();
    // this.afStorage
    //   .collection("Jobs")
    //   .get()
    //   .subscribe((ss) => {
    //     ss.docs.forEach((doc) => {
    //       this.jobs.push(doc.data());
    //     });
    //   });
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
  getFiles(numberItems: any): AngularFireList<any> {
    return this.db.list(this.basePath, (ref) => ref.limitToLast(numberItems));
  }
  logout() {
    localStorage.clear();
    this.route.navigate(["/home"]);
  }
}
