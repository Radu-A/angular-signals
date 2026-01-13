// TODO: Import signal from @angular/core
import { Component, signal, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  userStatus = signal<"online" | "offline">("offline");

  goOnline() {
    this.userStatus.set("online");
  }

  goOffline() {
    this.userStatus.set("offline");
  }

  togglStatus() {
    this.userStatus.update((current) =>
      current === "online" ? "offline" : "online"
    );
  }
}
