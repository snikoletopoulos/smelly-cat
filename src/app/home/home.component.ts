import { Component } from "@angular/core";
import { ContactFormComponent } from "../contact-form/contact-form.component";
import { LocationComponent } from "../location/location.component";

@Component({
	selector: "app-home",
	standalone: true,
	imports: [ContactFormComponent, LocationComponent],
	template: `
		<section
			class="flex flex-col justify-between gap-14 pb-20 pt-10 md:flex-row md:pb-24 md:pt-14 lg:pb-[11.687em] lg:pt-20"
		>
			<div class="flex-1">
				<app-contact-form />
			</div>

			<div class="flex-1 text-center md:mt-24 md:text-right">
				<app-location />
			</div>
		</section>
	`,
})
export class HomeComponent {}
