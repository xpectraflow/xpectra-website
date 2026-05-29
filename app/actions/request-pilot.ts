"use server";

import { resend } from "@/lib/resend";
import { z } from "zod";

const pilotSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export async function requestPilotAction(formData: FormData) {
  const email = formData.get("email") as string;

  // 1. Validate email
  const validatedFields = pilotSchema.safeParse({ email });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid email",
      message: "",
      success: false,
    };
  }

  try {
    // 2. Add to Resend Contacts API
    const { data, error } = await resend.contacts.create({
      email: validatedFields.data.email,
      unsubscribed: false,
    });

    if (error) {
      if (error.message && error.message.toLowerCase().includes("already exists")) {
        return {
          error: "You have already requested a pilot!",
          message: "",
          success: false,
        };
      }
      return {
        error: error.message || "Failed to submit request. Please try again.",
        message: "",
        success: false,
      };
    }

    return {
      message: "Pilot request received! We'll be in touch shortly.",
      error: "",
      success: true,
    };
  } catch (error: any) {
    console.error("Pilot request error:", error);
    return {
      error: "Something went wrong. Please try again later.",
      message: "",
      success: false,
    };
  }
}
