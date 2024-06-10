import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";

import { ButtonComponent } from "../button/button.component";
import { InputComponent } from "../input/input.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { TextareaComponent } from "../textarea/textarea.component";
import { EmailService } from "../email.service";
import { cn } from "@/lib/ui";

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
						labelClassName="lg:basis-[100px]"
						[form]="contactForm"
						[error]="email.validationErrors['name']"
					/>
				</div>

				<div>
					<app-input
						label="Your Email"
						name="email"
						placeholder="Type your email"
						labelClassName="lg:basis-[100px]"
						[form]="contactForm"
						[error]="email.validationErrors['email']"
					/>
				</div>
			</div>

			<div class="h-0.5 bg-separator"></div>

			<div class="mt-10 space-y-8">
				<div
					class="flex justify-between gap-9 md:flex-col lg:flex-row lg:items-end lg:gap-[132px]"
				>
					<app-input
						label="City"
						name="city"
						placeholder="ex. Thessaloniki"
						orientation="vertical"
						[form]="contactForm"
						[error]="email.validationErrors['city']"
					/>

					<app-input
						label="Postal Code"
						name="postalCode"
						placeholder="ex. 54658"
						orientation="vertical"
						[form]="contactForm"
						[error]="email.validationErrors['postalCode']"
					/>
				</div>

				<div>
					<app-input
						placeholder="ex. Thessaloniki"
						label="Address"
						name="address"
						orientation="vertical"
						className="lg:w-3/5"
						[form]="contactForm"
						[error]="email.validationErrors['address']"
					/>
				</div>
			</div>

			<app-textarea
				label="Your Message"
				placeholder="Type your message"
				name="message"
				className="mt-9"
				[form]="contactForm"
				[error]="email.validationErrors['message']"
			/>

			<app-checkbox
				name="termsAndConditions"
				label="I agree with the Terms & Conditions"
				className="mt-[1.625em]"
				[form]="contactForm"
				[error]="email.validationErrors['termsAndConditions']"
			/>

			<app-button
				[disabled]="loading"
				type="submit"
				className="w-full mt-[2.875rem] md:w-auto"
				>Send!</app-button
			>

			@if (submitResultMessage) {
				<p [className]="resultMessageClass">
					{{ submitResultMessage.message }}
				</p>
			}
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

	email = inject(EmailService);

	submitResultMessage: { success: boolean; message: string } | null = null;
	loading = false;

	get resultMessageClass() {
		return cn("mt-6 text-lg font-semibold", {
			"text-green-500": this.submitResultMessage?.success,
			"text-red-500": this.submitResultMessage?.success === false,
		});
	}

	async handleSubmit() {
		this.loading = true;

		if (!this.email.validateData(this.contactForm.value)) {
			this.loading = false;
			return;
		}

		try {
			await this.email.send(this.contactForm.value);

			this.submitResultMessage = { success: true, message: "Email sent!" };
			this.contactForm.reset();
		} catch (error) {
			console.error(error);
			this.submitResultMessage = {
				success: false,
				message: "An error occurred",
			};
		}
		this.loading = false;
	}
}
