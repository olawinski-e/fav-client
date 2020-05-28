import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Component({
  selector: "upload-picture",
  templateUrl: "./upload-picture.component.html",
  styleUrls: ["./upload-picture.component.scss"],
})
export class UploadPictureComponent implements OnInit {
  title = "fileUpload";
  images;
  multipleImages = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  selectMultipleImage(event) {
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("file", this.images);

    this.http.post<any>(`${environment.apiUrl}/file`, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  onMultipleSubmit() {
    const formData = new FormData();
    for (let img of this.multipleImages) {
      formData.append("files", img);
    }

    this.http
      .post<any>("http://localhost:3000/multipleFiles", formData)
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
  }
}
