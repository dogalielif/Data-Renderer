import { Component } from "@angular/core";
import { DataService } from "./services/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  data: Object = {};
  isLoading: boolean = true;
  currentTimeout;

  constructor(private dataService: DataService) {}

  // Here setTimeout has been added for checking the spinner 
  ngOnInit() {
    this.currentTimeout = setTimeout(() => {
      this.dataService.getData().subscribe(data => {
        this.data = data;
        this.isLoading = false;
      });
    }, 1000);
  }

  ngOnDestroy() {
    clearTimeout(this.currentTimeout);
  }
}
