import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./home/home.component";
import { AvatarModule } from "ngx-avatar";
import {
  ButtonsModule,
  CarouselModule,
  CheckboxModule,
  IconsModule,
  InputsModule,
  MDBBootstrapModule,
  WavesModule,
} from "angular-bootstrap-md";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatIconModule } from "@angular/material/icon";
import { MatSliderModule } from "@angular/material/slider";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import { environment } from "src/environments/environment";
import { ToastrModule } from "ngx-toastr";
import { FlexLayoutModule } from "@angular/flex-layout";
import { RegistrationComponent } from "./registration/registration.component";
import { AboutUSComponent } from "./about-us/about-us.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { JobsComponent } from "./jobs/jobs.component";
import { EmployersComponent } from "./employers/employers.component";
import { ClientsComponent } from "./clients/clients.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterModule } from "@angular/router";
import { BackButtonDisableModule } from "angular-disable-browser-back-button";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { JobProviderComponent } from "./job-provider/job-provider.component";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AboutUSComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    JobsComponent,
    EmployersComponent,
    ClientsComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    NavbarComponent,
    JobProviderComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatNativeDateModule,
    NgbModule,
    RouterModule,
    MatFormFieldModule,
    MatDialogModule,
    IvyCarouselModule,
    ToastrModule,
    MatDividerModule,
    MatCardModule,
    BrowserAnimationsModule,
    ScrollingModule,
    MatButtonModule,
    AngularFirestoreModule,
    MatSelectModule,
    CarouselModule,
    AvatarModule,
    WavesModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatCheckboxModule,
    CheckboxModule,
    ButtonsModule,
    InputsModule,
    FlexLayoutModule,
    IconsModule,
    AngularFireAuthModule,
    MatIconModule,
    MDBBootstrapModule,
    MatChipsModule,
    MatInputModule,
    MatSliderModule,
    MatDatepickerModule,
    CommonModule,
    BackButtonDisableModule.forRoot({
      preserveScrollPosition: true,
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: "toast-top-right",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
