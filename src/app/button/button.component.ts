import { Component, Input } from "@angular/core";

import { cn } from "@/lib/ui";

function mergeClassNames(value: string | undefined) {
	return cn(
		"bg-primary disabled:bg-gray-500 disabled:opacity-70 hover:bg-primary/90 rounded px-14 py-2.5 text-xl font-bold text-white",
		value
	);
}

@Component({
	selector: "app-button",
	standalone: true,
	imports: [],
	template: `<button [class]="className" [type]="type" [disabled]="disabled">
		<ng-content />
	</button>`,
})
export class ButtonComponent {
	@Input({ transform: mergeClassNames }) className = "";
	@Input() type = "button";
	@Input() disabled = false;
}
