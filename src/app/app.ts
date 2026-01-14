// TODO: Import signal from @angular/core
import {
  Component,
  signal,
  computed,
  linkedSignal,
  ChangeDetectionStrategy,
} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  userStatus = signal<"online" | "away" | "offline">("offline");

  notificationsEnabled = linkedSignal(() => this.userStatus() === "online");
  statusMessage = computed(() => {
    const status = this.userStatus();
    switch (status) {
      case "online":
        return "Available for meetings and messages";
      case "away":
        return "Temporarily away, willl respond soon";
      case "offline":
        return "Status unknown";
    }
  });
  isWithinWorkingHours = computed(() => {
    const now = new Date();
    const isWorkingHour = now.getHours() >= 9 && now.getHours() < 17;
    const isWeekday = now.getDay() > 0 && now.getDay() < 6;
    return isWorkingHour && isWeekday && this.userStatus() != "offline";
  });

  goOnline() {
    this.userStatus.set("online");
  }

  setAway() {
    this.userStatus.set("away");
  }

  goOffline() {
    this.userStatus.set("offline");
  }

  togglStatus() {
    const current = this.userStatus();
    switch (current) {
      case "online":
        this.userStatus.set("away");
        break;
      case "away":
        this.userStatus.set("offline");
        break;
      case "offline":
        this.userStatus.set("online");
        break;
    }
  }

  toggleNotifications() {
    this.notificationsEnabled.set(!this.notificationsEnabled());
  }
}
