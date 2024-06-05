import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header></app-header>

    <main class="bg-gray-100">
      <div class="container mx-auto">
        <router-outlet></router-outlet>
      </div>
    </main>

    <app-footer> </app-footer>
  `,
})
export class AppComponent {}
