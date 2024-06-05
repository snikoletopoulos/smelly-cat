import { Component } from "@angular/core";

@Component({
	selector: "app-not-implemented",
	standalone: true,
	imports: [],
	template: `<div
		class="h-[calc(100vh-theme(spacing.96))] flex justify-center items-center"
	>
		<p class="text-gray-500">Route not yet implemented.</p>
	</div>`,
})
export class NotImplementedComponent {}
