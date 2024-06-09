import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import { cn } from "@/lib/ui";

@Component({
	selector: "app-checkbox",
	standalone: true,
	imports: [ReactiveFormsModule],
	template: `
		<ng-container [formGroup]="form">
			<div [className]="containerClass">
				<input
					class="relative size-6 appearance-none rounded border-2 border-black border-b-black after:absolute after:left-[5px] after:top-px after:hidden after:size-8 after:h-[15px] after:w-[10px] after:rotate-45 after:border-b-4 after:border-r-4 checked:bg-primary checked:after:block"
					type="checkbox"
					[id]="name"
					[name]="name"
					[formControlName]="name"
				/>
				<label class="text-sm" [for]="name">{{ label }}</label>
			</div></ng-container
		>
	`,
})
export class CheckboxComponent {
	@Input({ required: true }) name = "";
	@Input({ required: true }) label = "";
	@Input() className = "";
	@Input() form!: FormGroup;

	get containerClass() {
		return cn("space-x-4 flex items-center", this.className);
	}
}
