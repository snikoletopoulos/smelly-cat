import { Component, Input } from "@angular/core";

@Component({
  selector: "app-footer-nav-link",
  standalone: true,
  imports: [],
  template: ` <p><ng-content /></p> `,
})
export class FooterNavLinkComponent {
  @Input() href = "";
}
