import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MobileNavigationComponent } from "../mobile-navigation/mobile-navigation.component";
import type { NavLink } from "../nav-link";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterModule, MobileNavigationComponent],
	template: `
		<header class="border-b border-b-gray-400 py-2">
			<section class="container mx-auto flex items-center justify-between px-8">
				<a routerLink="/"
					><img src="img/logo-dark.png" alt="Smelly Cat logo"
				/></a>

				<div>
					<nav class="hidden justify-between md:flex md:gap-6 lg:gap-12">
						@for (link of links; track link.label) {
							<a
								[routerLink]="link.href"
								class="text-bold text-sm hover:text-primary"
								>{{ link.label }}</a
							>
						}
					</nav>

					<app-mobile-navigation [links]="links"></app-mobile-navigation>
				</div>
			</section>
		</header>
	`,
})
export class HeaderComponent {
	links: NavLink[] = [
		{
			href: "/adopt-kittens",
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
			href: "/",
			label: "Contact",
		},
	];
}
