import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [],
  template: `
    <header class="border-b py-2 border-b-gray-400">
      <section class="container flex justify-between mx-auto">
        LOGO

        <nav class="flex justify-between gap-12 text-bold">
          @for (link of links; track link.label) {
            <p>{{ link.label }}</p>
          }
        </nav>
      </section>
    </header>
  `,
})
export class HeaderComponent {
  links: { href: string; label: string }[] = [
    {
      href: "/adopt-kittiens",
      label: "Adopt Kittens",
    },
    {
      href: "/stories",
      label: "Kitty Stories",
    },
    {
      href: "/about-us",
      label: "About us",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/contact",
      label: "Contact",
    },
  ];
}
