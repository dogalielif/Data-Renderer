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

  constructor(private dataService: DataService) {}

  ngOnInit() {
    setTimeout(() => {
      this.dataService.getData().subscribe(data => {
        this.data = data;
        this.isLoading = false;
      });
    }, 1000);
  }
}
