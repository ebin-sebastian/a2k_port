"use server";

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    project: z.string().min(1, "Please select an inquiry type"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    // Honeypot field - should be empty
    _website: z.string().max(0, "Bot detected"),
});

export async function submitContactForm(prevState: any, formData: FormData) {
    // Artificial delay to simulate real-world processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const rawData = {
        name: formData.get("name"),
        email: formData.get("email"),
        project: formData.get("project"),
        message: formData.get("message"),
        _website: formData.get("display_none_email"), // The actual name of our honeypot field
    };

    try {
        const validatedData = contactSchema.parse(rawData);
        
        // This is where you would normally send the email or save to DB
        console.log("Form validated on server:", validatedData);
        
        return {
            success: true,
            message: "Thank you for reaching out. Your vision has been received.",
        };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return {
                success: false,
                errors: error.flatten().fieldErrors,
            };
        }
        return {
            success: false,
            message: "An unexpected error occurred. Please try again later.",
        };
    }
}
