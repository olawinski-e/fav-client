import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { User } from "../models";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class ImageService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("user"))
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public uploadImage(image: File): Observable<any> {
    const formData = new FormData();

    formData.append("image", image);

    return this.http.post(`${environment.apiUrl}/api/single-upload`, formData);
  }
}
