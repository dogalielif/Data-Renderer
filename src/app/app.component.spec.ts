import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { MenuComponent, MenuItemComponent } from "./components";
import { SpinnerComponent } from "./+lib/spinner/spinner.component";

describe("AppComponent", () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SpinnerComponent,
        MenuComponent,
        MenuItemComponent,
      ],
      imports: [FormsModule, HttpClientTestingModule ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
