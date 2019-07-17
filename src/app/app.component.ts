import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "./shared/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnDestroy {
  title = "angular-material-demo";
  data: any;
  subscription: Subscription;

  constructor(private dataService: DataService) {
    // subscribe to home component messages
    this.subscription = this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
