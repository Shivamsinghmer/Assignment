"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Zap, DollarSign, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Transactions",
    description: "Bank-level security and escrow services ensure every transaction is safe and protected.",
    color: "text-blue-500",
  },
  {
    icon: Zap,
    title: "Efficient Marketplace",
    description: "Quickly find buyers or sellers with our intelligent matching and streamlined processes.",
    color: "text-purple-500",
  },
  {
    icon: DollarSign,
    title: "Maximize Value",
    description: "Unlock hidden revenue from unused licenses or acquire essential software at competitive prices.",
    color: "text-green-500",
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Our dedicated team provides guidance and support throughout the entire resale journey.",
    color: "text-orange-500",
  },
];

export default function ValuePropositionSection() {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="features" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose <span className="text-primary">SoftSell Revolution</span>?
          </h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            We offer a unique blend of security, efficiency, and value, making software license resale straightforward and profitable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <Card className="h-full text-center hover:shadow-2xl transition-shadow duration-300 group transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <feature.icon className={`h-12 w-12 ${feature.color} group-hover:animate-subtle-bob`} />
                  </div>
                  <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">Key Benefits at a Glance</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                    "Turn sunk costs into assets",
                    "Acquire licenses affordably",
                    "Promote software circular economy",
                    "Fully compliant and legal",
                    "Transparent pricing",
                    "Dedicated expert assistance"
                ].map((benefit, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center bg-secondary/50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                        <CheckCircle className="h-6 w-6 text-accent mr-3 shrink-0" />
                        <span className="text-foreground/80">{benefit}</span>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
