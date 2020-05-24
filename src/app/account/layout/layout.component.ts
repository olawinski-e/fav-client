import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "src/app/services";

@Component({
  selector: "layout-account",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponentAccount implements OnInit {
  constructor(private router: Router, private accountService: AccountService) {
    // redirect to home if already logged in
    if (this.accountService.userValue) {
      this.router.navigate(["/"]);
    }
  }

  ngOnInit() {}
}
