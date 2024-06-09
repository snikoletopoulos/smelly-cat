import { Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { TextareaComponent } from "../textarea/textarea.component";

@Component({
	selector: "app-contact-form",
	standalone: true,
	imports: [
		ButtonComponent,
		InputComponent,
		CheckboxComponent,
		TextareaComponent,
		ReactiveFormsModule,
	],
	template: `<h1 class="text-[2.5rem] font-extrabold">Contact Us</h1>
		<p class="mt-6 text-lg font-semibold">
			We are all cat persons, so if you got any question, drop it below and we
			will contact you back!
		</p>

		<form [formGroup]="contactForm" (submit)="handleSubmit()">
			<div class="my-10 space-y-8">
				<div>
					<app-input
						label="Your Full Name"
						name="name"
						placeholder="Type your name"
						labelClassName="basis-[100px]"
						[form]="contactForm"
					/>
				</div>

				<div>
					<app-input
						label="Your Email"
						name="email"
						placeholder="Type your email"
						labelClassName="basis-[100px]"
						[form]="contactForm"
					/>
				</div>
			</div>

			<div class="h-0.5 bg-separator"></div>

			<div class="mt-10 space-y-8">
				<!-- TODO -->
				<div class="flexa gap-[132px]">
					<app-input
						label="City"
						name="city"
						placeholder="ex. Thessaloniki"
						orientation="vertical"
						className="min-w-0"
						[form]="contactForm"
					/>

					<app-input
						label="Postal Code"
						name="postalCode"
						placeholder="ex. 54658"
						orientation="vertical"
						className="min-w-0"
						[form]="contactForm"
					/>
				</div>

				<div>
					<app-input
						placeholder="ex. Thessaloniki"
						label="Address"
						name="address"
						orientation="vertical"
						className="w-2/3"
						[form]="contactForm"
					/>
				</div>
			</div>

			<app-textarea
				label="Your Message"
				placeholder="Type your message"
				name="message"
				className="mt-9"
				[form]="contactForm"
			/>

			<app-checkbox
				name="termsAndConditions"
				label="I agree with the Terms & Conditions"
				className="mt-[1.625em]"
				[form]="contactForm"
			/>

			<app-button type="submit" className="w-full mt-[2.875rem] md:w-auto"
				>Send!</app-button
			>
		</form>`,
})
export class ContactFormComponent {
	contactForm = new FormGroup({
		name: new FormControl(""),
		email: new FormControl(""),
		city: new FormControl(""),
		postalCode: new FormControl(""),
		address: new FormControl(""),
		message: new FormControl(""),
		termsAndConditions: new FormControl(false),
	});

	handleSubmit() {
		console.log(this.contactForm.value);
	}
}
