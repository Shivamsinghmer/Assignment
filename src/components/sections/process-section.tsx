"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UploadCloud, ClipboardCheck, Repeat, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const processSteps = [
  {
    icon: UploadCloud,
    title: "List Your Licenses",
    description: "Securely submit details of your unused software licenses through our intuitive platform.",
  },
  {
    icon: ClipboardCheck,
    title: "Verification & Matching",
    description: "Our experts verify license validity and match you with interested buyers or sellers.",
  },
  {
    icon: Repeat,
    title: "Transact & Transfer",
    description: "Complete the transaction through our secure escrow service and transfer licenses seamlessly.",
  },
];

export default function ProcessSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            How <span className="text-primary">SoftSell</span> Works
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            A simple, transparent, and secure process to buy or sell software licenses.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="relative flex flex-col"
            >
              <Card className="flex-1 flex flex-col hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="default" className="bg-primary text-primary-foreground">
                      Step {index + 1}
                    </Badge>
                    <step.icon className="h-10 w-10 text-primary group-hover:animate-subtle-bob" />
                  </div>
                  <CardTitle className="mt-4 text-xl font-semibold">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{step.description}</p>
                </CardContent>
              </Card>
              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full transform -translate-y-1/2 ml-4 mr-4 w-16">
                  {/* Simple line connector */}
                   <ArrowRight className="h-8 w-8 text-primary/50" />
                </div>
              )}
            </motion.div>
          ))}
           {/* Mobile connector lines */}
           <div className="md:hidden space-y-8 mt-8">
            {processSteps.slice(0, -1).map((_, index) => (
              <div key={`mobile-connector-${index}`} className="flex justify-center items-center">
                <div className="w-px h-12 bg-primary/30"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
