// TODO: Import model and input from @angular/core
import {
  Component,
  model,
  input,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "custom-checkbox",
  templateUrl: "./custom-checkbox.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCheckbox {
  checked = model.required<boolean>();

  label = input<string>("");

  toggle() {
    this.checked.set(!this.checked());
  }
}
