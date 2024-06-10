import { Injectable } from "@angular/core";
import { environment } from "@/enviroments/enviroment";
import { z } from "zod";

@Injectable({
	providedIn: "root",
})
export class EmailService {
	private url = environment.apiUrl;
	private EmailSchema = z.object({
		name: z.string({ required_error: "Required" }).min(1, "Required"),
		email: z.string({ required_error: "Required" }).email("Email is invalid"),
		city: z.string({ required_error: "Required" }).min(1, "Required"),
		postalCode: z
			.string({ required_error: "Required" })
			.min(5, "Code must be 5 digits")
			.max(5, "Code must be 5 digits"),
		address: z.string({ required_error: "Required" }).min(1, "Required"),
		message: z.string().optional(),
		termsAndConditions: z.literal(true, {
			errorMap: () => ({ message: "Terms and Conditions must be accepted" }),
		}),
	});

	validationErrors: Record<string, string> = {};

	validateData(data: unknown): data is z.infer<typeof this.EmailSchema> {
		this.validationErrors = {};
		const result = this.EmailSchema.safeParse(data);

		if (result.success) return true;

		this.validationErrors = result.error.issues.reduce(
			(acc, error) => {
				acc[error.path[0]] = error.message;
				return acc;
			},
			{} as Record<string, string>
		);

		return false;
	}

	async send(data: z.infer<typeof this.EmailSchema>) {
		const result = await fetch(this.url, {
			method: "POST",
			body: JSON.stringify({
				name: data.name,
				email: data.email,
				city: data.city,
				postalCode: data.postalCode,
				address: data.address,
				message: data.message,
			}),
		});

		if (!result.ok) throw new Error("Failed to send email");
	}
}
