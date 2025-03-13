"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const About = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">About Me</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg mb-4">
              I&apos;m a data professional and MSIS student with a background in
              software engineering and business intelligence. I&apos;m
              passionate about creating data-driven solutions that solve
              real-world problems.
            </p>
            <p className="text-lg mb-4">
              Currently pursuing my Master of Science in Information Systems at
              the University of Washington, I specialize in transforming complex
              data into meaningful insights that drive business decisions. My
              experience in software development and data analysis allows me to
              bridge the gap between technical solutions and business strategy.
            </p>
            <p className="text-lg mb-6">
              When I&apos;m not working with data, you can find me golfing,
              exploring emerging technologies, or working on personal projects
              to sharpen my skills.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline" className="text-sm">
                Data Analysis
              </Badge>
              <Badge variant="outline" className="text-sm">
                Business Intelligence
              </Badge>
              <Badge variant="outline" className="text-sm">
                Software Development
              </Badge>
              <Badge variant="outline" className="text-sm">
                Machine Learning
              </Badge>
              <Badge variant="outline" className="text-sm">
                Data Visualization
              </Badge>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/matthewraylee/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://github.com/matthewraylee/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative overflow-hidden rounded-lg border-4 border-primary/20 shadow-xl w-86">
              <Image
                src="/matthew_headshot.jpeg"
                alt="Matthew Lee"
                width={400}
                height={500}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
});

About.displayName = "About";

export default About;
