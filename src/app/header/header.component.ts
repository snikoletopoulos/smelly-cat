import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterModule],
	template: `
		<header class="border-b border-b-gray-400 py-2">
			<section class="container mx-auto flex justify-between">
				<a routerLink="/">SMELLY CAT</a>

				<nav class="text-bold flex justify-between sm:gap-12">
					@for (link of links; track link.label) {
						<a [routerLink]="link.href">{{ link.label }}</a>
					}
				</nav>
			</section>
		</header>
	`,
})
export class HeaderComponent {
	links: { href: string; label: string }[] = [
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
			href: "/contact",
			label: "Contact",
		},
	];
}
