import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AuthGuard } from "./_helpers";

const accountModule = () =>
  import("./account/account.module").then((x) => x.AccountModule);
const usersModule = () =>
  import("./profile/users.module").then((x) => x.UsersModule);

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "profile", loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: "account", loadChildren: accountModule },

  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
