"use server";

import { resend } from "@/lib/resend";
import { z } from "zod";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

export async function subscribeToNewsletter(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;

  // 1. Validate email
  const validatedFields = subscribeSchema.safeParse({ email });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid email",
      message: "",
      success: false,
    };
  }

  try {
    // 2. Add to Resend (Unified Contacts API - no audienceId needed)
    const { data, error } = await resend.contacts.create({
      email: validatedFields.data.email,
      unsubscribed: false,
    });

    if (error) {
      // Handle "already exists" or other errors
      if (error.message && error.message.toLowerCase().includes("already exists")) {
        return {
          error: "You are already subscribed!",
          message: "",
          success: false,
        };
      }
      return {
        error: error.message || "Failed to subscribe. Please try again.",
        message: "",
        success: false,
      };
    }

    return {
      message: "Successfully subscribed! Welcome to Xpectra.",
      error: "",
      success: true,
    };
  } catch (error: any) {
    console.error("Subscription error:", error);
    return {
      error: "Something went wrong. Please try again later.",
      message: "",
      success: false,
    };
  }
}
