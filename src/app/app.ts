// TODO: Import model from @angular/core
import { Component, model, ChangeDetectionStrategy } from "@angular/core";
import { CustomCheckbox } from "./custom-checkbox/custom-checkbox";

@Component({
  selector: "app-root",
  imports: [CustomCheckbox],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  agreedToTerms = model(false);
  eneableNotifications = model(true);

  toggleTermsFromParent() {
    this.agreedToTerms.set(!this.agreedToTerms());
  }

  resetAll() {
    this.agreedToTerms.set(false);
    this.eneableNotifications.set(false);
  }
}
