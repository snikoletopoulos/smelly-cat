import { Component, Input } from "@angular/core";
import { cn } from "@/lib/ui";

function mergeClassNames(value: string | undefined) {
	return cn(
		"bg-primary hover:bg-primary/90 rounded px-14 py-2.5 text-xl font-bold text-white",
		value
	);
}

@Component({
	selector: "app-button",
	standalone: true,
	imports: [],
	template: `<button [class]="className" [type]="type">
		<ng-content />
	</button>`,
})
export class ButtonComponent {
	@Input({ transform: mergeClassNames }) className = "";
	// @Input() onClick?: () => void;
	@Input() type = "button";
}
