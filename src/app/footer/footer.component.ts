import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import type { NavLink } from "../nav-link";
import { TwitterIconComponent } from "../twitter-icon/twitter-icon.component";
import { InstagramIconComponent } from "../instagram-icon/instagram-icon.component";
import { DiscordIconComponent } from "../discord-icon/discord-icon.component";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [
		RouterModule,
		TwitterIconComponent,
		InstagramIconComponent,
		DiscordIconComponent,
	],
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

				<div
					class="md:bg-red-200a flex flex-1 justify-end gap-7 sm:gap-4 md:gap-7"
				>
					<a
						href="https://discord.com"
						target="_blank"
						class="rounded-full p-3 hover:bg-primary"
					>
						<app-discord-icon />
					</a>
					<a
						href="https://x.com"
						target="_blank"
						class="rounded-full p-3 hover:bg-primary"
					>
						<app-twitter-icon />
					</a>
					<a
						href="https://www.instagram.com"
						target="_blank"
						class="rounded-full p-3 hover:bg-primary"
					>
						<app-instagram-icon />
					</a>
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
