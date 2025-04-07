"use client";

import type React from "react";

import { forwardRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Linkedin,
  Github,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // Parse the response body
      const responseData = await response.json();

      if (!response.ok) {
        // Log more detailed error information
        console.error("Submission Error:", {
          status: response.status,
          error: responseData.error,
          details: responseData.errors || "Unknown error",
        });

        // More specific error handling
        if (responseData.errors && Array.isArray(responseData.errors)) {
          // If we have multiple validation errors
          const errorMessage = responseData.errors.join(", ");
          throw new Error(errorMessage);
        } else {
          // Fallback to generic error
          throw new Error(responseData.error || "Failed to send message");
        }
      }

      // Success
      setFormStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-6">
              I&apos;m always open to new opportunities and collaborations. Feel
              free to reach out if you&apos;d like to discuss a project or just
              say hello!
            </p>

            <div className="space-y-4">
              {/* Email contact - now clickable */}
              <a
                href="mailto:matthewraylee.work@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">
                    matthewraylee.work@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn contact - now clickable */}
              <a
                href="https://linkedin.com/in/matthewraylee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <p className="text-muted-foreground">
                    linkedin.com/in/matthewraylee
                  </p>
                </div>
              </a>

              {/* GitHub contact - now clickable */}
              <a
                href="https://github.com/matthewraylee"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Github className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <p className="text-muted-foreground">
                    github.com/matthewraylee
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full p-2 rounded-md border border-input bg-background"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Subject"
                      className="w-full p-2 rounded-md border border-input bg-background"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="w-full p-2 rounded-md border border-input bg-background resize-none"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {formStatus === "success" && (
                    <div className="p-3 bg-green-50 text-green-800 border border-green-200 rounded-md flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                      <p>Your message has been sent successfully!</p>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="p-3 bg-red-50 text-red-800 border border-red-200 rounded-md flex items-center">
                      <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                      <p>
                        Failed to send message. Please try again or email me
                        directly.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;
