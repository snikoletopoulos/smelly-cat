import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [RouterModule],
	template: `
		<footer class="bg-black py-6 space-y-10">
			<section class="container mt-8 flex justify-between mx-auto text-white">
				<div>LOGO</div>

				<nav
					class="flex-1 gap-12 flex justify-center items-center font-extralight"
				>
					@for (link of links; track link.label) {
						<a [routerLink]="link.href">{{ link.label }}</a>
					}
				</nav>

				<div>SOCIAL LINKS</div>
			</section>

			<p class="text-gray-200 text-center text-xs">
				Copyright &#169; SmellyCat {{ currentYear }}
			</p>
		</footer>
	`,
})
export class FooterComponent {
	currentYear = new Date().getFullYear();
	links: { href: string; label: string }[] = [
		{
			href: "/privacy-policy",
			label: "Privacy Policy",
		},
		{
			href: "/terms-conditions",
			label: "Terms & Conditions",
		},
		{
			href: "/blog",
			label: "Blog",
		},
		{
			href: "/support",
			label: "Support",
		},
	];
}
