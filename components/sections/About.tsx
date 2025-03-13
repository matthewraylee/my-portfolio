"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
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
              I&apos;m a data professional with expertise in analytics, business
              intelligence, and software development. With over 5 years of
              experience, I specialize in turning raw data into meaningful
              insights that drive strategic decisions.
            </p>
            <p className="text-lg mb-4">
              My background combines technical expertise with business acumen,
              allowing me to bridge the gap between data and business strategy.
              Im passionate about creating data-driven solutions that solve
              real-world problems.
            </p>
            <p className="text-lg mb-6">
              When I&apos;m not working with data, you can find me hiking,
              reading about emerging technologies, or contributing to
              open-source projects.
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
              <Button variant="outline" size="sm">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" size="sm">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/placeholder.svg?height=320&width=320"
                alt="John Doe"
                className="object-cover w-full h-full"
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
