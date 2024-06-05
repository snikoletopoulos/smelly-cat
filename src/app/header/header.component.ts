import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-header",
	standalone: true,
	imports: [RouterModule],
	template: `
		<header class="border-b py-2 border-b-gray-400">
			<section class="container flex justify-between mx-auto">
				<a routerLink="/">SMELLY CAT</a>

				<nav class="flex justify-between gap-12 text-bold">
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
