"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skills } from "@/app/data";

const Skills = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <section ref={ref} className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-2">Skills</h2>
        <div className="w-20 h-1 bg-primary mb-8"></div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full md:w-80 grid-cols-2">
            <TabsTrigger value="technical">Technical Skills</TabsTrigger>
            <TabsTrigger value="business">Business Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="technical" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.technical.map((skill) => (
                <Card key={skill.name} className="border border-border/40">
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                        <CardDescription>{skill.level}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="business" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.business.map((skill) => (
                <Card key={skill.name} className="border border-border/40">
                  <CardHeader className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{skill.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{skill.name}</CardTitle>
                        <CardDescription>{skill.level}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
});

Skills.displayName = "Skills";

export default Skills;
