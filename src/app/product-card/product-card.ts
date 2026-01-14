// TODO: Import input from @angular/core
import { Component, input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "product-card",
  templateUrl: "./product-card.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  name = input.required<string>();
  price = input.required<number>();
  available = input<boolean>(true);
}
