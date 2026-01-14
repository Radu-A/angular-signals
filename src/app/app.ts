// TODO: Import signal from @angular/core
import { Component, signal, ChangeDetectionStrategy } from "@angular/core";
import { ProductCard } from "./product-card/product-card";

@Component({
  selector: "app-root",
  imports: [ProductCard],
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  productName = signal("Demo Product");
  productPrice = signal(99);
  productAvailable = signal(true);

  updateProduct() {
    this.productName.set("Update Product");
    this.productPrice.set(149);
  }

  toggleAvailability() {
    this.productAvailable.set(!this.productAvailable());
  }
}
