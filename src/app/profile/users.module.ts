import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LayoutComponentUsers } from "../profile/layout/layout.component";
import { ListComponent } from "./list/list.component";
import { AddEditComponent } from "./add-edit/add-edit.component";
import { UsersRoutingModule } from "./users-routing.module";
import { UploadPictureComponent } from './upload-picture/upload-picture.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule],
  declarations: [LayoutComponentUsers, ListComponent, AddEditComponent, UploadPictureComponent],
})
export class UsersModule {}
