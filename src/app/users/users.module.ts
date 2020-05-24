import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LayoutComponentUsers } from "../users/layout/layout.component";
import { ListComponent } from "./list/list.component";
import { AddEditComponent } from "./add-edit/add-edit.component";
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, UsersRoutingModule],
  declarations: [LayoutComponentUsers, ListComponent, AddEditComponent],
})
export class UsersModule {}
