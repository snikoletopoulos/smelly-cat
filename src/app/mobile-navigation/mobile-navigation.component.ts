import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import type { NavLink } from "../nav-link";
import { cn } from "@/lib/ui";

@Component({
	selector: "app-mobile-navigation",
	standalone: true,
	imports: [],
	template: `
		<div class="md:hidden">
			<button (click)="toggleNav()" class="relative flex flex-col gap-2">
				<div class="inline-block h-0.5 w-8 bg-black"></div>
				<div class="inline-block h-0.5 w-8 bg-black"></div>
				<div class="inline-block h-0.5 w-8 bg-black"></div>
			</button>

			<div [className]="backgroundClass"></div>

			<nav [className]="navClass">
				<button
					class="absolute right-10 top-10 flex size-10 items-center justify-center sm:right-20"
					(click)="toggleNav()"
				>
					<div
						class="inline-block h-0.5 w-8 rotate-[-135deg] bg-black transition-transform"
					></div>
					<div
						class="absolute inline-block h-0.5 w-8 rotate-[135deg] bg-black transition-transform"
					></div>
				</button>

				<ul class="w-full list-none text-center">
					@for (link of links; track link.href) {
						<li class="m-4">
							<button
								(click)="navigate(link.href)"
								class="relative inline-block px-8 py-4 text-2xl font-light uppercase text-black transition-all duration-300"
							>
								{{ link.label }}
							</button>
						</li>
					}
				</ul>
			</nav>
		</div>
	`,
})
export class MobileNavigationComponent {
	@Input({ required: true }) links: NavLink[] = [];

	isOpen = false;

	constructor(private router: Router) {}

	toggleNav() {
		this.isOpen = !this.isOpen;
	}

	get backgroundClass() {
		return cn(
			"size-4 z-10 bg-gradient-to-r min-w-0 min-h-0 pointer-events-none from-primary to-green-200 rounded-[50%] rounded-tr-none fixed -top-4 -right-4 transition-all duration-700",
			{
				"scale-[1.5] min-w-[100vw] min-h-screen": this.isOpen,
			}
		);
	}

	get navClass() {
		return cn(
			"z-20 fixed left-0 top-0 h-screen w-0 flex-wrap whitespace-nowrap opacity-0 pointer-events-none transition-all flex justify-center items-center duration-700",
			{
				"opacity-100 w-full pointer-events-auto": this.isOpen,
			}
		);
	}

	navigate(href: string) {
		this.router.navigate([href]);
		this.isOpen = false;
	}
}
