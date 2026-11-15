"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
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
                  Email me directly and I&apos;ll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" asChild>
                  <a href="mailto:matthewraylee.work@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email matthewraylee.work@gmail.com
                  </a>
                </Button>
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
