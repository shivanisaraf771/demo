import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { AngularFireStorage } from "@angular/fire/storage";
import { ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
  private basePath = "/uploads";
  data: any;
  constructor(
    private route: Router,
    private db: AngularFireDatabase,
    private afStorage: AngularFirestore,
    private storage: AngularFireStorage
  ) {}
  result: any;
  jobs: any[] = [];
  uploadTask: any;
  ngOnInit(): void {
    this.result = this.afStorage
      .collection("registration", (ref) =>
        ref.where("email", "==", localStorage.getItem("email"))
      )
      .valueChanges();

    var temp = "uploads" + "/" + localStorage.getItem("email");
    this.uploadTask = this.storage.ref(temp).getDownloadURL();

    //jobs details fetch from firebase
    this.afStorage
      .collection("Jobs")
      .get()
      .subscribe((ss) => {
        ss.docs.forEach((doc) => {
          this.jobs.push(doc.data());
        });
      });
  }
  getFiles(numberItems: any): AngularFireList<any> {
    return this.db.list(this.basePath, (ref) => ref.limitToLast(numberItems));
  }
  logout() {
    localStorage.clear();
    this.route.navigate(["/home"]);
  }
}
