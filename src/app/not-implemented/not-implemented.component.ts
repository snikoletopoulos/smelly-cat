import { Component } from "@angular/core";

@Component({
	selector: "app-not-implemented",
	standalone: true,
	imports: [],
	template: `<div
		class="flex h-[calc(100vh-theme(spacing.96))] items-center justify-center"
	>
		<p class="text-gray-500">Route not yet implemented.</p>
	</div>`,
})
export class NotImplementedComponent {}
