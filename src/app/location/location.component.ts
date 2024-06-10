import { Component } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";
import { Loader } from "@googlemaps/js-api-loader";

import { environment } from "@/environments/environment";

@Component({
	selector: "app-location",
	standalone: true,
	imports: [GoogleMapsModule],
	template: `
		<section class="flex flex-col gap-11 md:items-end">
			<div
				class="aspect-square w-full overflow-hidden rounded-xl border border-gray-300 lg:h-[415px] lg:w-[480px]"
			>
				<google-map
					width="100%"
					height="100%"
					[center]="center"
					[options]="{ disableDefaultUI: true }"
					[zoom]="zoom"
				/>
			</div>

			<div>
				<h3 class="text-2xl font-extrabold">Headquarters</h3>

				<address class="mt-6 not-italic">
					Aristotelous 15, 54658<br />Thessaloniki, Greece
				</address>

				<br />
				<a href="tel:+302311290998" class="hover:text-primary"
					>+30 231 129 0998</a
				>
				<br />
				<a href="mail:hey@smellycat.gr" class="hover:text-primary"
					>hey&#64;smellycat.gr</a
				>
			</div>
		</section>
	`,
})
export class LocationComponent {
	center: google.maps.LatLngLiteral = { lat: 40.6401, lng: 22.9444 };
	zoom = 13.5;
	environment = environment;

	constructor() {
		const loader = new Loader({
			apiKey: environment.API_KEY,
			version: "weekly",
			libraries: ["places"],
		});

		loader.importLibrary("maps");
	}
}
