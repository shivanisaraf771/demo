import { ContactUs, Jobs, Registration } from "./../user";
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ServiceService {
  public subject = new Subject<any>();
  listRegistration = <any>[];
  listJobs = <any>[];
  listContactUs = <any>[];
  constructor(private httpClient: HttpClient) {
    this.listRegistration = [];
    this.listJobs = [];
    this.listContactUs = [];
    this.listContactUs = this.getContact();
    this.listRegistration = this.getRegistration();
    this.listJobs = this.getJobs();
  }

  save(reg: Registration): Observable<Registration> {
    if (reg.id === null) {
      const maxId = this.listRegistration.reduce(function (e1: any, e2: any) {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      reg.id = maxId + 1;
      this.listRegistration.push(reg);
    }

    return this.httpClient
      .post<Registration>("http://localhost:3000/registration", reg, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe();
  }

  saveJobs(job: Jobs): Observable<Jobs> {
    if (job.id === null) {
      const maxId = this.listJobs.reduce(function (e1: any, e2: any) {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      job.id = maxId + 1;
      this.listJobs.push(job);
    }

    return this.httpClient
      .post<Jobs>("http://localhost:3000/jobs", job, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe();
  }
  saveContactUs(contact: ContactUs): Observable<ContactUs> {
    if (contact.id === null) {
      const maxId = this.listContactUs.reduce(function (e1: any, e2: any) {
        return e1.id > e2.id ? e1 : e2;
      }).id;
      contact.id = maxId + 1;
      this.listContactUs.push(contact);
    }

    return this.httpClient
      .post<ContactUs>("http://localhost:3000/contactUs", contact, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe();
  }
  // create(user: Registration): Observable<Registration> {
  //   return this.httpClient.post<Registration>(
  //     "http://localhost:3000/users",
  //     user,
  //     {
  //       headers: new HttpHeaders({
  //         "Content-Type": "application/json",
  //       }),
  //     }
  //   );
  // }
  getRegistration(): Observable<Registration[]> {
    let temp = this.httpClient.get<Registration[]>(
      "http://localhost:3000/registration"
    );
    temp.forEach((element: any) => {
      this.listRegistration = element;
    });
    return this.listRegistration;
  }
  getJobs(): Observable<Jobs[]> {
    let jobtemp = this.httpClient.get<Jobs[]>("http://localhost:3000/jobs");
    jobtemp.forEach((element: any) => {
      this.listJobs = element;
    });
    return this.listJobs;
  }
  getContact(): Observable<ContactUs[]> {
    let contactTemp = this.httpClient.get<ContactUs[]>(
      "http://localhost:3000/contactUs"
    );
    contactTemp.forEach((element: any) => {
      this.listContactUs = element;
    });
    return this.listContactUs;
  }
}
