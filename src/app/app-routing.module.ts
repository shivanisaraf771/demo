import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutUSComponent } from "./about-us/about-us.component";
import { ClientsComponent } from "./clients/clients.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { EmployersComponent } from "./employers/employers.component";
import { HomeComponent } from "./home/home.component";
import { JobsComponent } from "./jobs/jobs.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "about-us",
    component: AboutUSComponent,
  },
  {
    path: "jobs",
    component: JobsComponent,
  },
  {
    path: "clients",
    component: ClientsComponent,
  },
  {
    path: "employers",
    component: EmployersComponent,
  },

  {
    path: "contact-us",
    component: ContactUsComponent,
  },

  {
    path: "login",
    component: LoginComponent,
  },

  {
    path: "home",
    component: HomeComponent,
  },

  { path: "", redirectTo: "/home", pathMatch: "full" },

  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
