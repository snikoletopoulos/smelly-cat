import { Component, Input } from "@angular/core";

import { cn } from "@/lib/ui";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
	selector: "app-textarea",
	standalone: true,
	imports: [ReactiveFormsModule],
	template: `
		<ng-container [formGroup]="form">
			<div [className]="containerClass">
				<div class="mb-2">
					<label class="text-sm font-semibold" [for]="name">{{ label }}</label>
					<span class="float-right text-sm text-secondary">Optional</span>
				</div>

				<div>
					<input
						class="w-full rounded-md border border-gray-300 px-4 py-2"
						[type]="type"
						[id]="name"
						[name]="name"
						[placeholder]="placeholder"
						[formControlName]="name"
					/>

					@if (error) {
						<p class="absolute text-sm text-red-500">{{ error }}</p>
					}
				</div>
			</div></ng-container
		>
	`,
})
export class TextareaComponent {
	@Input({ required: true }) name = "";
	@Input({ required: true }) label = "";
	@Input() placeholder = "";
	@Input() type = "text";
	@Input() className = "";
	@Input() form!: FormGroup;
	@Input() error?: string;

	get containerClass() {
		return cn("", {}, this.className);
	}
}
