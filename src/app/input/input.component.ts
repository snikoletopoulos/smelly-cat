import { Component, Input } from "@angular/core";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

import { cn } from "@/lib/ui";

@Component({
	selector: "app-input",
	standalone: true,
	imports: [ReactiveFormsModule],
	template: `
		<ng-container [formGroup]="form">
			<div [className]="containerClass">
				<label [className]="labelClass" [for]="name">{{ label }}</label>
				<input
					class="w-full grow-[2] rounded-md border border-gray-300 px-4 py-2"
					[type]="type"
					[id]="name"
					[name]="name"
					[placeholder]="placeholder"
					[formControlName]="name"
				/></div
		></ng-container>
	`,
})
export class InputComponent {
	@Input({ required: true }) name = "";
	@Input({ required: true }) label = "";
	@Input() placeholder = "";
	@Input() type = "text";
	@Input() orientation: Orientation = "horizontal";
	@Input() className = "";
	@Input() labelClassName = "";
	@Input() form!: FormGroup;

	get containerClass() {
		return cn(
			"flex",
			{
				"flex-col gap-2 lg:flex-row lg:items-center lg:justify-between lg:gap-3":
					this.orientation === "horizontal",
				"flex-col gap-2": this.orientation === "vertical",
			},
			this.className
		);
	}

	get labelClass() {
		return cn("text-sm font-semibold", this.labelClassName);
	}
}

type Orientation = "horizontal" | "vertical";
