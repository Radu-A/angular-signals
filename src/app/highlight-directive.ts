import { Directive, input, signal, computed } from "@angular/core";

@Directive({
  selector: "[highlight]",
  host: {
    "[style.backgroundColor]": "backgroundStyle()",
    "(mouseenter)": "onMouseEnter()",
    "(mouseleave)": "onMouseLeave()",
  },
})
export class HighlightDirective {
  // inputs
  color = input<string>("yellow");
  intensity = input<number>(0.3);
  // signals
  private isHovered = signal(false);
  // computed
  backgroundStyle = computed(() => {
    const baseColor = this.color();
    const alpha = this.isHovered() ? this.intensity() : this.intensity() * 0.5;

    const colorMap: Record<string, string> = {
      yellow: `rgba(255, 255, 0, ${alpha})`,
      blue: `rgba(0, 100, 255, ${alpha})`,
      green: `rgba(0, 200, 0, ${alpha})`,
      red: `rgba(255, 0, 0, ${alpha})`,
    };
    return colorMap[baseColor] || colorMap["yellow"];
  });
  // methods
  onMouseEnter() {
    this.isHovered.set(true);
  }
  onMouseLeave() {
    this.isHovered.set(false);
  }
}
