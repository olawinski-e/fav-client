import { Component } from "@angular/core";
import { AccountService } from "./services";
import { User } from "./models";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Favlix";
  deviceInfo = null;

  user: User;

  constructor(
    private accountService: AccountService,
    private deviceService: DeviceDetectorService
  ) {
    this.accountService.user.subscribe((x) => (this.user = x));
    this.findDevice();
  }

  logout() {
    this.accountService.logout();
  }

  findDevice() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    const isDesktopDevice = this.deviceService.isDesktop();
    console.log(this.deviceInfo);
    console.log(isMobile); // returns if the device is a mobile device (android / iPhone / windows-phone etc)
    console.log(isTablet); // returns if the device us a tablet (iPad etc)
    console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
  }
}
