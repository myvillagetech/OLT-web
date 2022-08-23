import {
  Component,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
  Inject,
} from "@angular/core";
import { Event, NavigationStart, Router, NavigationEnd } from "@angular/router";
import { DOCUMENT } from "@angular/common";
import { Location } from "@angular/common";
import { CommonServiceService } from "./../../common-service.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  auth: boolean = false;
  isPatient: boolean = false;
  splitVal;
  url;
  base;
  page;
  showAdmin;
  showPharmacyAdmin;
  constructor(
    @Inject(DOCUMENT) private document,
    private cdr: ChangeDetectorRef,
    public router: Router,
    location: Location,
    public commonService: CommonServiceService
  ) {
    this.commonService.message.subscribe((res) => {
      if (res === "patientLogin") {
        this.auth = true;
        // this.isPatient = true;
      }
      if (res === "doctorLogin") {
        this.auth = true;
        // this.isPatient = false;
      }
      if (res === "logout") {
        this.auth = false;
        this.isPatient = false;
      }
    });
  }

  ngOnInit(): void {
    if (localStorage.getItem("auth") === "true") {
      this.auth = true;
      this.isPatient =
        localStorage.getItem("patient") === "true" ? true : false;
    }
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.splitVal = event.url.split("/");
        this.base = this.splitVal[1];
        this.page = this.splitVal[2];
        if (
          this.base === "" ||
          this.base === "home" ||
          this.base === "homeslider2" ||
          this.base === "pharmacy"
        ) {
          this.showAdmin = false;
          this.showPharmacyAdmin = true;
        } else {
          this.showAdmin = true;
          this.showPharmacyAdmin = false;
        }
      }
      if (event instanceof NavigationEnd) {
        $("html").removeClass("menu-opened");
        $(".sidebar-overlay").removeClass("opened");
        $("main-wrapper").removeClass("slide-nav");
      }
    });
    if (event instanceof NavigationEnd) {
      $("html").removeClass("menu-opened");
      $(".sidebar-overlay").removeClass("opened");
      $("main-wrapper").removeClass("slide-nav");
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
    this.loadDynmicallyScript("assets/js/script.js");
  }
  loadDynmicallyScript(js) {
    var script = document.createElement("script");
    script.src = js;
    script.async = false;
    document.head.appendChild(script);
    script.onload = () => this.doSomethingWhenScriptIsLoaded();
  }
  doSomethingWhenScriptIsLoaded() {}
  change(name) {
    this.page = name;
    this.commonService.nextmessage("main");
  }
  mapGrid() {
    this.router.navigate(["/map-grid"]);
  }

  mapList() {
    this.router.navigate(["/map-list"]);
  }

  addStyle(val) {
    if (val === "home") {
      if (document.getElementById("home").style.display == "block") {
        document.getElementById("home").style.display = "none";
      } else {
        document.getElementById("home").style.display = "block";
      }
    }
    if (val === "doctor") {
      if (document.getElementById("doctor").style.display == "block") {
        document.getElementById("doctor").style.display = "none";
      } else {
        document.getElementById("doctor").style.display = "block";
      }
    }
    if (val === "patient") {
      if (document.getElementById("patient").style.display == "block") {
        document.getElementById("patient").style.display = "none";
      } else {
        document.getElementById("patient").style.display = "block";
      }
    }
    if (val === "pharmacy") {
      if (document.getElementById("pharmacy").style.display == "block") {
        document.getElementById("pharmacy").style.display = "none";
      } else {
        document.getElementById("pharmacy").style.display = "block";
      }
    }
    if (val === "pages") {
      if (document.getElementById("pages").style.display == "block") {
        document.getElementById("pages").style.display = "none";
      } else {
        document.getElementById("pages").style.display = "block";
      }
    }
    if (val === "blog") {
      if (document.getElementById("blog").style.display == "block") {
        document.getElementById("blog").style.display = "none";
      } else {
        document.getElementById("blog").style.display = "block";
      }
    }
    if (val === "admin") {
      if (document.getElementById("admin").style.display == "block") {
        document.getElementById("admin").style.display = "none";
      } else {
        document.getElementById("admin").style.display = "block";
      }
    }
  }

  doctor(name) {
    this.page = name;
    this.router.navigate(["/doctor/dashboard"]);
  }

  logout() {
    localStorage.clear();
    this.auth = false;
    this.isPatient = false;
    this.router.navigate(["/login"]);
  }

  home() {
    this.commonService.nextmessage("main");
    this.router.navigateByUrl("/").then(() => {
      this.router.navigate(["/"]);
    });
  }

  navigate(name) {
    this.page = name;
    if (name === "Admin") {
      this.router.navigate(["/admin"]);
      this.commonService.nextmessage("admin");
    }
  }
}
