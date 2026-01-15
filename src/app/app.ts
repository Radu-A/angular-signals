// TODO: Import inject from @angular/core
import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { CartStore } from "./cart-store";
import { CartDisplay } from "./cart-display";

@Component({
  selector: "app-root",
  imports: [CartDisplay],
  template: `
    <div class="shopping-app">
      <header>
        <h1>Signals with Services Demo</h1>
        <div class="cart-badge">
          Cart: {{ cartStore.totalQuantity() }} items (\${{
            cartStore.totalPrice()
          }})
        </div>
      </header>

      <main>
        <cart-display />
      </main>
    </div>
  `,
  styleUrl: "./app.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  cartStore = inject(CartStore);
}
