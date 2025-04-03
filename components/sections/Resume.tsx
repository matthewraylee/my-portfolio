"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { workExperience, education, certifications } from "@/app/data";

const Resume = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">Resume</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Work Experience</h3>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <div
                  key={index}
                  className="relative border-l-2 border-primary/30 pl-6 pb-6"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-semibold">{job.title}</h4>
                  <p className="text-primary font-medium">{job.company}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {job.period}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Education</h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="relative border-l-2 border-primary/30 pl-6 pb-6"
                >
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-primary font-medium">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground mb-2">
                    {edu.period}
                  </p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              ))}
            </div>

            {/* Certification section */}
            {/* <h3 className="text-xl font-bold mt-10 mb-4">Certifications</h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Badge variant="outline" className="p-1">
                    <span className="text-primary">✓</span>
                  </Badge>
                  <div>
                    <h4 className="font-medium">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}, {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <a
              href="https://drive.google.com/file/d/1cpyXkWEZ8g4GTcwsFVxbh38H9toAj88Z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Full Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
});

Resume.displayName = "Resume";

export default Resume;
