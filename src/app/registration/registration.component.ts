import { FormControl, NgForm, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatDialogRef } from "@angular/material/dialog";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { CdkDragDrop, DragDropModule } from "@angular/cdk/drag-drop";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ConfirmedValidator } from "../confirmed.validator";
export interface Hobbies {
  name: string;
}
@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;
  selectable = true;
  form: FormGroup = new FormGroup({});
  removable = true;
  addOnBlur = true;
  url: any;
  vertical = false;
  value = 0;
  invert = false;
  disabled = false;
  autoTicks = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  tickInterval = 1;
  registerForm: any;
  submitted = false;
  myArray: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  hobbies: Hobbies[] = [];
  //item$: Observable<any[]>;
  constructor(
    private dialogRef: MatDialogRef<RegistrationComponent>,
    private afStorage: AngularFirestore,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private auth: AngularFireAuth
  ) {
    //  this.item$ = afStorage.collection("registration").valueChanges();
    //console.log(this.item$);
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        first_name: [
          "",
          [Validators.required, Validators.pattern("^[A-Za-z]+")],
        ],
        last_name: [
          "",
          [Validators.required, Validators.pattern("^[A-Za-z]+")],
        ],
        email: [
          "",
          [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
          ],
        ],
        UserName: ["", Validators.required],
        password: ["", Validators.required],
        Conform_password: ["", Validators.required],

        phone_number: [
          "",
          [
            Validators.required,
            Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),
          ],
        ],
        address: ["", Validators.required],
        age: ["", Validators.required],
        state: ["", Validators.required],
        country: ["", Validators.required],
        hobbie: ["", Validators.required],
        // profile: ["", Validators.required],
      },
      {
        validator: ConfirmedValidator("password", "Conform_password"),
      }
    );
  }
  get f() {
    return this.registerForm.controls;
  }

  getDemo() {
    // var docRef = this.afStorage.collection("registration").doc("reg");
    // constructor(firestore: AngularFirestore) {
    //   this.item$ = firestore.collection('items').valueChanges();
    // console.log(docRef);
    // .snapshotChanges()
    // .stateChanges()
    // or .auditTrail()
    // this.afStorage
    //   .collection("registration")
    //   .get()
    //   .subscribe((ss) => {
    //     ss.docs.forEach((doc) => {
    //       console.log("DOC", doc);
    //     });
    //   });
    // console.log(this.myArray);
    // return this.afStorage.collection("registration").doc("reg").valueChanges();
  }
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || "").trim()) {
      this.hobbies.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(fruit: Hobbies): void {
    const index = this.hobbies.indexOf(fruit);

    if (index >= 0) {
      this.hobbies.splice(index, 1);
    }
  }

  getSliderTickInterval(): number | "auto" {
    if (this.showTicks) {
      return this.autoTicks ? "auto" : this.tickInterval;
    }

    return 0;
  }
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      const file = event.target.files[0];
      // this.registerForm.patchValue({
      //   profile: file,
      // });
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        if (event.target) this.url = event.target.result;
      };
    }
    this.registerForm.p.setValue(event.target.files[0]);
  }
  public delete() {
    this.url = null;
  }

  async onSubmit() {
    this.submitted = true;

    var result = await this.auth.createUserWithEmailAndPassword(
      this.registerForm.value["email"],
      this.registerForm.value["password"]
    );
    console.log(this.registerForm);
    if (this.registerForm.valid) {
      this.afStorage
        .collection("registration")
        .add(this.registerForm.value)
        .then((res) => {
          this.toastr.success(
            "Saved Successfully",
            "Record Saved Successfully....!",
            { timeOut: 5000 }
          );
        });
    } else {
      this.toastr.error("Record not Save", "please check all the fields....!", {
        timeOut: 5000,
      });
    }
  }

  onClose() {
    this.dialogRef.close();
  }
}
function transferArrayItem(
  _data: any,
  data: any,
  previousIndex: any,
  currentIndex: any
) {
  throw new Error("Function not implemented.");
}
