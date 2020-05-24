import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { LayoutComponentAccount } from "./layout/layout.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AccountRoutingModule],
  declarations: [LayoutComponentAccount, LoginComponent, RegisterComponent],
})
export class AccountModule {}
