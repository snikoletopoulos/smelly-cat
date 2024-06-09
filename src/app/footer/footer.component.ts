import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import type { NavLink } from "../nav-link";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [RouterModule],
	template: `
		<footer class="space-y-10 bg-black py-6">
			<section
				class="container mx-auto mt-8 flex flex-col items-center justify-between gap-10 px-8 text-white sm:flex-row sm:gap-0"
			>
				<p class="flex-1">
					<img src="img/logo-light.png" alt="Smelly Cat logo" />
				</p>

				<nav
					class="flex-2 flex flex-col justify-center gap-4 text-center font-extralight lg:flex-row lg:gap-12"
				>
					@for (link of links; track link.label) {
						<a [routerLink]="link.href" class="text-sm hover:text-primary">{{
							link.label
						}}</a>
					}
				</nav>

				<div class="flex flex-1 justify-end gap-2">
					<img src="img/discord-icon.png" alt="Discord icon" />
					<img
						src="img/twitter-icon.png"
						width="88"
						height="88"
						alt="Discord icon"
					/>
					<img
						src="img/instagram-icon.png"
						width="88"
						height="88"
						alt="Discord icon"
					/>
				</div>
			</section>

			<p class="text-center text-xs text-copyright">
				Copyright &#169; SmellyCat {{ currentYear }}
			</p>
		</footer>
	`,
})
export class FooterComponent {
	currentYear = new Date().getFullYear();
	links: NavLink[] = [
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
