import { Registration } from "./../user";
import { FormControl, NgForm, FormGroup } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatChipInputEvent } from "@angular/material/chips";
import { MatDialogRef } from "@angular/material/dialog";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { CdkDragDrop, DragDropModule } from "@angular/cdk/drag-drop";
import { FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ConfirmedValidator } from "../confirmed.validator";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { ServiceService } from "../services/service.service";
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
  file: any;
  private basePath = "/uploads";
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  hobbies: Hobbies[] = [];
  mockUrl: string = "http://localhost:3000/users";
  headerOption = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  item$: Observable<any[]>;
  constructor(
    private dialogRef: MatDialogRef<RegistrationComponent>,
    private afStorage: AngularFirestore,
    private storage: AngularFireStorage,
    private fb: FormBuilder,
    private _service: ServiceService,
    private toastr: ToastrService,
    private auth: AngularFireAuth,
    private httpClient: HttpClient
  ) {
    this.item$ = afStorage.collection("registration").valueChanges();
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
        Type: ["", Validators.required],
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
      this.file = file;
      this.registerForm.patchValue({
        profile: file,
      });
      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => {
        // called once readAsDataURL is completed
        if (event.target) this.url = event.target.result;
      };
    }
  }
  public delete() {
    this.url = null;
  }

  onSubmit() {
    this.submitted = true;
    const newUser: Registration = Object.assign({}, this.registerForm.value);
    this._service.save(newUser).subscribe((res: Registration) => {});
    if (this.registerForm.valid) {
      this.toastr.success(
        "Saved Successfully",
        "Record Saved Successfully....!",
        {
          timeOut: 5000,
        }
      );

      //console.log(this.registerForm.value);
    } else {
      this.toastr.error("Record not Save", "please check all the fields....!", {
        timeOut: 5000,
      });
    }
  }

  //pushFileToStorage() {
  //const filePath = `${this.basePath}/${this.registerForm.value["email"]}`;
  // const uploadTask = this.storage.upload(filePath, this.file);
  //}
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
